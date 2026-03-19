-- EFED Streaming Hub — Chat tables
-- Run this in Supabase SQL Editor

create table if not exists chat_rooms (
  id text primary key,
  name text not null,
  description text,
  created_at bigint default extract(epoch from now()) * 1000
);

create table if not exists chat_messages (
  id bigserial primary key,
  room_id text not null references chat_rooms(id) on delete cascade,
  username text not null references users(username) on delete cascade,
  display_name text,
  message text not null,
  created_at bigint default extract(epoch from now()) * 1000,
  deleted boolean default false
);

alter table chat_rooms disable row level security;
alter table chat_messages disable row level security;

-- Enable Realtime on chat_messages
alter publication supabase_realtime add table chat_messages;

-- Seed default rooms
insert into chat_rooms (id, name, description) values
  ('general', 'General', 'General hub chat'),
  ('show-discussion', 'Show Discussion', 'Talk about shows on the hub'),
  ('recommended', 'Recommended', 'Share and discover shows')
on conflict (id) do nothing;

-- Index for fast room queries
create index if not exists idx_chat_messages_room on chat_messages(room_id, created_at desc);
