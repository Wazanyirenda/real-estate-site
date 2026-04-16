'use client';

import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { supabase, type CareerItem } from '@/lib/supabase';

type CareerForm = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  active: boolean;
};

const emptyForm: CareerForm = {
  title: '',
  department: '',
  location: 'Ndola, Zambia',
  type: 'Full-time',
  description: '',
  requirements: [],
  active: true,
};

export default function CareersCrud() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [careers, setCareers] = useState<CareerItem[]>([]);
  const [editing, setEditing] = useState<CareerItem | null>(null);

  const [form, setForm] = useState<CareerForm>(emptyForm);
  const [reqInput, setReqInput] = useState('');

  const editingLabel = useMemo(() => {
    if (!editing) return 'New Career';
    return `Edit: ${editing.title}`;
  }, [editing]);

  const inputClass =
    'w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-colors';
  const labelClass = 'mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-gray-500';

  const fetchCareers = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabase
        .from('careers')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setCareers((data ?? []) as CareerItem[]);
    } catch (e: any) {
      setError(e?.message ?? 'Failed to fetch careers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const startCreate = () => {
    setEditing(null);
    setForm({ ...emptyForm });
    setReqInput('');
  };

  const startEdit = (item: CareerItem) => {
    setEditing(item);
    setForm({
      title: item.title ?? '',
      department: item.department ?? '',
      location: item.location ?? 'Ndola, Zambia',
      type: item.type ?? 'Full-time',
      description: item.description ?? '',
      requirements: item.requirements ?? [],
      active: item.active ?? true,
    });
    setReqInput('');
  };

  const onCancel = () => {
    setEditing(null);
    setForm({ ...emptyForm });
    setReqInput('');
  };

  const addRequirement = () => {
    const v = reqInput.trim();
    if (!v) return;
    setForm((p) => ({ ...p, requirements: [...p.requirements, v] }));
    setReqInput('');
  };

  const removeRequirement = (idx: number) => {
    setForm((p) => ({ ...p, requirements: p.requirements.filter((_, i) => i !== idx) }));
  };

  const onSave = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      if (!form.title.trim() || !form.department.trim() || !form.description.trim()) {
        setError('Please fill in Title, Department, and Description.');
        return;
      }

      if (editing?.id) {
        const { error: updateError } = await supabase
          .from('careers')
          .update({
            title: form.title,
            department: form.department,
            location: form.location,
            type: form.type,
            description: form.description,
            requirements: form.requirements,
            active: form.active,
          })
          .eq('id', editing.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from('careers').insert({
          title: form.title,
          department: form.department,
          location: form.location,
          type: form.type,
          description: form.description,
          requirements: form.requirements,
          active: form.active,
        });

        if (insertError) throw insertError;
      }

      await fetchCareers();
      setEditing(null);
      setForm({ ...emptyForm });
      setReqInput('');
    } catch (err: any) {
      setError(err?.message ?? 'Failed to save career');
    } finally {
      setSaving(false);
    }
  };

  const onDelete = async (item: CareerItem) => {
    const ok = window.confirm(`Delete career: "${item.title}"?`);
    if (!ok) return;

    setSaving(true);
    setError(null);
    try {
      const { error: deleteError } = await supabase.from('careers').delete().eq('id', item.id);
      if (deleteError) throw deleteError;
      await fetchCareers();
      setEditing(null);
      setForm({ ...emptyForm });
      setReqInput('');
    } catch (err: any) {
      setError(err?.message ?? 'Failed to delete career');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">CMS Module</p>
          <h2 className="text-2xl font-bold uppercase text-black">Careers</h2>
          <p className="mt-1 text-sm text-gray-500">
            {careers.length} total · {careers.filter((c) => c.active).length} active
          </p>
        </div>
        <button
          onClick={startCreate}
          className="bg-black px-4 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2e2e2e] cursor-pointer"
        >
          New Position
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
              <label className={labelClass}>Job Title *</label>
              <input
                className={inputClass}
                value={form.title}
                onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className={labelClass}>Department *</label>
              <input
                className={inputClass}
                value={form.department}
                onChange={(e) => setForm((p) => ({ ...p, department: e.target.value }))}
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
              <label className={labelClass}>Type</label>
              <input
                className={inputClass}
                value={form.type}
                onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Description *</label>
            <textarea
              className={`${inputClass} min-h-[120px]`}
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Requirements</label>
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <input
                className={`${inputClass} flex-1`}
                placeholder="Type requirement then press Add"
                value={reqInput}
                onChange={(e) => setReqInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addRequirement();
                  }
                }}
              />
              <button
                type="button"
                onClick={addRequirement}
                className="border border-gray-200 bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Add
              </button>
            </div>

            <div className="space-y-2">
              {form.requirements.length === 0 ? (
                <div className="text-sm text-gray-500">No requirements added.</div>
              ) : (
                form.requirements.map((r, idx) => (
                  <div key={`${r}-${idx}`} className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-100">
                    <span className="w-1.5 h-1.5 bg-black block shrink-0" />
                    <span className="truncate text-sm text-gray-700 flex-1">{r}</span>
                    <button
                      type="button"
                      onClick={() => removeRequirement(idx)}
                      className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              id="active"
              type="checkbox"
              checked={form.active}
              onChange={(e) => setForm((p) => ({ ...p, active: e.target.checked }))}
              className="w-4 h-4 accent-black cursor-pointer"
            />
            <label htmlFor="active" className="text-sm text-gray-700 cursor-pointer">
              Active (visible on Careers page)
            </label>
          </div>

          {error && <div className="border border-red-200 bg-red-50 p-3 text-sm text-red-600">{error}</div>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2e2e2e] cursor-pointer disabled:opacity-60"
            >
              {saving ? 'Saving...' : editing?.id ? 'Save Changes' : 'Save Position'}
            </button>
          </div>
        </form>
      </div>

      <div>
        {loading ? (
          <div className="text-sm text-gray-500">Loading careers...</div>
        ) : careers.length === 0 ? (
          <div className="border border-dashed border-gray-200 bg-white p-10 text-center text-gray-500">
            No careers yet.
          </div>
        ) : (
          <div className="space-y-3">
            {careers.map((c) => (
              <div key={c.id} className="bg-white border border-gray-100 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-gray-300 transition-colors">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${c.active ? 'bg-[#f7b733]' : 'bg-gray-300'}`} />
                    <p className="font-semibold text-black truncate">{c.title}</p>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {c.department} · {c.type} · {c.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(c)}
                    className="border border-gray-200 hover:border-black text-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(c)}
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

