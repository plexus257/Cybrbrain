# Cybrbrain - Compliance + Cashflow Infrastructure

A production-grade multi-page website for Cybrbrain, a compliance and cashflow infrastructure platform for regulated MSMEs (starting with pharma MSMEs in Ahmedabad, India).

## 🚀 Tech Stack

- **Next.js 14.2** with App Router
- **TypeScript**
- **Tailwind CSS** for styling
- **React 18**

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page with founder story and mission
│   ├── globals.css     # Global styles and CSS variables
│   ├── how-it-works/   # Workflow diagrams and role-based flows
│   ├── industries/     # Pharma focus and future industry roadmap
│   ├── layout.tsx      # Root layout with navigation and footer
│   ├── page.tsx        # Landing page
│   ├── pricing/        # 4 pricing tiers (Pilot, Compliance, Recovery, Enterprise)
│   ├── product/        # Deep dive into 3 core systems
│   └── waitlist/       # High-conversion waitlist form
└── components/
    ├── Footer.tsx      # Site footer with links
    └── Navigation.tsx  # Responsive navigation component
```

## 🎨 Design System

**Color Palette (Dark Theme)**
- Background: `#0a0a0b`
- Card: `#141415`
- Secondary: `#1e1e20`
- Muted: `#27272a`
- Primary (Blue): `#3b82f6`
- Accent (Green): `#22c55e`
- Accent (Purple): `#a855f7`

**Typography**
- Font: Inter (system font stack)
- Clean, modern, enterprise feel

**Design Inspiration**
- Stripe
- Palantir
- Linear
- Notion

## 📄 Pages

### 1. Landing Page (`/`)
- Hero section with primary CTAs
- Problem section (Schedule M, cashflow traps, audit gaps)
- Solution section (3 core systems)
- Social proof with mock case studies
- Target users (Owner, QA, Finance)
- Pricing preview CTA

### 2. Product Page (`/product`)
Deep dive into 3 core systems:
- **Compliance OS**: Export notifications, Schedule M gaps, batch records, ALCOA+ trails, DPDP compliance
- **Cashflow OS**: Invoice aging, WhatsApp recovery, Samadhaan cases, GST/ITC reconciliation
- **Decision Intelligence**: Risk scoring, alerts, recommendations, dashboards

### 3. How It Works (`/how-it-works`)
- 8-step workflow: Upload → Extract → Validate → Score → Draft → Review → Approve → Submit
- Role-based flows for Owner, QA Manager, and Finance Team
- Visual workflow diagrams

### 4. Industries (`/industries`)
- **Primary Focus**: Pharma MSMEs in Ahmedabad
- **Coming Soon**: Chemicals, Food Manufacturing, Export SMEs
- Pain points and solutions for each industry

### 5. Pricing (`/pricing`)
- **Pilot Plan**: ₹2K–₹5K/month (early adopters)
- **Compliance Plan**: ₹8K–₹25K/month (full compliance infrastructure)
- **Recovery Module**: 2–5% success fee (pay only for results)
- **Enterprise**: Custom pricing
- FAQ section

### 6. Waitlist (`/waitlist`)
High-conversion form with:
- Name, Company, Role, Phone (WhatsApp), Email
- Biggest problem dropdown
- Trust signals (Secure, Human Approval, Fast Onboarding)
- Success state with confirmation

### 7. About (`/about`)
- Why Cybrbrain exists
- The problem in MSMEs
- Mission and vision
- Approach (Human-in-the-loop, Audit-ready, Results-focused)

## 🎯 Key Features

- **Fully responsive** design for all screen sizes
- **Dark theme** with subtle blue/green accents for trust
- **No AI buzzwords** - positioned as compliance infrastructure
- **Human-in-the-loop** messaging throughout
- **Conversion-optimized** with clear CTAs and urgency
- **SEO-ready** with proper metadata

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🎯 Positioning

**NOT:**
- ❌ AI employees
- ❌ Automation tool
- ❌ Generic SaaS

**IS:**
- ✅ Compliance + Cashflow Infrastructure
- ✅ Audit-ready systems for regulated MSMEs
- ✅ Protect your license. Unlock your cashflow.

## 📈 Conversion Elements

- Case study blocks ("Recovered ₹4.2L in 21 days", "Passed audit with zero critical findings")
- Trust signals ("Built for regulated industries", "Human approval in every workflow")
- Pain-driven messaging ("Avoid Schedule M shutdown risk", "Stop chasing payments manually")
- Urgency ("Ahmedabad pharma pilot batch only")

## 🔒 Security & Privacy

- All data is encrypted
- No data sharing with third parties
- Human approval required for all workflows
- GDPR/DPDP compliance ready

## 📞 Contact

For demo requests or questions, visit the waitlist page at `/waitlist`.

---

**Built for regulated industries in India. Starting with pharma MSMEs in Ahmedabad.**
