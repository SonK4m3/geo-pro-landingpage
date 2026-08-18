# GEO Pro Deployment Guide

Complete step-by-step guide for deploying GEO Pro to Vercel, Docker, or a VPS.

## Prerequisites

1. Node.js 18+ installed locally
2. GitHub/GitLab account with repository
3. Google Analytics 4 account
4. Google Sheet + Google Apps Script

---

## 1. Initial Setup

### 1.1 Clone and install locally

```bash
git clone <your-repo-url>
cd geo-pro-landingpage
npm install
```

### 1.2 Create `.env.local`

```bash
cp .env.example .env.local
```

Update the values:
```env
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/d/{ID}/usercontent
CONTACT_NAME=Your Name
CONTACT_PHONE=+84 901 234 567
CONTACT_PHONE_HREF=+84901234567
CONTACT_EMAIL=contact@example.com
CONTACT_EMAIL_HREF=contact@example.com
```

### 1.3 Test locally

```bash
npm run dev
```

Visit `http://localhost:5173` to verify the page loads and contact info is correct.

---

## 2. Set Up Google Analytics 4

### Step 1: Create a GA4 property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Admin" (gear icon) in bottom left
4. Click "Create Property" under "Property" column
5. Enter property name: `GEO Pro Landing`
6. Select your timezone and reporting currency
7. Click "Create"

### Step 2: Create a web data stream

1. Under "Data collection and modification" → "Data Streams"
2. Click "Add stream" → "Web"
3. Enter your website URL: `https://yourdomain.com`
4. Enter stream name: `Landing Page`
5. Click "Create stream"

### Step 3: Get Measurement ID

1. In the data stream details, find "Measurement ID" (format: `G-XXXXXXXXXX`)
2. Copy this to `PUBLIC_GA_MEASUREMENT_ID` in your `.env.local`
3. Verify tag is installed by checking "Tag installation status"

### Step 4: Set up conversions (optional)

1. Go to "Events" in left menu
2. Click "Create event" for form submissions
3. Name: `form_submission` (should auto-detect)
4. Mark as conversion: toggle ON

---

## 3. Set Up Google Sheets Integration

### Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click "New" → "Spreadsheet"
3. Name it: `GEO Pro Leads`
4. In first row, create headers: `Timestamp | Name | Email | Phone | Company | Message`
5. Save the document

### Step 2: Get the Sheet ID

1. Open the sheet
2. Copy the ID from the URL: `docs.google.com/spreadsheets/d/{ID}/edit`
3. Note this value

### Step 3: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New project"
3. Copy the entire contents of `scripts/google-apps-script.gs` from this project
4. Paste into the script editor (replacing everything)
5. Update these values at the top:
   ```javascript
   const SHEET_ID = 'YOUR_SHEET_ID'; // from Step 2
   const SHEET_NAME = 'Leads';
   ```
6. Save (Ctrl+S or Cmd+S)

### Step 4: Deploy as Web App

1. Click "Deploy" (top right) → "New deployment"
2. Select type: "Web app"
3. Execute as: Your email address
4. Who has access: "Anyone"
5. Click "Deploy"
6. Click "Authorize access" and grant permissions
7. Copy the deployment URL (looks like: `https://script.google.com/macros/d/...`)
8. Add to `.env.local`:
   ```env
   GOOGLE_SHEETS_WEBHOOK=<copied-url>
   ```

### Step 5: Test the integration

1. Go to your local dev server: `http://localhost:5173`
2. Fill out and submit the contact form
3. Check your Google Sheet—the data should appear within seconds
4. If it doesn't work, check:
   - Google Apps Script deployment is active
   - Sheet ID matches in the script
   - CORS/browser console for errors

---

## 4. Deploy to Vercel

Vercel is the easiest option for first-time deployment.

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Create Vercel account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Grant access to your repository

### Step 3: Import project

1. Click "Add New" → "Project"
2. Select your `geo-pro-landingpage` repository
3. Framework: Astro (auto-detected)
4. Root Directory: `./` (default)
5. Build command: `npm run build` (auto-detected)
6. Output directory: `dist` (auto-detected)
7. Click "Continue"

### Step 4: Add environment variables

Before deploying, add environment variables:

1. Click "Environment Variables"
2. Add each variable:
   - `PUBLIC_SITE_URL` = `https://yourdomain.vercel.app` (or custom domain)
   - `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - `GOOGLE_SHEETS_WEBHOOK` = `https://script.google.com/macros/d/...`
   - `CONTACT_NAME` = Your Name
   - `CONTACT_PHONE` = +84 901 234 567
   - `CONTACT_PHONE_HREF` = +84901234567
   - `CONTACT_EMAIL` = contact@example.com
   - `CONTACT_EMAIL_HREF` = contact@example.com

3. Click "Deploy"

### Step 5: Connect custom domain (optional)

1. Go to project Settings → Domains
2. Click "Add domain"
3. Enter your domain (e.g., `geoproasia.com`)
4. Update your domain DNS:
   - For root domain: Add `A` record pointing to Vercel IP
   - For www: Add `CNAME` record: `cname.vercel.com`
5. DNS propagation takes 10-48 hours

### Redeploying after changes

```bash
git add .
git commit -m "Update description"
git push origin main
```

