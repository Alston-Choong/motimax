<p align="center"><img alt="Motimax logo" src="./assets/MOTIMAX.jpg" width="320"></p>

# 🚀 MOTIMAX — Elevate Life. Master Mindset. Achieve Success

AI‑powered superapp for personal growth, mental wellness, inspiration and productive living — designed for Gen Z and welcoming to every age and gender.

<p align="center">
  <a href="https://motimax.vercel.app"><img alt="Live App" src="https://img.shields.io/badge/Live%20App-motimax.vercel.app-5A198B?style=for-the-badge&logo=vercel&logoColor=white"></a>
  <a href="https://youtube.com/@AlstonChoong"><img alt="YouTube" src="https://img.shields.io/badge/YouTube-@AlstonChoong-FF0000?style=for-the-badge&logo=youtube&logoColor=white"></a>
  <a href="https://x.com/AlstonChoong"><img alt="X" src="https://img.shields.io/badge/X-@AlstonChoong-000000?style=for-the-badge&logo=x&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/alstonchoong"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://www.instagram.com/dr.alstonchoong"><img alt="Instagram" src="https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
  <a href="https://www.facebook.com/dr.alstonchoong"><img alt="Facebook" src="https://img.shields.io/badge/Facebook-Follow-1877F2?style=for-the-badge&logo=facebook&logoColor=white"></a>
  <a href="https://medium.com/@dr.alstonchoong"><img alt="Medium" src="https://img.shields.io/badge/Medium-Read%20Articles-12100E?style=for-the-badge&logo=medium&logoColor=white"></a>
  <a href="https://weibo.com/u/7946325478"><img alt="Weibo" src="https://img.shields.io/badge/Weibo-Follow-E6162D?style=for-the-badge&logo=sinaweibo&logoColor=white"></a>
  <a href="https://www.xiaohongshu.com/user/profile/650c88550000000017022a87"><img alt="XiaoHongShu" src="https://img.shields.io/badge/XiaoHongShu-RED-FF2741?style=for-the-badge"></a>
</p>

<p align="center">
  ✉️ <a href="mailto:alston1121@gmail.com">alston1121@gmail.com</a> &nbsp;•&nbsp; ✉️ <a href="mailto:alston@um.edu.my">alston@um.edu.my</a>
</p>

---

## 🎯 Vision
Motimax turns ideas into daily actions — blending science‑backed learning, creative expression and honest reflection into short, energising sessions that build resilience, mindset and momentum.

## ✨ Core Experience
- **Personalised onboarding** — preferred name, pronouns, DOB, secure sign‑in (Google, Microsoft, GitHub, email) with MFA; choose theme (dark/light/neon/system), language (EN‑US/EN‑UK/ZH‑CN), and session length (5–20 min).
- **Optional personality insight** — Big Five, MBTI, VIA, DISC, HEXACO.
- **Five‑stage lessons** — 3–5 multimedia tasks per stage: mini‑games, role‑play, simulated conversations, AI Avatars (TTS/STT/voice cloning), inspiration clips, reflection and mindfulness with music.
- **Motivation generator** — animated, narrated quote tiles or short clips; one‑tap share to TikTok/YouTube Shorts/Instagram/X.
- **Themes & languages** — dark/light/vibrant/system; bilingual UI (EN‑US/EN‑UK/ZH‑CN).

## 🧩 Features at a Glance
- AI‑curated lesson flow or domain‑first selection
- 5 stages × 3–5 tasks (≈15–25 min)
- Immersive gameplay & Avatar dialogues (TTS/STT)
- Reflect/record activities; mindfulness & relaxation
- Quote & short‑reel generator (TTS/voice cloning)
- One‑tap social export with auto‑ratio overlays

## 🧠 Models & Media
**Text:** MiniMax‑M1 • **Voice:** speech‑2.5‑hd‑preview, speech‑2.5‑turbo‑preview • **Video:** MiniMax‑Hailuo‑02, T2V‑01‑Director, I2V‑01‑Director, S2V‑01 • **Music:** music‑1.5 • **Image:** T2I, I2T

## 🏆 Alignment with Judging Criteria
- Real‑World Impact • Technological Implementation • Innovation & Creativity • Functionality & Usability • Scalability & Maintainability • Remixability & Openness • Safety, Privacy & Ethics • Documentation & Demo

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
We welcome developers, designers, educators and creators. See `CONTRIBUTING.md`.

## 📄 License
MIT — see `LICENSE`.

## ❤️ Credits
Created with ❤️ by **Alston Choong**, with inspiring support from **MiniMax Agent**.
