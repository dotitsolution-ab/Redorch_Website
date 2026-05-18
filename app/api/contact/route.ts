import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

const defaultRecipients = ["nazmul@redorch.com", "ab@redorch.com"];
const defaultFromAddress = "hello@redorch.com";
const defaultZeptoMailEndpoint = "https://api.zeptomail.com/v1.1/email";

function clean(value: unknown, maxLength = 1200) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function getEnv(name: string) {
  return process.env[name]?.trim() || "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getRecipients() {
  const configured = getEnv("CONTACT_TO_EMAILS")
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return configured?.length ? configured : defaultRecipients;
}

function getAuthorizationHeader(apiKey: string) {
  const value = apiKey.trim();

  return value.toLowerCase().startsWith("zoho-enczapikey ")
    ? value
    : `Zoho-enczapikey ${value}`;
}

function getEmailServiceUrl() {
  return getEnv("ZEPTOMAIL_API_URL") || defaultZeptoMailEndpoint;
}

function parseZeptoMailError(responseText: string) {
  try {
    const parsed = JSON.parse(responseText) as {
      error?: {
        code?: string;
        message?: string;
        request_id?: string;
        details?: { code?: string; message?: string; target?: string }[];
      };
      message?: string;
      request_id?: string;
    };

    const details = parsed.error?.details
      ?.map((detail) =>
        [detail.target, detail.code, detail.message].filter(Boolean).join(": "),
      )
      .filter(Boolean);

    return {
      code: parsed.error?.code,
      message: parsed.error?.message || parsed.message || responseText,
      requestId: parsed.error?.request_id || parsed.request_id,
      details,
    };
  } catch {
    return {
      code: undefined,
      message: responseText,
      requestId: undefined,
      details: undefined,
    };
  }
}

function buildEmailHtml({
  fullName,
  email,
  phone,
  company,
  service,
  message,
  submittedAt,
}: {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  submittedAt: string;
}) {
  const rows = [
    ["Name", fullName],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Company / Website", company || "Not provided"],
    ["Service Needed", service || "Not selected"],
    ["Submitted", submittedAt],
  ];

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Redorch Quote Request</title>
  </head>
  <body style="margin:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f6fb;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;overflow:hidden;border-radius:18px;background:#ffffff;border:1px solid #dbe5f1;">
            <tr>
              <td style="background:#050816;padding:30px 32px;border-bottom:4px solid #ff4d13;">
                <div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#ff7a45;">Redorch Website</div>
                <h1 style="margin:12px 0 0;font-size:28px;line-height:1.15;color:#ffffff;">New quote request received</h1>
                <p style="margin:12px 0 0;font-size:15px;line-height:1.6;color:#a8b7ce;">A visitor submitted the Redorch contact form. Reply to the sender after reviewing the project details below.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 10px;">
                  ${rows
                    .map(
                      ([label, value]) => `
                  <tr>
                    <td style="width:190px;padding:14px 16px;border:1px solid #dbe5f1;border-right:0;border-radius:12px 0 0 12px;background:#f8fafc;font-size:13px;font-weight:700;color:#64748b;">${escapeHtml(label)}</td>
                    <td style="padding:14px 16px;border:1px solid #dbe5f1;border-radius:0 12px 12px 0;background:#ffffff;font-size:14px;line-height:1.5;color:#0f172a;">${escapeHtml(value)}</td>
                  </tr>`,
                    )
                    .join("")}
                </table>

                <div style="margin-top:18px;padding:20px;border-radius:16px;background:#fff7ed;border:1px solid #fed7aa;">
                  <div style="font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#ea580c;">Project challenge</div>
                  <p style="margin:10px 0 0;font-size:15px;line-height:1.7;color:#1f2937;white-space:pre-wrap;">${escapeHtml(message)}</p>
                </div>

                <div style="margin-top:22px;padding:18px;border-radius:16px;background:#ecfeff;border:1px solid #bae6fd;">
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#0f172a;"><strong>Suggested next step:</strong> qualify the service track, estimate scope, and send the client a short discovery response.</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #dbe5f1;">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#64748b;">This message was sent by the Redorch Technology website contact form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildEmailText(payload: {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  submittedAt: string;
}) {
  return [
    "New Redorch quote request",
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Company / Website: ${payload.company || "Not provided"}`,
    `Service Needed: ${payload.service || "Not selected"}`,
    `Submitted: ${payload.submittedAt}`,
    "",
    "Project challenge:",
    payload.message,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 80);
  const company = clean(body.company, 180);
  const service = clean(body.service, 180);
  const message = clean(body.message, 3000);
  const fullName = `${firstName} ${lastName}`.trim() || "Website visitor";

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = getEnv("ZEPTOMAIL_API_KEY");
  const fromAddress = getEnv("ZEPTOMAIL_FROM_EMAIL") || defaultFromAddress;
  const fromName = getEnv("ZEPTOMAIL_FROM_NAME") || "Redorch Website";
  const recipients = getRecipients();

  if (!apiKey) {
    return NextResponse.json(
      { ok: false, message: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  if (!isEmail(fromAddress) || recipients.some((recipient) => !isEmail(recipient))) {
    console.error("ZeptoMail contact form is misconfigured", {
      fromAddress,
      recipients,
    });

    return NextResponse.json(
      {
        ok: false,
        message:
          "Email service is not configured correctly. Please email hello@redorch.com directly.",
      },
      { status: 500 },
    );
  }

  const submittedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  const emailPayload = {
    fullName,
    email,
    phone,
    company,
    service,
    message,
    submittedAt,
  };

  let response: Response;

  try {
    response = await fetch(getEmailServiceUrl(), {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: getAuthorizationHeader(apiKey),
        "cache-control": "no-cache",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: { address: fromAddress, name: fromName },
        to: recipients.map((address) => ({
          email_address: { address, name: address.split("@")[0] },
        })),
        reply_to: [{ address: email, name: fullName }],
        subject: `New Redorch quote request: ${service || "General inquiry"}`,
        htmlbody: buildEmailHtml(emailPayload),
        textbody: buildEmailText(emailPayload),
        track_clicks: false,
        track_opens: false,
        client_reference: `redorch-contact-${Date.now()}`,
      }),
      signal: AbortSignal.timeout(15000),
    });
  } catch (error) {
    console.error("ZeptoMail contact form request failed", {
      error: error instanceof Error ? error.message : String(error),
      fromAddress,
      recipients,
    });

    return NextResponse.json(
      {
        ok: false,
        message:
          "Email service is unavailable right now. Please email hello@redorch.com directly.",
      },
      { status: 502 },
    );
  }

  const responseText = await response.text();

  if (!response.ok) {
    const error = parseZeptoMailError(responseText);

    console.error("ZeptoMail contact form failed", {
      status: response.status,
      code: error.code,
      message: error.message,
      details: error.details,
      requestId: error.requestId,
      fromAddress,
      recipients,
    });

    return NextResponse.json(
      {
        ok: false,
        message:
          "Email service rejected the request. Please email hello@redorch.com directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you. Your message has been sent to Redorch.",
  });
}
