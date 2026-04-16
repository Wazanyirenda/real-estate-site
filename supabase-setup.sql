-- ============================================================
-- CALM MOUNTAIN PROPERTIES - Supabase CMS Schema
-- Run this in: https://app.supabase.com → SQL Editor → New Query
-- ============================================================

-- Needed for gen_random_uuid()
create extension if not exists pgcrypto;

-- -- HELPER: auto-update updated_at --------------------------
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- -- ADMINS (legacy; optional if you later want role-based access) --
create table if not exists admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz default now()
);

-- -- CAREERS TABLE --------------------------------------------
create table if not exists careers (
  id            uuid default gen_random_uuid() primary key,
  title         text not null,
  department    text not null default 'General',
  location      text not null default 'Ndola, Zambia',
  type          text not null default 'Full-time',
  description   text not null,
  requirements  text[] not null default '{}',
  active        boolean not null default true,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

drop trigger if exists careers_updated_at on careers;
create trigger careers_updated_at
  before update on careers
  for each row execute function update_updated_at_column();

-- -- LISTINGS TABLE (plots + houses; sale + rent) -------------
create table if not exists real_estate_listings (
  id                uuid default gen_random_uuid() primary key,
  slug              text not null unique,
  title             text not null,
  location          text not null default 'Ndola, Zambia',
  listing_kind      text not null check (listing_kind in ('plot','house')),
  transaction_type  text not null check (transaction_type in ('sale','rent')),
  description       text not null default '',
  features          text[] not null default '{}',

  -- Flexible pricing model so we can represent both:
  -- - plot tiers (cash / 6m / 12m / 24m)
  -- - rent (monthly) or sale (price range)
  pricing           jsonb not null default '{}'::jsonb,

  -- Public URLs (typically created via Supabase Storage uploads)
  image_url         text,
  gallery_urls      text[] not null default '{}',

  active            boolean not null default true,
  published         boolean not null default true,
  sort_order        integer default 0,

  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

drop trigger if exists real_estate_listings_updated_at on real_estate_listings;
create trigger real_estate_listings_updated_at
  before update on real_estate_listings
  for each row execute function update_updated_at_column();

-- -- ENABLE RLS -----------------------------------------------
alter table admins enable row level security;
alter table careers enable row level security;
alter table real_estate_listings enable row level security;

-- -- CAREERS POLICIES -----------------------------------------
drop policy if exists "Public can read active careers" on careers;
create policy "Public can read active careers"
  on careers for select
  using (active = true);

drop policy if exists "Admins can manage careers" on careers;
drop policy if exists "Authenticated users can manage careers" on careers;
create policy "Authenticated users can manage careers"
  on careers for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Optional read policy for legacy admins table
drop policy if exists "User can read own admin row" on admins;
create policy "User can read own admin row"
  on admins for select
  using (user_id = auth.uid());

-- -- LISTINGS POLICIES ----------------------------------------
drop policy if exists "Public can read published listings" on real_estate_listings;
create policy "Public can read published listings"
  on real_estate_listings for select
  using (published = true and active = true);

drop policy if exists "Admins can manage listings" on real_estate_listings;
drop policy if exists "Authenticated users can manage listings" on real_estate_listings;
create policy "Authenticated users can manage listings"
  on real_estate_listings for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- -- STORAGE: media bucket + policies -------------------------
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- Note:
-- `storage.objects` is managed by Supabase, and this SQL editor role may not
-- own that table. Do not run `alter table storage.objects enable row level security;`
-- here, or you may get: "must be owner of table objects".
-- Supabase Storage already handles RLS for `storage.objects`; the policies below
-- are the part you need for bucket access control.

-- Public read
drop policy if exists "Public can read media objects" on storage.objects;
create policy "Public can read media objects"
  on storage.objects for select
  using (bucket_id = 'media');

-- Any signed-in user can upload/update/delete media objects
drop policy if exists "Admins can upload media objects" on storage.objects;
drop policy if exists "Authenticated users can manage media objects" on storage.objects;
create policy "Authenticated users can manage media objects"
  on storage.objects for all
  using (bucket_id = 'media' and auth.role() = 'authenticated')
  with check (bucket_id = 'media' and auth.role() = 'authenticated');
