'use client';

import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { supabase, type ListingItem } from '@/lib/supabase';

type ListingForm = {
  slug: string;
  title: string;
  location: string;
  listing_kind: 'plot' | 'house';
  transaction_type: 'sale' | 'rent';
  description: string;
  features: string[];
  pricingJson: string; // free-form JSON editor
  image_url: string | null;
  active: boolean;
  published: boolean;
  sort_order: number;
};

type PricingSimple = {
  cash: string;
  months6: string;
  months12: string;
  months24: string;
  monthly: string;
  note: string;
};

const emptyListingForm: ListingForm = {
  slug: '',
  title: '',
  location: 'Ndola, Zambia',
  listing_kind: 'plot',
  transaction_type: 'sale',
  description: '',
  features: [],
  pricingJson: '{}',
  image_url: null,
  active: true,
  published: true,
  sort_order: 0,
};

const emptyPricingSimple: PricingSimple = {
  cash: '',
  months6: '',
  months12: '',
  months24: '',
  monthly: '',
  note: '',
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .slice(0, 80);

export default function ListingsCrud() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [listings, setListings] = useState<ListingItem[]>([]);
  const [editing, setEditing] = useState<ListingItem | null>(null);

  const [form, setForm] = useState<ListingForm>({ ...emptyListingForm });
  const [pricingMode, setPricingMode] = useState<'simple' | 'advanced'>('simple');
  const [pricingSimple, setPricingSimple] = useState<PricingSimple>({ ...emptyPricingSimple });
  const [featureInput, setFeatureInput] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUploading, setImageUploading] = useState(false);

  const editingLabel = useMemo(() => {
    if (!editing) return 'New Listing';
    return `Edit: ${editing.title}`;
  }, [editing]);

  const inputClass =
    'w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-colors';
  const labelClass = 'mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500';

  const fetchListings = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from('real_estate_listings')
        .select('*')
        .order('sort_order', { ascending: true });

      if (fetchError) throw fetchError;
      setListings((data ?? []) as ListingItem[]);
    } catch (e: any) {
      setError(e?.message ?? 'Failed to fetch listings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const startCreate = () => {
    setEditing(null);
    setForm({ ...emptyListingForm });
    setPricingMode('simple');
    setPricingSimple({ ...emptyPricingSimple });
    setFeatureInput('');
    setImageFile(null);
    setImageUploading(false);
  };

  const parsePricingSimple = (pricing: any): PricingSimple => {
    const p = (pricing && typeof pricing === 'object') ? pricing : {};
    const toStr = (v: any) => (typeof v === 'number' || typeof v === 'string' ? String(v) : '');
    return {
      cash: toStr(p.cash),
      months6: toStr(p.months6),
      months12: toStr(p.months12),
      months24: toStr(p.months24),
      monthly: toStr(p.monthly),
      note: typeof p.note === 'string' ? p.note : '',
    };
  };

  const startEdit = (item: ListingItem) => {
    setEditing(item);
    setForm({
      slug: item.slug ?? '',
      title: item.title ?? '',
      location: item.location ?? 'Ndola, Zambia',
      listing_kind: item.listing_kind ?? 'plot',
      transaction_type: item.transaction_type ?? 'sale',
      description: item.description ?? '',
      features: item.features ?? [],
      pricingJson: item.pricing ? JSON.stringify(item.pricing, null, 2) : '{}',
      image_url: item.image_url ?? null,
      active: item.active ?? true,
      published: item.published ?? true,
      sort_order: item.sort_order ?? 0,
    });
    setPricingMode('simple');
    setPricingSimple(parsePricingSimple(item.pricing));
    setFeatureInput('');
    setImageFile(null);
    setImageUploading(false);
  };

  const onCancel = () => {
    setEditing(null);
    setForm({ ...emptyListingForm });
    setPricingMode('simple');
    setPricingSimple({ ...emptyPricingSimple });
    setFeatureInput('');
    setImageFile(null);
    setImageUploading(false);
  };

  const addFeature = () => {
    const v = featureInput.trim();
    if (!v) return;
    setForm((p) => ({ ...p, features: [...p.features, v] }));
    setFeatureInput('');
  };

  const removeFeature = (idx: number) => {
    setForm((p) => ({ ...p, features: p.features.filter((_, i) => i !== idx) }));
  };

  const handleImagePick = (file: File | null) => {
    setImageFile(file);
    setError(null);
  };

  const uploadImageIfNeeded = async () => {
    if (!imageFile) return form.image_url;

    if (!imageFile.type.startsWith('image/')) {
      throw new Error('Please upload an image file.');
    }

    setImageUploading(true);
    setError(null);
    try {
      const ext = imageFile.name.split('.').pop() || 'jpg';
      const path = `listings/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { data, error: uploadError } = await supabase.storage
        .from('media')
        .upload(path, imageFile, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: publicData } = supabase.storage.from('media').getPublicUrl(data.path);
      return publicData.publicUrl;
    } finally {
      setImageUploading(false);
    }
  };

  const onSave = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      if (!form.slug.trim()) throw new Error('Slug is required.');
      if (!form.title.trim()) throw new Error('Title is required.');

      let pricingObj: any = {};
      const toNumOrNull = (v: string) => {
        const t = v.trim();
        if (!t) return null;
        const n = Number(t);
        return Number.isFinite(n) ? n : null;
      };

      if (pricingMode === 'advanced') {
        try {
          pricingObj = JSON.parse(form.pricingJson || '{}');
        } catch {
          throw new Error('Pricing must be valid JSON.');
        }
      } else {
        if (form.transaction_type === 'rent') {
          const monthly = toNumOrNull(pricingSimple.monthly);
          if (monthly === null) throw new Error('Monthly rent is required.');
          pricingObj = {
            monthly,
            ...(pricingSimple.note.trim() ? { note: pricingSimple.note.trim() } : {}),
          };
        } else {
          const cash = toNumOrNull(pricingSimple.cash);
          const months6 = toNumOrNull(pricingSimple.months6);
          const months12 = toNumOrNull(pricingSimple.months12);
          const months24 = toNumOrNull(pricingSimple.months24);

          if ([cash, months6, months12, months24].every((v) => v === null)) {
            throw new Error('Enter at least one price (cash or an installment option).');
          }

          pricingObj = {
            ...(cash !== null ? { cash } : {}),
            ...(months6 !== null ? { months6 } : {}),
            ...(months12 !== null ? { months12 } : {}),
            ...(months24 !== null ? { months24 } : {}),
            ...(pricingSimple.note.trim() ? { note: pricingSimple.note.trim() } : {}),
          };
        }
      }

      const imageUrl = await uploadImageIfNeeded();

      const payload = {
        slug: form.slug,
        title: form.title,
        location: form.location,
        listing_kind: form.listing_kind,
        transaction_type: form.transaction_type,
        description: form.description,
        features: form.features,
        pricing: pricingObj,
        image_url: imageUrl ?? null,
        gallery_urls: [],
        active: form.active,
        published: form.published,
        sort_order: form.sort_order,
      };

      if (editing?.id) {
        const { error: updateError } = await supabase
          .from('real_estate_listings')
          .update(payload)
          .eq('id', editing.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from('real_estate_listings').insert(payload);
        if (insertError) throw insertError;
      }

      await fetchListings();
      setEditing(null);
      setForm({ ...emptyListingForm });
      setFeatureInput('');
      setImageFile(null);
    } catch (err: any) {
      setError(err?.message ?? 'Failed to save listing');
    } finally {
      setSaving(false);
    }
  };

  const onDelete = async (item: ListingItem) => {
    const ok = window.confirm(`Delete listing: "${item.title}"?`);
    if (!ok) return;

    setSaving(true);
    setError(null);
    try {
      const { error: deleteError } = await supabase
        .from('real_estate_listings')
        .delete()
        .eq('id', item.id);
      if (deleteError) throw deleteError;
      await fetchListings();
      setEditing(null);
      setForm({ ...emptyListingForm });
      setFeatureInput('');
      setImageFile(null);
    } catch (err: any) {
      setError(err?.message ?? 'Failed to delete listing');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">CMS Module</p>
          <h2 className="text-2xl font-bold uppercase text-black">Listings</h2>
          <p className="mt-1 text-sm text-gray-500">
            {listings.length} total · {listings.filter((l) => l.active).length} active
          </p>
        </div>
        <button
          onClick={startCreate}
          className="bg-black px-4 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2e2e2e] cursor-pointer"
        >
          New Listing
        </button>
      </div>

      <div className="border border-gray-100 bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">Editor</p>
            <h3 className="font-bold uppercase text-black">{editingLabel}</h3>
          </div>
          {(editing || form.title) && (
            <button
              onClick={onCancel}
              className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 hover:text-black transition-colors cursor-pointer"
              type="button"
            >
              Clear
            </button>
          )}
        </div>

        <form onSubmit={onSave} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Title *</label>
              <input
                className={inputClass}
                value={form.title}
                onChange={(e) => {
                  const v = e.target.value;
                  setForm((p) => ({
                    ...p,
                    title: v,
                    slug: editing ? p.slug : slugify(v) || p.slug,
                  }));
                }}
                required
              />
            </div>
            <div>
              <label className={labelClass}>Slug *</label>
              <input
                className={inputClass}
                value={form.slug}
                onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Location</label>
              <input
                className={inputClass}
                value={form.location}
                onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
              />
            </div>
            <div>
              <label className={labelClass}>Description</label>
              <input
                className={inputClass}
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Listing Type</label>
              <select
                className={inputClass}
                value={form.listing_kind}
                onChange={(e) => setForm((p) => ({ ...p, listing_kind: e.target.value as any }))}
              >
                <option value="plot">Plot</option>
                <option value="house">House</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Transaction Type</label>
              <select
                className={inputClass}
                value={form.transaction_type}
                onChange={(e) => setForm((p) => ({ ...p, transaction_type: e.target.value as any }))}
              >
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Features</label>
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <input
                className={`${inputClass} flex-1`}
                placeholder="Type feature then press Add"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addFeature();
                  }
                }}
              />
              <button
                type="button"
                onClick={addFeature}
                className="border border-gray-200 bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Add
              </button>
            </div>
            {form.features.length === 0 ? (
              <div className="text-sm text-gray-500">No features added.</div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {form.features.map((f, idx) => (
                  <div
                    key={`${f}-${idx}`}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-100"
                  >
                    <span className="text-sm text-gray-700">{f}</span>
                    <button
                      type="button"
                      onClick={() => removeFeature(idx)}
                      className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-end justify-between gap-4 mb-2">
              <div>
                <label className={labelClass}>Pricing *</label>
                <p className="text-xs text-gray-500">
                  Use the simple fields below. You can switch to Advanced JSON only if needed.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPricingMode((m) => (m === 'simple' ? 'advanced' : 'simple'))}
                className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                {pricingMode === 'simple' ? 'Advanced (JSON)' : 'Simple fields'}
              </button>
            </div>

            {pricingMode === 'advanced' ? (
              <>
                <textarea
                  className={`${inputClass} min-h-[140px] font-mono`}
                  value={form.pricingJson}
                  onChange={(e) => setForm((p) => ({ ...p, pricingJson: e.target.value }))}
                />
                <div className="mt-1 text-xs text-gray-500">
                  Example: <span className="font-mono">{"{ \"cash\": 70000, \"months6\": 85000 }"}</span>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                {form.transaction_type === 'rent' ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Monthly Rent *</label>
                      <input
                        className={inputClass}
                        inputMode="decimal"
                        placeholder="e.g. 3500"
                        value={pricingSimple.monthly}
                        onChange={(e) => setPricingSimple((p) => ({ ...p, monthly: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Note (optional)</label>
                      <input
                        className={inputClass}
                        placeholder="e.g. utilities excluded"
                        value={pricingSimple.note}
                        onChange={(e) => setPricingSimple((p) => ({ ...p, note: e.target.value }))}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Cash Price (optional)</label>
                        <input
                          className={inputClass}
                          inputMode="decimal"
                          placeholder="e.g. 70000"
                          value={pricingSimple.cash}
                          onChange={(e) => setPricingSimple((p) => ({ ...p, cash: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Note (optional)</label>
                        <input
                          className={inputClass}
                          placeholder="e.g. title deed included"
                          value={pricingSimple.note}
                          onChange={(e) => setPricingSimple((p) => ({ ...p, note: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClass}>6 Months (optional)</label>
                        <input
                          className={inputClass}
                          inputMode="decimal"
                          placeholder="e.g. 85000"
                          value={pricingSimple.months6}
                          onChange={(e) => setPricingSimple((p) => ({ ...p, months6: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>12 Months (optional)</label>
                        <input
                          className={inputClass}
                          inputMode="decimal"
                          placeholder="e.g. 95000"
                          value={pricingSimple.months12}
                          onChange={(e) => setPricingSimple((p) => ({ ...p, months12: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>24 Months (optional)</label>
                        <input
                          className={inputClass}
                          inputMode="decimal"
                          placeholder="e.g. 120000"
                          value={pricingSimple.months24}
                          onChange={(e) => setPricingSimple((p) => ({ ...p, months24: e.target.value }))}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <div>
            <label className={labelClass}>Main Image</label>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImagePick(e.target.files?.[0] ?? null)}
                  className="w-full text-sm text-gray-600 cursor-pointer file:mr-4 file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-[0.18em] file:text-black"
                />
                {imageUploading && <div className="mt-1 text-sm text-gray-500">Uploading image...</div>}
              </div>
              <div className="w-full sm:w-56">
                {imageFile ? (
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Selected preview"
                    className="h-32 w-full border border-gray-200 object-cover"
                  />
                ) : form.image_url ? (
                  <img
                    src={form.image_url}
                    alt="Current listing"
                    className="h-32 w-full border border-gray-200 object-cover"
                  />
                ) : (
                  <div className="flex h-32 w-full items-center justify-center border border-dashed border-gray-200 text-gray-400">
                    No image
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <input
                id="active"
                type="checkbox"
                checked={form.active}
                onChange={(e) => setForm((p) => ({ ...p, active: e.target.checked }))}
                className="w-4 h-4 accent-black cursor-pointer"
              />
              <label htmlFor="active" className="text-sm text-gray-700 cursor-pointer">
                Active
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="published"
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm((p) => ({ ...p, published: e.target.checked }))}
                className="w-4 h-4 accent-black cursor-pointer"
              />
              <label htmlFor="published" className="text-sm text-gray-700 cursor-pointer">
                Published
              </label>
            </div>
            <div>
              <label className={labelClass}>Sort Order</label>
              <input
                type="number"
                value={form.sort_order}
                onChange={(e) => setForm((p) => ({ ...p, sort_order: Number(e.target.value) }))}
                className={inputClass}
              />
            </div>
          </div>

          {error && <div className="border border-red-200 bg-red-50 p-3 text-sm text-red-600">{error}</div>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving || imageUploading}
              className="bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2e2e2e] cursor-pointer disabled:opacity-60"
            >
              {saving ? 'Saving...' : editing?.id ? 'Save Changes' : 'Save Listing'}
            </button>
          </div>
        </form>
      </div>

      <div>
        {loading ? (
          <div className="text-sm text-gray-500">Loading listings...</div>
        ) : listings.length === 0 ? (
          <div className="border border-dashed border-gray-200 bg-white p-10 text-center text-gray-500">
            No listings yet.
          </div>
        ) : (
          <div className="space-y-3">
            {listings.map((l) => (
              <div key={l.id} className="bg-white border border-gray-100 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-gray-300 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-12 w-16 items-center justify-center overflow-hidden border border-gray-100 bg-gray-100">
                    {l.image_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={l.image_url} alt={l.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-xs text-gray-300">IMG</div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-black">{l.title}</p>
                    <p className="truncate text-sm text-gray-500">
                      {l.listing_kind} · {l.transaction_type} · {l.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(l)}
                    className="border border-gray-200 hover:border-black text-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(l)}
                    className="border border-red-200 hover:border-red-400 text-red-700 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                    type="button"
                    disabled={saving}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

