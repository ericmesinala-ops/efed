-- EFED Streaming Hub — Supabase setup
-- Run this entire script in Supabase SQL Editor

-- Users table
create table if not exists users (
  username text primary key,
  password_hash text not null,
  email text not null unique,
  display_name text,
  security_question text,
  security_answer_hash text,
  joined_at bigint default extract(epoch from now()) * 1000
);

-- Invite codes table
create table if not exists invites (
  code text primary key,
  used boolean default false,
  used_by text references users(username),
  created_by text references users(username)
);

-- Submissions table
create table if not exists submissions (
  id bigserial primary key,
  url text not null unique,
  show_name text,
  efed text,
  date text,
  date_ms bigint,
  submitted_by text references users(username),
  submitted_at bigint default extract(epoch from now()) * 1000,
  community boolean default true
);

-- Violations log
create table if not exists violations (
  id bigserial primary key,
  username text,
  url text,
  title text,
  attempted_at bigint default extract(epoch from now()) * 1000
);

-- Seed invite codes (first batch — add more anytime from dashboard)
insert into invites (code, used, used_by, created_by) values
  ('EFED-F7X2', false, null, null),
  ('EFED-K9M4', false, null, null),
  ('EFED-R3P8', false, null, null),
  ('EFED-W6T1', false, null, null),
  ('EFED-B5N7', false, null, null),
  ('EFED-K7M2', false, null, null),
  ('EFED-X4P9', false, null, null),
  ('EFED-R8T3', false, null, null),
  ('EFED-W2N6', false, null, null),
  ('EFED-B5J1', false, null, null),
  ('EFED-Q9H4', false, null, null),
  ('EFED-L3D8', false, null, null),
  ('EFED-Y6C5', false, null, null),
  ('EFED-F1V7', false, null, null),
  ('EFED-S4Z9', false, null, null)
on conflict (code) do nothing;

-- Disable RLS (you control access via anon key — fine for this use case)
alter table users disable row level security;
alter table invites disable row level security;
alter table submissions disable row level security;
alter table violations disable row level security;
