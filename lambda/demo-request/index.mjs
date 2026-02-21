const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "victor.amaya@ciroai.us";
const INTERNAL_RECIPIENT = process.env.INTERNAL_RECIPIENT || "hola@ciroai.us";
const ALLOWED_ORIGINS = ["https://ciroai.us", "https://www.ciroai.us", "http://localhost:5173"];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}

export async function handler(event) {
  const origin = event.headers?.origin || "";
  const headers = corsHeaders(origin);

  if (event.requestContext?.http?.method === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { firstName, lastName, email, phone, company, jobTitle, industry, companySize, useCase, timeline, message } = body;

    // Validate
    if (!firstName || !lastName || !email || !company) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields" }) };
    }

    // 1) Send internal notification to CIRO team
    await sendEmail({
      to: INTERNAL_RECIPIENT,
      subject: `New Demo Request: ${firstName} ${lastName} from ${company}`,
      html: buildInternalEmail({ firstName, lastName, email, phone, company, jobTitle, industry, companySize, useCase, timeline, message }),
    });

    // 2) Send confirmation email to the prospect
    await sendEmail({
      to: email,
      subject: `Welcome to CIRO AI, ${firstName} — Your Demo Request is Confirmed`,
      html: buildConfirmationEmail({ firstName, company }),
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "Demo request received. Check your email for confirmation." }),
    };
  } catch (err) {
    console.error("Lambda error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Server error" }) };
  }
}

async function sendEmail({ to, subject, html }) {
  if (!SENDGRID_API_KEY) {
    console.warn("No SENDGRID_API_KEY — skipping email to", to);
    return;
  }

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${SENDGRID_API_KEY}` },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: FROM_EMAIL, name: "CIRO AI" },
      subject,
      content: [{ type: "text/html", value: html }],
    }),
  });

  if (res.status !== 202) {
    const text = await res.text();
    console.error(`SendGrid error (${res.status}):`, text);
  }
}

// ── Internal notification email ──────────────────────────────────────
function buildInternalEmail({ firstName, lastName, email, phone, company, jobTitle, industry, companySize, useCase, timeline, message }) {
  return `
<!DOCTYPE html>
<html><body style="font-family:Arial,sans-serif;color:#1e293b;padding:24px">
  <h2 style="color:#7c3aed">New Demo Request</h2>
  <table style="border-collapse:collapse;width:100%;max-width:600px">
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Name</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${firstName} ${lastName}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Email</td><td style="padding:8px;border-bottom:1px solid #e2e8f0"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Phone</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${phone || "N/A"}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Company</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${company}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Title</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${jobTitle || "N/A"}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Industry</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${industry || "N/A"}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Company Size</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${companySize || "N/A"}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Use Case</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${useCase || "N/A"}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Timeline</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${timeline || "N/A"}</td></tr>
    <tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:600">Message</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${message || "None"}</td></tr>
  </table>
  <p style="margin-top:16px;font-size:12px;color:#94a3b8">Submitted at ${new Date().toISOString()}</p>
</body></html>`;
}

// ── Confirmation email to the prospect ───────────────────────────────
function buildConfirmationEmail({ firstName, company }) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e1b4b,#312e81);padding:40px 48px;text-align:center">
            <img src="https://ciroai.us/images/ciro-logo-white.png" alt="CIRO AI" width="140" style="margin-bottom:16px">
            <h1 style="color:#ffffff;font-size:24px;margin:0;font-weight:700">Your Demo Request is Confirmed</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 48px">
            <p style="font-size:16px;color:#1e293b;line-height:1.6;margin:0 0 16px">
              Hi ${firstName},
            </p>
            <p style="font-size:16px;color:#475569;line-height:1.6;margin:0 0 24px">
              Thank you for your interest in CIRO AI. We've received your demo request for <strong>${company}</strong> and our team will be in touch within <strong>24 hours</strong> to schedule a personalized walkthrough.
            </p>

            <!-- Pitch Deck CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:24px">
              <tr><td style="padding:24px">
                <p style="font-size:14px;font-weight:700;color:#1e293b;margin:0 0 8px">While you wait, explore what CIRO can do:</p>
                <p style="font-size:14px;color:#475569;margin:0 0 16px">See our interactive pitch deck with live demos, ROI calculators, and real customer results.</p>
                <a href="https://pitch.ciroai.us" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#3b82f6);color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:600">
                  View Pitch Deck &rarr;
                </a>
              </td></tr>
            </table>

            <!-- Platform CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:24px">
              <tr><td style="padding:24px">
                <p style="font-size:14px;font-weight:700;color:#1e293b;margin:0 0 8px">Get started right away:</p>
                <p style="font-size:14px;color:#475569;margin:0 0 16px">Create your free account on the CIRO AI platform to explore dashboards, connectors, and AI analytics first-hand.</p>
                <a href="https://app.ciroai.us" style="display:inline-block;background:#1e293b;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:600">
                  Login / Register &rarr;
                </a>
              </td></tr>
            </table>

            <!-- What to Expect -->
            <p style="font-size:14px;font-weight:700;color:#1e293b;margin:0 0 12px">What to expect in your demo:</p>
            <ul style="font-size:14px;color:#475569;line-height:1.8;padding-left:20px;margin:0 0 24px">
              <li>A personalized walkthrough tailored to ${company}'s operations</li>
              <li>Live Q&A with our engineering team</li>
              <li>ROI analysis specific to your industry</li>
              <li>Clear next steps — no obligation</li>
            </ul>

            <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0">

            <p style="font-size:14px;color:#475569;line-height:1.6;margin:0">
              If you have any questions before then, reply to this email or reach us at
              <a href="mailto:hola@ciroai.us" style="color:#7c3aed;text-decoration:none;font-weight:600">hola@ciroai.us</a>.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:24px 48px;text-align:center;border-top:1px solid #e2e8f0">
            <p style="font-size:12px;color:#94a3b8;margin:0 0 4px">CIRO AI &middot; El Salvador &amp; California</p>
            <p style="font-size:12px;color:#94a3b8;margin:0">
              <a href="https://ciroai.us" style="color:#7c3aed;text-decoration:none">ciroai.us</a> &middot;
              <a href="https://www.linkedin.com/company/cirolabs/" style="color:#7c3aed;text-decoration:none">LinkedIn</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