Vercel automatically redeploys on every push to `main`.

---

## 5. Deploy to Docker

For more control or private hosting.

### Step 1: Build locally

```bash
npm run build
```

### Step 2: Build Docker image

```bash
docker build -t geo-pro:latest .
```

### Step 3: Run container

```bash
docker run -d \
  -p 4321:4321 \
  -e PUBLIC_SITE_URL=https://yourdomain.com \
  -e PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX \
  -e GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/d/{ID}/usercontent \
  -e CONTACT_NAME="Your Name" \
  -e CONTACT_PHONE="+84 901 234 567" \
  -e CONTACT_PHONE_HREF="+84901234567" \
  -e CONTACT_EMAIL="contact@example.com" \
  -e CONTACT_EMAIL_HREF="contact@example.com" \
  --name geo-pro \
  geo-pro:latest
```

### Step 4: Verify

```bash
curl http://localhost:4321
```

### With docker-compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "4321:4321"
    environment:
      PUBLIC_SITE_URL: https://yourdomain.com
      PUBLIC_GA_MEASUREMENT_ID: G-XXXXXXXXXX
      GOOGLE_SHEETS_WEBHOOK: https://script.google.com/macros/d/{ID}/usercontent
      CONTACT_NAME: Your Name
      CONTACT_PHONE: +84 901 234 567
      CONTACT_PHONE_HREF: +84901234567
      CONTACT_EMAIL: contact@example.com
      CONTACT_EMAIL_HREF: contact@example.com
    restart: unless-stopped
```

Then run:

```bash
docker-compose up -d
```

### Updating after changes

```bash
git pull origin main
docker-compose down
docker-compose up -d --build
```

---

## 6. Deploy to VPS (DigitalOcean, Linode, AWS EC2)

### Step 1: SSH into your server

```bash
ssh user@your-server-ip
```

### Step 2: Install Node.js

```bash
# Using NodeSource repository (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 3: Clone repository

```bash
cd /var/www
sudo git clone <your-repo-url> geo-pro
cd geo-pro
sudo chown -R $USER:$USER .
```

### Step 4: Install and build

```bash
npm ci
npm run build
```

### Step 5: Create .env file

```bash
cat > .env << 'EOF'
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/d/{ID}/usercontent
CONTACT_NAME=Your Name
CONTACT_PHONE=+84 901 234 567
CONTACT_PHONE_HREF=+84901234567
CONTACT_EMAIL=contact@example.com
CONTACT_EMAIL_HREF=contact@example.com
EOF
```

### Step 6: Start with PM2 (recommended)

```bash
sudo npm install -g pm2

# Start the app
pm2 start dist/server/entry.mjs --name geo-pro

# Configure to restart on reboot
pm2 startup
pm2 save
```

Verify it's running:
```bash
pm2 status
pm2 logs geo-pro
```

### Step 7: Set up Nginx reverse proxy

Create `/etc/nginx/sites-available/geo-pro`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Gzip compression
    gzip on;
    gzip_min_length 1000;
    gzip_types text/plain text/css application/json;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/geo-pro /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 8: Set up SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### Updating after changes

```bash
cd /var/www/geo-pro
git pull origin main
npm ci
npm run build
pm2 restart geo-pro
```

---

## 7. Monitoring & Maintenance

### Google Analytics

- Visit [analytics.google.com](https://analytics.google.com) to monitor traffic
- Set up alerts for anomalies
- Review conversion data weekly

### Form Submissions

- Check Google Sheet weekly for new leads
- Consider setting up email notifications in Google Apps Script

### Server Monitoring

**Vercel**: Built-in monitoring in dashboard
**Docker**: `docker logs geo-pro`
**VPS with PM2**: `pm2 logs geo-pro`

### Update dependencies

```bash
npm update
npm run build
git add package*.json
git commit -m "Update dependencies"
git push
```

---

## 8. Troubleshooting

### GA not tracking
- Verify `PUBLIC_GA_MEASUREMENT_ID` is set
- Check GA4 real-time dashboard
- GA takes 24-48 hours to fully process data

### Form submissions not saving
- Check GOOGLE_SHEETS_WEBHOOK is correct
- Verify Google Apps Script deployment is active
- Check browser console for network errors
- Test Google Apps Script with `testWebhook()` function

### Contact info not updating
- All contact info changes require rebuild + redeploy
- For Vercel: push to GitHub automatically redeploys
- For Docker/VPS: rebuild and restart

### Slow performance
- Check Vercel/VPS CPU and memory
- Enable gzip compression in Nginx
- Monitor Core Web Vitals in Google Analytics

### SSL certificate issues
- For Vercel: automatic, no action needed
- For VPS: run `sudo certbot renew` to extend certificate

---

## Quick Reference

| Task | Command |
|------|---------|
| Local dev | `npm run dev` |
| Build | `npm run build` |
| Type check | `npm run check` |
| Docker build | `docker build -t geo-pro:latest .` |
| Docker run | `docker-compose up -d` |
| PM2 logs | `pm2 logs geo-pro` |
| PM2 restart | `pm2 restart geo-pro` |

---

Need help? Check:
- [Astro docs](https://docs.astro.build)
- [Vercel docs](https://vercel.com/docs)
- [Google Analytics help](https://support.google.com/analytics)
