# 🚀 Motimax — Elevate Life. Master Mindset. Achieve Success.

AI-powered superapp for personal growth, mental wellness, inspiration, and productive living. Designed for Gen Z and welcoming to every age and gender.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-yourdomain.vercel.app-brightgreen)](https://yourdomain.vercel.app)
[![Demo Video](https://img.shields.io/badge/Demo%20Video-YouTube-red)](https://youtube.com/@AlstonChoong)
[![Follow on X](https://img.shields.io/badge/X-@AlstonChoong-black)](https://x.com/AlstonChoong)

**Contact:** alston1121@gmail.com

---

## 🎯 Vision

Motimax turns ideas into daily actions. It blends science-backed learning, creative expression, and honest reflection into short, energising sessions that build resilience, mindset, and momentum. The aim is simple: help anyone form better habits, grow confidence, and share positive impact with the world.

---

## ✨ Core Experience

- **Personalised onboarding**  
  Preferred name, pronouns, date of birth, and secure sign-in (Google, Microsoft, GitHub, or email) with multi-factor authentication. Choose theme (dark, light, neon, or system), language (EN-US, EN-UK, ZH-CN), and session length (5 to 20 minutes).

- **Optional personality insight**  
  Start with validated frameworks such as Big Five, MBTI, VIA, DISC, or HEXACO, or jump straight into chosen growth domains.

- **Five-stage lessons with dynamic tasks**  
  Each lesson follows five stages with 3 to 5 multimedia activities per stage: mini-games, role-play, simulated conversations, Q&A with AI avatars, short inspirational videos, reflective journaling or voice notes, and mindfulness with music or soundscapes. Feedback is instant and supportive.

- **Create and share motivation**  
  Each stage completion unlocks a customisable quote tile or short clip that can be animated and narrated. Control font, colour, background, voice, language, and aspect ratio. Export is ready for TikTok, YouTube Shorts, Instagram, and X.

- **Themes and languages**  
  Dark, light, vibrant, and system themes. Bilingual UI and content (EN-US, EN-UK, ZH-CN) with easy extensibility.

---

## 🏆 Alignment with Judging Criteria

- **Real-World Impact**  
  Focus on stress reduction, mindset coaching, and healthy habit formation. Clear pathways from insight to action with measurable streaks and reflections.

- **Technological Implementation**  
  Next.js App Router, server actions, Supabase Postgres with Row Level Security, Vercel edge deployment, caching, and typed SDKs. Strong prompt and data design for reliability and low latency.

- **Innovation and Creativity**  
  Five-stage learning flow with AI avatar dialogues, voice-assisted reflection, and an animated quote and reel generator.

- **Functionality and Usability**  
  End-to-end flows tested on mobile and desktop, accessible components, fast first paint, and smooth task transitions.

- **Scalability and Maintainability**  
  Modular content packs, i18n-friendly message files, and API-ready interfaces for future domains and locales.

- **Remixability and Openness**  
  Clean project structure, documented APIs, and preconfigured content packs to support remix, reuse, and extension.

- **Safety, Privacy, and Ethics**  
  RLS policies, least-privilege design, secure sessions, strict CSP, content filters, and positive coaching tone.

- **Documentation and Demo**  
  Public demo video longer than 60 seconds on YouTube and X, plus live project URL for immediate testing.

---

## 🧩 Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion  
- **Backend:** Supabase (Auth, Postgres, Storage, Realtime), server actions and API routes  
- **Deployment:** Vercel with global CDN  
- **Caching:** Upstash Redis  
- **AI services:** MiniMax multimodal APIs for text, voice, music, image, and video

**Models and media**

- **Text:** MiniMax-M1 for long, context-aware reasoning and content generation  
- **Voice:** speech-2.5-hd-preview, speech-2.5-turbo-preview  
- **Video:** MiniMax-Hailuo-02, T2V-01-Director, I2V-01-Director, S2V-01  
- **Music:** music-1.5  
- **Image:** T2I, I2T

**Lesson design**

- About 15 to 25 minutes per lesson. The five-stage structure and task density are tuned for engagement and retention using current learning and behavioural science conventions.

**Share design**

- Auto-posting through supported connectors where available. Otherwise, a manual quick-share flow produces ready-to-upload assets with correct language, typography, and ratio.

---

## 🔐 Security and Accessibility

- OAuth 2.0 with MFA, secure sessions, and encrypted storage  
- Row Level Security for user data  
- Security headers and Content Security Policy  
- Accessibility-first components and patterns with captions and transcripts

---

## 🚀 Quick Start

### Prerequisites
-a Node.js 18+ and pnpm  
- Supabase account  
- MiniMax API access  
- OAuth apps for Google and GitHub

### Instll
```bash
git clone https://github.com/your-org/motimax.git
cd motimax
pnpm install

### *Configure*
**Configure** your environment variables as follows:  <!-- bold inline -->
```bash
cp .env.example .env.local
# Fill in:
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=
# SUPABASE_SERVICE_ROLE_KEY=
# MINIMAX_API_KEY=
# GOOGLE_ID=
# GOOGLE_SECRET=
# GITHUB_ID=
# GITHUB_SECRET=

