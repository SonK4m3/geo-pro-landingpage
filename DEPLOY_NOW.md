# 🚀 GEO Pro - Deploy Now

Your landing page is **production-ready** for all three requirements. Here's what's been completed and what to do next.

---

## ✅ What's Been Completed

### 1. Contact Information System
**Files**: `src/content/landing.ts`, `.env.example`, `.env.production`

Contact details now load from environment variables:
- Name, phone, email, phone href, email href
- Fallback placeholders if env vars not set
- Both VI and EN locales supported

**Next**: Create `.env.local` with your contact details:
```env
CONTACT_NAME=Your Name
CONTACT_PHONE=+84 901 234 567
CONTACT_PHONE_HREF=+84901234567
CONTACT_EMAIL=contact@example.com
CONTACT_EMAIL_HREF=contact@example.com
```

---

### 2. Google Analytics 4 Tracking
**Files**: `src/lib/ga.ts`, `src/layouts/BaseLayout.astro`

Complete GA4 integration:
- Auto-initializes if `PUBLIC_GA_MEASUREMENT_ID` is set
- Tracks: page views, form submissions, CTA clicks, section views
- Async script loading (no performance impact)
- Real-time tracking available

**Next**: 
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property + web stream for your domain
3. Copy Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to `.env.local` or deployment platform

---

### 3. Google Sheets Integration + Serverless API
**Files**: 
- `src/pages/api/contact.ts` - REST endpoint
- `scripts/google-apps-script.gs` - Google Apps Script
- `.env.example` - Webhook configuration

Form submission flow:
```
User Form → POST /api/contact → Google Apps Script → Google Sheet
```

