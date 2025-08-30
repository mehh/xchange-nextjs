import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, userType, message, hp } = body || {};

    // Honeypot (bots will fill this)
    if (typeof hp === "string" && hp.trim() !== "") {
      // Pretend success to avoid tipping off bots
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const site = process.env.NEXT_PUBLIC_SITE_URL || "https://tmod.com";

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_TO = process.env.RESEND_TO; // destination inbox
    const RESEND_FROM = process.env.RESEND_FROM || "noreply@tmod.com";

    // If Resend is configured, send email via API; otherwise, accept without send
    if (RESEND_API_KEY && RESEND_TO) {
      const subject = `New TMOD Contact: ${name}`;
      const html = `
        <div>
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>User Type:</strong> ${userType || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${(message as string).replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p>Source: ${site}</p>
        </div>
      `;

      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from: RESEND_FROM, to: RESEND_TO, subject, html }),
      });

      if (!resp.ok) {
        const txt = await resp.text();
        return new Response(
          JSON.stringify({ error: "Email provider error", details: txt }),
          { status: 502 }
        );
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // No provider configured: accept for now
    return new Response(
      JSON.stringify({ ok: true, note: "No email provider configured" }),
      { status: 202 }
    );
  } catch (e: unknown) {
    const message =
      typeof e === 'object' && e !== null && 'message' in e
        ? String((e as { message?: unknown }).message)
        : String(e);
    return new Response(
      JSON.stringify({ error: "Invalid request", details: message }),
      { status: 400 }
    );
  }
}
