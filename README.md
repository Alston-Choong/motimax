![Motimax Plus logo](./assets/MOTIMAX.jpg)

# 🚀 MOTIMAX Plus — Create. Automate. Dominate.

Everything in Motimax plus creator‑grade tools, automation and multi‑platform reach.

[Live App](https://motimax.vercel.app) | [YouTube](https://youtube.com/@AlstonChoong) | [X](https://x.com/AlstonChoong) | [LinkedIn](https://linkedin.com/in/alstonc) | [Instagram](https://instagram.com/alstonc) | [Facebook](https://facebook.com/alstonc) | [Medium](https://medium.com/@alstonc) | [Weibo](https://weibo.com/alstonc) | [XiaoHongShu](https://xiaohongshu.com/alstonc)

✉️ alston1121@gmail.com • ✉️ alston@um.edu.my

## 🎯 Purpose

Motimax Plus enables creators to produce, automate and share positive content at scale — multi‑language creation, voice cloning, animated backgrounds, DIY quote/video generation and cross‑platform scheduling.

## ✨ What Plus Adds

- Up to 40 languages
- Personal AI Avatar & voice clone
- DIY animated backgrounds & media
- Connector APIs & scheduling (Zapier, Neulink, Publer, Blotato, …)
- Extensive social coverage (TikTok, YouTube, Instagram, Facebook, X/Threads, Telegram, Line, Bluesky, Mastodon, WhatsApp, Weixin/WeChat, Weibo, Xiaohongshu)
- Analytics & monetisation insights
- Remix‑ready architecture

## 🧠 Models & Media

**Text:** MiniMax‑MI, MiniMax‑M1 • **Voice:** speech‑2.5‑hd‑preview, speech‑2.5‑turbo‑preview, Async Long TTS, Voice Cloning, Voice Design • **Video:** MiniMax‑Hailuo‑02, T2V‑01‑Director, I2V‑01‑Director, S2V‑01 • **Music:** music‑1.5 • **Image:** T2I, I2T

## 🏆 Alignment with Judging Criteria

**Real‑World Impact** • **Technological Implementation** • **Innovation** • **Usability & Performance** • **Scalability** • **Remixability** • **Safety & Privacy** • **Documentation & Demo**

## 🛠 Tech Stack & Security

Same base as Motimax; add connector SDKs & webhooks, background queues and telemetry. OAuth 2.0 with MFA; RLS; strict security headers & CSP; accessible UI.

## 🚀 Quick Start

### Configure

```bash
cp .env.example .env.local
```

**Required:**
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
MINIMAX_API_KEY=
GOOGLE_ID=
GOOGLE_SECRET=
GITHUB_ID=
GITHUB_SECRET=
```

**Optional connector keys:**
```
ZAPIER_HOOK_URL=
NEULINK_API_KEY=
PUBLER_API_KEY=
BLOTATO_API_KEY=
NEXT_PUBLIC_APP_NAME=Motimax Plus
```

**OAuth authorised origins**
- `http://localhost:3000` — development
- `https://motimax.vercel.app` — production

**OAuth redirect URIs**
- `http://localhost:3000/api/auth/callback/google`
- `https://motimax.vercel.app/api/auth/callback/google`
- (add GitHub equivalents)

### Develop

```bash
pnpm dev
```

### i18n • Security • Deploy

As per Motimax; add connector credentials and run end‑to‑end QC.

## 🤝 Contributing

Open to developers, designers, educators and creators.

## 📄 License

MIT.

## ❤️ Credits

Created with ❤️ by Alston Choong, with inspiring support from MiniMax Agent.
