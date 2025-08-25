<p align="center"><img src="https://github.com/Alston-Choong/motimax/blob/main/assets/MOTIMAX.jpg" alt="Motimax logo" width="320"/></p>

# 🚀 MOTIMAX — Elevate Life. Master Mindset. Achieve Success

AI‑powered superapp for personal growth, mental wellness, inspiration and productive living — designed for Gen Z and welcoming to every age and gender.

<p align="center">
<a href="https://motimax.vercel.app/"><img src="https://img.shields.io/badge/Live%20App-success?style=for-the-badge&logo=vercel&logoColor=white&color=005cff" alt="Live App"/></a> <a href="https://youtube.com/@AlstonChoong"><img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white&color=ff0000" alt="YouTube"/></a> <a href="https://x.com/AlstonChoong"><img src="https://img.shields.io/badge/X-black?style=for-the-badge&logo=x&logoColor=white&color=000000" alt="X"/></a> <a href="https://www.linkedin.com/in/alstonchoong"><img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white&color=0077b5" alt="LinkedIn"/></a> <a href="https://www.instagram.com/dr.alstonchoong"><img src="https://img.shields.io/badge/Instagram-purple?style=for-the-badge&logo=instagram&logoColor=white&color=e4405f" alt="Instagram"/></a> <a href="https://www.facebook.com/dr.alstonchoong"><img src="https://img.shields.io/badge/Facebook-blue?style=for-the-badge&logo=facebook&logoColor=white&color=1877f2" alt="Facebook"/></a> <a href="https://medium.com/@dr.alstonchoong"><img src="https://img.shields.io/badge/Medium-black?style=for-the-badge&logo=medium&logoColor=white&color=000000" alt="Medium"/></a> <a href="https://weibo.com/u/7946325478"><img src="https://img.shields.io/badge/Weibo-red?style=for-the-badge&logo=sina-weibo&logoColor=white&color=e6162d" alt="Weibo"/></a> <a href="https://www.xiaohongshu.com/user/profile/b93232ab"><img src="https://img.shields.io/badge/XiaoHongShu-red?style=for-the-badge&logo=xiaohongshu&logoColor=white&color=ff2442" alt="XiaoHongShu"/></a>
</p>

✉️ [alston1121@gmail.com](mailto:alston1121@gmail.com)  •  ✉️ [alston@um.edu.my](mailto:alston@um.edu.my)

## 🎯 Vision

Motimax turns ideas into daily actions — blending science‑backed learning, creative expression and honest reflection into short, energising sessions that build resilience, mindset and momentum.

## ✨ Core Experience

- • Personalised onboarding — preferred name, pronouns, DOB, secure sign‑in (Google, Microsoft, GitHub, email) with MFA; choose theme (dark/light/neon/system), language (EN‑US/EN‑UK/ZH‑CN), and session length (5–20 min).
- • Optional personality insight — Big Five, MBTI, VIA, DISC, HEXACO.
- • Five‑stage lessons — 3–5 multimedia tasks per stage: mini‑games, role‑play, simulated conversations, AI Avatars (TTS/STT/voice cloning), inspiration clips, reflection and mindfulness with music.
- • Motivation generator — animated, narrated quote tiles or short clips; one‑tap share to TikTok/YouTube Shorts/Instagram/X.
- • Themes & languages — dark/light/vibrant/system; bilingual UI (EN‑US/EN‑UK/ZH‑CN).

## 🧩 Features at a Glance

- • AI‑curated lesson flow or domain‑first selection
- • 5 stages × 3–5 tasks (≈15–25 min)
- • Immersive gameplay & Avatar dialogues (TTS/STT)
- • Reflect/record activities; mindfulness & relaxation
- • Quote & short‑reel generator (TTS/voice cloning)
- • One‑tap social export with auto‑ratio overlays

## 🧠 Models & Media

**Text:** MiniMax‑M1 • **Voice:** speech‑2.5‑hd‑preview, speech‑2.5‑turbo‑preview • **Video:** MiniMax‑Hailuo‑02, T2V‑01‑Director, I2V‑01‑Director, S2V‑01 • **Music:** music‑1.5 • **Image:** T2I, I2T

## 🏆 Alignment with Judging Criteria

- • Real‑World Impact 
- • Technological Implementation 
- • Innovation & Creativity 
- • Functionality & Usability 
- • Scalability & Maintainability 
- • Remixability & Openness 
- • Safety, Privacy & Ethics 
- • Documentation & Demo

## 🛠 Tech Stack

Next.js 14, TypeScript, Tailwind, shadcn/ui, Framer Motion • Supabase (Auth, Postgres, Storage, Realtime) • Vercel • Upstash Redis • MiniMax multimodal APIs

## 🔐 Security & Accessibility

OAuth 2.0 with MFA • RLS policies • Security headers & CSP • Accessible components

## 🚀 Quick Start

### **Configure**

```bash
cp .env.example .env.local
# Required:
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=
# SUPABASE_SERVICE_ROLE_KEY=
# MINIMAX_API_KEY=
# GOOGLE_ID=
# GOOGLE_SECRET=
# GITHUB_ID=
# GITHUB_SECRET=
# Optional:
# NEXT_PUBLIC_APP_NAME=Motimax
```

**OAuth authorised origins**
- http://localhost:3000 — development
- https://motimax.vercel.app — production

**OAuth redirect URIs**
- http://localhost:3000/api/auth/callback/google
- https://motimax.vercel.app/api/auth/callback/google
- (add similar GitHub paths)

### Develop

```bash
pnpm dev
```

### i18n

Start with `en-US`, `en-UK`, `zh-CN`. Extend with `messages/<locale>.json` and locale rules.

### Security headers & CSP

Use strict `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, minimal `Permissions-Policy`. Begin with Report‑Only; enforce in Production.

### Deploy

Push to GitHub → Import on Vercel (Next.js preset) → Add env vars → Optional custom domain → Health‑check `/api/health` & verify i18n routing

## 🤝 Contributing

We welcome developers, designers, educators and creators. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📄 License

MIT — see [LICENSE](./LICENSE).

## ❤️ Credits

Created with ❤️ by **Alston-Choong**, with inspiring support from **MiniMax Agent**.
