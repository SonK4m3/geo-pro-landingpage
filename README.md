# GEO Pro Landing Page

Bilingual Astro landing page based on the GEO Pro VI/EN content brief and the conventions used by `sotawork-landing-page/apps/sotax-suite`.

## Stack

- Astro 5, SSR output
- `@astrojs/node` standalone adapter
- Tailwind CSS 3 and shared design tokens
- `astro-icon` with Tabler icons
- TypeScript strict mode
- Vietnamese at `/`, English at `/en`
- Google Analytics 4 tracking
- Google Sheets integration for lead capture

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run check
npm run build
```

## Configuration

### Before Launch

1. **Update contact information** by creating a `.env.local` file with:
   ```env
   CONTACT_NAME=Your Name
   CONTACT_PHONE=+84 901 234 567
   CONTACT_PHONE_HREF=+84901234567
   CONTACT_EMAIL=contact@example.com
   CONTACT_EMAIL_HREF=contact@example.com
   PUBLIC_SITE_URL=https://yourdomain.com
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/d/{ID}/usercontent
   ```

2. **Set up Google Analytics**:
   - Create a property in [Google Analytics 4](https://analytics.google.com)
   - Copy the Measurement ID (format: `G-XXXXXXXXXX`)
   - Add to environment as `PUBLIC_GA_MEASUREMENT_ID`

3. **Set up Google Sheets integration**:
   - Create a new Google Sheet
   - Go to [script.google.com](https://script.google.com)
   - Create a new project and copy code from `scripts/google-apps-script.gs`
   - Update `SHEET_ID` and `SHEET_NAME` in the script
   - Deploy as Web App (Execute as: Your account, Who has access: Anyone)
   - Copy the deployment URL to `GOOGLE_SHEETS_WEBHOOK` env variable

### Environment Variables

All environment variables are documented in `.env.example`.

**Client-side (PUBLIC_* prefix)**:
- `PUBLIC_SITE_URL` - Production domain
- `PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 ID

**Server-side (no prefix)**:
- `CONTACT_NAME`, `CONTACT_PHONE`, `CONTACT_EMAIL` - Replace placeholders
- `GOOGLE_SHEETS_WEBHOOK` - Webhook URL for form submissions

## Deployment

### Docker Deployment

The project includes a multi-stage Dockerfile optimized for production.

**Build the image:**
```bash
docker build -t geo-pro:latest .
```

**Run the container:**
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
  geo-pro:latest
```

**Using docker-compose** (create `docker-compose.yml`):
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

### Vercel Deployment

1. **Push to GitHub** (or GitLab/Bitbucket):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Link to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Framework is auto-detected as Astro
   - Click "Deploy"

3. **Add environment variables**:
   - In Vercel project settings > Environment Variables, add:
     - `PUBLIC_SITE_URL` = `https://yourdomain.vercel.app` (or custom domain)
     - `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
     - `GOOGLE_SHEETS_WEBHOOK` = `https://script.google.com/macros/d/{ID}/usercontent`
     - `CONTACT_NAME`, `CONTACT_PHONE`, etc.

4. **Connect custom domain** (optional):
   - Domain settings > Add domain
   - Update DNS records as instructed

5. **Redeploy** after adding environment variables:
   - Settings > Deployments > Promote any deployment

### Node Deployment (VPS/Dedicated Server)

1. **Build on your machine**:
   ```bash
   npm run build
   ```

2. **Upload to server**:
   ```bash
   scp -r dist package.json package-lock.json user@server:/path/to/app/
   ```

3. **Install dependencies on server**:
   ```bash
   cd /path/to/app
   npm ci --omit=dev
   ```

4. **Run the server**:
   ```bash
   node dist/server/entry.mjs
   ```

5. **Use PM2 for persistence** (recommended):
   ```bash
   npm install -g pm2
   pm2 start dist/server/entry.mjs --name geo-pro
   pm2 startup
   pm2 save
   ```

6. **Set up reverse proxy** (nginx):
   ```nginx
   server {
       listen 80;
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
   }
   ```

## API Endpoints

### POST /api/contact

Submits a contact form and saves to Google Sheets.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+84 901 234 567",
  "company": "Acme Corp",
  "message": "I'm interested in your services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We will be in touch soon."
}
```

**Error responses:**
- `400` - Missing required fields or invalid email
- `500` - Server error (check GOOGLE_SHEETS_WEBHOOK configuration)
- `503` - Google Sheets webhook not configured

## Monitoring & Analytics

- **Google Analytics**: Visit your GA4 dashboard to monitor traffic, user behavior, and conversions
- **Google Sheets**: All form submissions automatically logged
- **Logs**: Check Docker container or PM2 logs for errors

## Troubleshooting

### Form submissions not appearing in Google Sheets

1. Verify `GOOGLE_SHEETS_WEBHOOK` is correct in environment
2. Check the Google Apps Script deployment is still active (scripts expire after 6 months of inactivity)
3. Check browser console for network errors (CORS issues)
4. Verify the Google Sheet ID in the script matches your actual sheet

### GA not tracking

1. Verify `PUBLIC_GA_MEASUREMENT_ID` is set
2. Check GA4 dashboard for real-time events
3. GA data takes 24-48 hours to appear fully
4. Verify the property ID starts with `G-`

### Contact info not updating

1. Verify environment variables are set in `.env.local` or deployment platform
2. Rebuild and redeploy after changing environment variables
3. Client-side variables (`PUBLIC_*`) require rebuild; server-side variables (`CONTACT_*`) also require rebuild

## Maintenance

- Monitor Google Analytics for performance and user behavior
- Review lead submissions in Google Sheets weekly
- Update contact information through environment variables as needed
- Keep Astro and dependencies updated: `npm update`
- Monitor error logs on Docker/VPS deployment
