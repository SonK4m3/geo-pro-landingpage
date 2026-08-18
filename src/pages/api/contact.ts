import type { APIRoute } from 'astro';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

interface GoogleSheetsPayload {
  values: [string, string, string, string, string, string]; // [timestamp, name, email, phone, company, message]
}

/**
 * POST /api/contact
 * Receives form submission and appends to Google Sheets via Google Apps Script
 * 
 * Required environment variables:
 * - GOOGLE_SHEETS_WEBHOOK: URL to Google Apps Script deployment (doPost endpoint)
 */
export const POST: APIRoute = async ({ request }) => {
  // Only allow POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, phone' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const webhookUrl = import.meta.env.GOOGLE_SHEETS_WEBHOOK;
    if (!webhookUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK not configured');
      return new Response(
        JSON.stringify({ error: 'Service temporarily unavailable' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepare payload for Google Sheets
    const payload: GoogleSheetsPayload = {
      values: [
        new Date().toISOString(),
        data.name,
        data.email,
        data.phone,
        data.company || '',
        data.message || '',
      ],
    };

    // Send to Google Sheets via webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }

    // Track in Google Analytics (optional - can be sent from client)
    // gtag('event', 'form_submission', { ... })

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you! We will be in touch soon.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
