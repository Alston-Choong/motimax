# Architecture

- Next.js App Router with Server Actions for AI calls (server-only).
- Supabase: Auth (email OTP), RLS on user-owned rows, Storage for media.
- MiniMax: LLM (planner/coach), TTS (narration), music (background), image/video (thumbnails/shorts).

## Flow
- User selects goal, time, language.
- Server action calls Planner -> TTS/Music -> stores in Storage -> returns playable session with captions.
- Optional: Avatar role‑play endpoint for language practice.

## Cost controls
- Cache generated assets per user/day.
- Throttle generation (one new session/day).
- Offer "lite" text-only preview before media generation.
- Batch requests; reuse music beds across sessions.