**Next**:
1. Create a Google Sheet: [sheets.google.com](https://sheets.google.com)
2. Deploy `scripts/google-apps-script.gs` as Google Apps Script Web App
3. Copy deployment URL to `GOOGLE_SHEETS_WEBHOOK` env variable
4. Test: submit form, check sheet

See `SETUP.md` for detailed 5-minute setup.

---

## 📋 Deployment Options

All three options are fully configured and ready.

### Option 1: Vercel (Easiest) ⭐
**Best for**: First-time deployment, auto-scaling, global CDN

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - Add environment variables (see below)
   - Click "Deploy"

3. Auto-redeploys on every push to main

**Cost**: Free tier available, scales as needed
**Setup time**: 5 minutes

---

### Option 2: Docker (Flexible) 📦
**Best for**: Any cloud provider, self-hosted, Kubernetes

1. Build image:
   ```bash
   docker build -t geo-pro:latest .
   ```

2. Run with docker-compose:
   ```bash
   docker-compose up -d
   ```

3. Or run manually:
   ```bash
   docker run -d -p 4321:4321 \
     -e PUBLIC_SITE_URL=https://yourdomain.com \
     -e PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX \
     -e GOOGLE_SHEETS_WEBHOOK=https://script.google.com/... \
     -e CONTACT_NAME="Your Name" \
     geo-pro:latest
   ```

**Where to deploy**: AWS ECS, DigitalOcean App Platform, Heroku, Azure Container Instances
**Setup time**: 10 minutes
**Skill**: Intermediate

---

### Option 3: VPS/Dedicated Server 🖥️
**Best for**: Full control, custom domain, existing infrastructure

1. On your server:
   ```bash
   git clone <repo>
   cd geo-pro-landingpage
   npm ci
   npm run build
   ```

2. Create `.env` file with production variables

3. Start with PM2:
   ```bash
   npm install -g pm2
   pm2 start dist/server/entry.mjs --name geo-pro
   ```

4. Set up Nginx reverse proxy (config included in DEPLOYMENT.md)

**Where to deploy**: DigitalOcean, Linode, AWS EC2, your own server
**Setup time**: 30 minutes
**Skill**: Advanced

---

## 🔧 Required Environment Variables

```env
# Core
PUBLIC_SITE_URL=https://yourdomain.com           # Your domain

# Google Analytics
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX            # From analytics.google.com

# Google Sheets
GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/d/{ID}/usercontent

# Contact
CONTACT_NAME=Your Name
CONTACT_PHONE=+84 901 234 567
CONTACT_PHONE_HREF=+84901234567
CONTACT_EMAIL=contact@example.com
CONTACT_EMAIL_HREF=contact@example.com
```

**⚠️ Important**:
- `PUBLIC_*` variables are visible to clients (OK)
- Other variables are server-only (secure)
- No secrets should be in source code

---

## 📚 Documentation

- **README.md** - Overview and setup
- **SETUP.md** - Quick 15-minute guide
- **DEPLOYMENT.md** - Detailed 8-section guide with all 3 options
- **VERIFICATION.md** - Pre-deployment checklist

---

## ⚡ Quick Start (5 minutes)

1. **Update contact info**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your details
   npm run dev
   ```

2. **Add GA**:
   - Get Measurement ID from [analytics.google.com](https://analytics.google.com)
   - Add to `.env.local`: `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

3. **Set up Google Sheets**:
   - Create sheet + Google Apps Script (5 min in SETUP.md)
   - Add webhook URL to `.env.local`

4. **Deploy**:
   ```bash
   # Option 1 - Vercel (easiest)
   git push origin main
   
   # Option 2 - Docker
   docker-compose up -d
   
   # Option 3 - VPS
   npm run build
   pm2 start dist/server/entry.mjs
   ```

---

## 🎯 Recommended Path

For most teams, this is the ideal flow:

1. **Today**: Deploy to Vercel (free, 5 minutes)
   - Test GA tracking
   - Test form submissions
   - Verify contact info

2. **This week**: Set up monitoring
   - GA4 dashboard
   - Google Sheet alerts
   - Error logging

3. **Next week**: Optimize
   - Review GA data
   - Tune form messaging
   - Scale if needed

---

## ✅ Pre-Deployment Checklist

Before going live:

- [ ] Google Analytics property created + Measurement ID captured
- [ ] Google Sheet created with headers
- [ ] Google Apps Script deployed + webhook URL captured
- [ ] Contact info updated in `.env.local`
- [ ] `PUBLIC_SITE_URL` set to your domain
- [ ] Local dev test passed: `npm run dev` → form submits → sheet updates
- [ ] Build verified: `npm run build` → 0 errors
- [ ] Environment variables added to deployment platform (Vercel/Docker/VPS)

---

## 📞 Support Checklist

When things don't work, check:

**Form not saving to Google Sheet?**
- [ ] Google Apps Script deployment is still active
- [ ] Webhook URL is correct in env
- [ ] Browser console shows no network errors

**GA not showing data?**
- [ ] Measurement ID starts with `G-`
- [ ] Check GA4 "Real-time" dashboard
- [ ] GA reports take 24-48h to populate

**Contact info not updating?**
- [ ] Rebuild after env change: `npm run build`
- [ ] Restart server after rebuild
- [ ] For Vercel: push to GitHub to redeploy

See `DEPLOYMENT.md` Troubleshooting section for more.

---

## 🎉 What You Get

**Fully production-ready landing page with:**
- ✅ Bilingual VI/EN content
- ✅ 13 content sections
- ✅ Responsive mobile design
- ✅ SEO optimized (hreflang, schema, OG tags)
- ✅ Google Analytics 4 tracking
- ✅ Form submissions → Google Sheets
- ✅ Easy contact info updates
- ✅ 3 deployment options (Vercel, Docker, VPS)
- ✅ Production-grade security
- ✅ Comprehensive documentation

**No additional setup required** - just add environment variables and deploy!

---

## 🚀 Next Steps

1. **Choose your deployment**: Vercel (easiest), Docker, or VPS
2. **Follow SETUP.md** for GA + Google Sheets (15 min)
3. **Deploy** using your chosen option
4. **Test** the form and GA tracking
5. **Monitor** via GA dashboard + Google Sheet

**Questions?** Check the relevant docs:
- Quick questions → `SETUP.md`
- Deployment questions → `DEPLOYMENT.md`
- Pre-launch checklist → `VERIFICATION.md`

---

**Status**: 🎉 **READY FOR PRODUCTION**

All code tested, all configs prepared, all docs written.

Go deploy! 🚀
