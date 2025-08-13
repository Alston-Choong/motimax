# Motimax — APAC Wellness + AI Learning Superapp

Motimax helps Gen Z build healthy habits and practical language skills with AI micro‑programs: movement, recovery, nutrition, sleep, mindset, and avatar role‑plays for language learning. Powered by MiniMax multimodal (LLM, TTS, music, image, video). Multilingual: EN, ZH, KO, AR, JA, HI, TA.

- Live demo: [your Vercel URL]
- Demo video: [YouTube link]
- MiniMax: alston1121@gmail.com • UID 330576661979119623

## Features
- Personalized daily micro‑programs (wellness + language)
- Hyperreal avatar role‑plays with instant feedback
- Auto‑generated short‑form content (TTS + music + captions)
- Streaks, challenges, social-ready exports
- Multilingual UI and content (EN/ZH/KO/AR/JA/HI/TA)
- Secure auth and RLS with Supabase

## Tech Stack
- Next.js 14 (App Router, Server Actions), Tailwind, shadcn/ui
- Supabase (Auth, Postgres, Storage, RLS)
- MiniMax APIs (LLM, TTS, music, image/video)
- Vercel deploy, pnpm

## Quick Start
1. Create Supabase project; get URL + anon key; create Service Role Key.
2. Create .env.local from .env.example and fill values.
3. Install deps:
```bash
pnpm install
```
4. Dev:
```bash
pnpm dev
```
5. Deploy: Push to GitHub and import on Vercel; add env vars there and in Supabase.

## Database (SQL)
- profiles: id (uuid, pk), email, display_name, avatar_url, created_at
- programs: id, user_id (fk), type ('wellness' | 'language'), lang, plan_json, created_at
- sessions: id, user_id, program_id, completed_at, metrics_json
- media_assets: id, user_id, kind ('tts' | 'music' | 'image' | 'video'), url, meta_json
- feedback: id, user_id, session_id, score, notes, created_at

Add RLS to each table; policies to allow owner read/write and service role for server actions.

## MiniMax Integration
Server actions call MiniMax for:
- Planner: generate daily program plan
- TTS: generate narration
- Music: generate background track
- Image/video: create thumbnails or shorts
Cache URLs in Supabase Storage and media_assets.

## Scripts/Prompts
See docs/prompts.md and docs/architecture.md.

## Submission Checklist
- Public app URL + 60–90s demo video
- README includes UID and email
- English materials and captions
- 3 happy-path tests on mobile/desktop

## License
MIT
