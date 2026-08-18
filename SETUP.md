# Quick Start Setup

Get GEO Pro running in 15 minutes.

## 1. Update Contact Information

Create or edit `.env.local` in the project root:

```env
CONTACT_NAME=Your Name
CONTACT_PHONE=+84 901 234 567
CONTACT_PHONE_HREF=+84901234567
CONTACT_EMAIL=contact@example.com
CONTACT_EMAIL_HREF=contact@example.com
PUBLIC_SITE_URL=https://yourdomain.com
```

Rebuild and restart for changes to take effect:
```bash
npm run build
npm run dev
```

## 2. Set Up Google Analytics (5 minutes)

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property: `GEO Pro Landing`
3. Add a web data stream for `https://yourdomain.com`
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Add to `.env.local`:
   ```env
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
6. Restart dev server: `npm run dev`
7. Verify in GA4 dashboard → Real-time → you should see yourself

## 3. Set Up Google Sheets (5 minutes)

### Create the sheet
1. Open [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet: `GEO Pro Leads`
3. Add headers in row 1: `Timestamp | Name | Email | Phone | Company | Message`
4. Copy the Sheet ID from URL: `...spreadsheets/d/{ID}/edit`

### Deploy the script
1. Open [script.google.com](https://script.google.com)
2. Create new project
3. Copy code from `scripts/google-apps-script.gs`
4. Update at top:
   ```javascript
   const SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';
   const SHEET_NAME = 'Leads';
   ```
5. Save and Deploy → Web App
   - Execute as: Your email
   - Who has access: Anyone
6. Copy the deployment URL
7. Add to `.env.local`:
   ```env
   GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/d/{ID}/usercontent
   ```
8. Test: submit the contact form locally and check the sheet

## 4. Ready for Deployment

Your site is ready to deploy! Choose one:

### **Vercel** (Easiest)
```bash
git push origin main
# Go to vercel.com, import repo, add env vars
# Done! Auto-deploys on every push
```

### **Docker** (Any server)
```bash
docker build -t geo-pro .
docker-compose up -d
```

### **VPS** (Full control)
```bash
npm run build
scp -r dist user@server:/var/www/geo-pro/
# Setup Nginx, PM2, etc. (see DEPLOYMENT.md)
```

See `DEPLOYMENT.md` for detailed instructions.

## Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `CONTACT_NAME` | Contact person name | `John Doe` |
| `CONTACT_PHONE` | Phone number | `+84 901 234 567` |
| `CONTACT_PHONE_HREF` | Phone for tel: link | `+84901234567` |
| `CONTACT_EMAIL` | Email address | `john@example.com` |
| `CONTACT_EMAIL_HREF` | Email for mailto: | `john@example.com` |
| `PUBLIC_SITE_URL` | Production domain | `https://geoproasia.com` |
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | `G-XXXXXXXXXX` |
| `GOOGLE_SHEETS_WEBHOOK` | Google Apps Script URL | `https://script.google.com/...` |

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (auto-reload)
npm run dev

# Type check
npm run check

# Build for production
npm run build

# Preview production build locally
npm run preview
```

Visit `http://localhost:5173` after `npm run dev`

## Common Issues

**Form not saving to Google Sheet?**
- Verify webhook URL in `.env.local`
- Check browser console for network errors
- Confirm Google Apps Script deployment is active

**GA not showing data?**
- GA ID must start with `G-`
- Real-time appears immediately; reports take 24-48h
- Check GA4 "Real-time" dashboard while submitting

**Contact info not updating?**
- All changes require rebuild: `npm run build`
- Restart dev server: `npm run dev`

## Next Steps

1. ✅ Update contact info
2. ✅ Set up Google Analytics
3. ✅ Set up Google Sheets
4. ⬜ Deploy to production (see DEPLOYMENT.md)
5. ⬜ Monitor analytics & leads
6. ⬜ Update content as needed

---

Need more? Read `DEPLOYMENT.md` for production setup details.
