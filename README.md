# Peak Male Content 🚜

**The ultimate platform for JCB and heavy machinery enthusiasts.**

Live streams from job sites, raw operator footage, real-time community, and creator monetization — built for the people who actually love big machines.

## Current Status

This is an **early-stage interactive demo** with a premium construction-themed UI. The foundation is in place and many core interactions are working, but this is still a work in progress.

**What's included in the current demo:**
- Fully interactive homepage with live streams and video grid
- Video modal with YouTube playback
- Category filtering and likes
- Responsive premium dark UI with construction aesthetic
- Clean component structure ready for expansion

**Planned / In Progress:**
- Live streaming page
- Upload system
- User profiles with earnings
- Leaderboard
- Real-time comments
- Full Next.js migration

## How to Run (Current Demo)

```bash
git clone https://github.com/drjoykarmakar/peakmalecontent.git
cd peakmalecontent
open index.html
```

Everything works offline except YouTube embeds.

> **Note:** A full Next.js version is in active development.

## Project Structure (Current)

```
peak-male-content/
├── README.md
├── index.html                    # Main interactive demo
├── assets/
│   ├── css/style.css
│   └── js/app.js
├── pages/                        # Planned pages
│   ├── live.html
│   ├── upload.html
│   └── profile.html
└── .gitignore
```

## Production Tech Stack (Planned)

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Backend**: Supabase (Auth, Database, Realtime)
- **Video**: Cloudflare Stream (uploads + live streaming)
- **Payments**: Stripe (creator payouts & revenue share)
- **Styling**: Tailwind CSS

## Roadmap

| Milestone              | Status          |
|------------------------|-----------------|
| Interactive Demo       | In Progress     |
| Full Next.js Migration | Planned         |
| Supabase Integration   | Planned         |
| Real Video Uploads     | Planned         |
| Live Streaming         | Planned         |
| Creator Monetization   | Planned         |
| Deployment (Vercel)    | Planned         |

## Why This Exists

Heavy machinery operators and enthusiasts deserve their own space — raw, unfiltered, and satisfying. No corporate gloss. Just big machines doing real work.

This project is being built as a passion project for that community.

## License

MIT — Built for the folks who love big machines.

---

Made with ❤️ for the Peak Male Content community.
