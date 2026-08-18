/**
 * Google Apps Script - Deploy as Web App
 * 
 * This script handles incoming form submissions from the landing page
 * and appends them to a Google Sheet.
 * 
 * Setup Instructions:
 * 1. Create a new Google Sheet (or use existing)
 * 2. Open Google Apps Script (Tools > Script editor or script.google.com)
 * 3. Replace the code with this script
 * 4. Set the SHEET_ID and SHEET_NAME constants below
 * 5. Deploy as Web App:
 *    - Click Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Your email
 *    - Who has access: Anyone
 * 6. Copy the deployment URL and add to env: GOOGLE_SHEETS_WEBHOOK
 */

const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID'; // Get from sheet URL: /spreadsheets/d/{ID}/edit
const SHEET_NAME = 'Leads'; // Name of the sheet to append to

const HEADERS = ['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Message'];

function doPost(e) {
  try {
    // Parse incoming data
    const payload = JSON.parse(e.postData.contents);
    const values = payload.values;

    if (!Array.isArray(values) || values.length !== 6) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'Invalid payload format' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Get or create sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
    }

    // Append form data
    sheet.appendRow(values);

    // Optional: Send email notification
    sendEmailNotification(values);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Data saved successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ message: 'This service only accepts POST requests' })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: Send email notification when new lead is received
 */
function sendEmailNotification(values) {
  const [timestamp, name, email, phone, company, message] = values;

  const emailBody = `
New lead received from GEO Pro landing page:

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || 'N/A'}
Message: ${message || 'N/A'}
Submitted: ${timestamp}
  `.trim();

  // Replace with your email
  // GmailApp.sendEmail('your-email@example.com', 'New GEO Pro Lead', emailBody);
}

/**
 * Test function - run this to verify setup
 */
function testWebhook() {
  const testData = {
    values: [
      new Date().toISOString(),
      'Test User',
      'test@example.com',
      '+84 901 234 567',
      'Test Company',
      'This is a test message',
    ],
  };

  const payload = JSON.stringify(testData);
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: payload,
    muteHttpExceptions: true,
  };

  // Replace with your deployed script URL
  // const response = UrlFetchApp.fetch('YOUR_DEPLOYMENT_URL', options);
  // console.log(response.getContentText());
}
