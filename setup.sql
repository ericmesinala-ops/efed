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

-- Likes table
create table if not exists likes (
  id bigserial primary key,
  video_url text not null,
  username text not null references users(username),
  liked_at bigint default extract(epoch from now()) * 1000,
  unique(video_url, username)
);

-- Bookmarks table
create table if not exists bookmarks (
  id bigserial primary key,
  video_url text not null,
  username text not null references users(username),
  saved_at bigint default extract(epoch from now()) * 1000,
  unique(video_url, username)
);

-- Comments table
create table if not exists comments (
  id bigserial primary key,
  video_url text not null,
  username text not null references users(username),
  text text not null,
  created_at bigint default extract(epoch from now()) * 1000
);

alter table likes disable row level security;
alter table bookmarks disable row level security;
alter table comments disable row level security;

-- Add status column to submissions (pending, approved, rejected)
alter table submissions add column if not exists status text default 'pending';

-- Update existing submissions to approved so they still show
update submissions set status = 'approved' where status is null;

-- Add strikes and banned columns to users
alter table users add column if not exists strikes int default 0;
alter table users add column if not exists banned boolean default false;
alter table users add column if not exists banned_reason text;

-- Add flagged column to comments
alter table comments add column if not exists flagged boolean default false;
alter table comments add column if not exists removed boolean default false;

-- Add avatar URL to users
alter table users add column if not exists avatar_url text;

-- New user columns for social media, eFed ownership, role, creator badge
alter table users add column if not exists x_handle text;
alter table users add column if not exists ig_handle text;
alter table users add column if not exists is_efed_owner boolean default false;
alter table users add column if not exists promo_name text;
alter table users add column if not exists yt_channel text;
alter table users add column if not exists role text default 'member';
alter table users add column if not exists is_creator boolean default false;

-- Watch time table for rating unlock
create table if not exists watch_time (
  id bigserial primary key,
  username text not null references users(username),
  video_url text not null,
  total_seconds int default 0,
  rating_unlocked boolean default false,
  unique(username, video_url)
);
alter table watch_time disable row level security;

-- Ratings table
create table if not exists ratings (
  id bigserial primary key,
  username text not null references users(username),
  video_url text not null,
  overall numeric(3,1),
  production numeric(3,1),
  promo_storyline numeric(3,1),
  match_quality numeric(3,1),
  roster_talent numeric(3,1),
  created_at bigint default extract(epoch from now()) * 1000,
  unique(username, video_url)
);
alter table ratings disable row level security;

-- Comment likes table
create table if not exists comment_likes (
  id bigserial primary key,
  comment_id bigint not null references comments(id) on delete cascade,
  username text not null references users(username),
  liked_at bigint default extract(epoch from now()) * 1000,
  unique(comment_id, username)
);
alter table comment_likes disable row level security;

-- Add flag_reason to comments
alter table comments add column if not exists flag_reason text;

-- Add supported_count to users and claimed_by to submissions
alter table users add column if not exists supported_count int default 0;
alter table submissions add column if not exists claimed_by text references users(username);
alter table submissions add column if not exists originally_posted_by text;

-- Notifications table
create table if not exists notifications (
  id bigserial primary key,
  username text not null references users(username),
  type text not null,
  message text not null,
  video_url text,
  read boolean default false,
  created_at bigint default extract(epoch from now()) * 1000
);
alter table notifications disable row level security;

-- Add video_id column to all social tables for URL-independent lookups
alter table ratings add column if not exists video_id text;
alter table likes add column if not exists video_id text;
alter table bookmarks add column if not exists video_id text;
alter table comments add column if not exists video_id text;
alter table watch_time add column if not exists video_id text;

-- Create indexes for fast lookups by video_id
create index if not exists idx_ratings_video_id on ratings(video_id);
create index if not exists idx_likes_video_id on likes(video_id);
create index if not exists idx_bookmarks_video_id on bookmarks(video_id);
create index if not exists idx_comments_video_id on comments(video_id);
create index if not exists idx_watch_time_video_id on watch_time(video_id);
