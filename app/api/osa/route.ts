import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  const data = await request.json();

  // Naive spambot filter (honeypot)
  if (data.buyUsAPresent) {
    return NextResponse.json({ success: true });
  }

  const template = `<strong>Namn:</strong> ${data.name}<br />
<strong>Antal personer:</strong> ${data.numberOfPeople}<br />
<strong>Allergi / matpreferenser:</strong> ${data.food}<br />
<strong>Buss:</strong> ${data.bus}
<br /><br />
<strong>Övrigt</strong><br />
<p>
${data.misc}
</p>
`;

  await sendgrid.send({
    to: process.env.TO_EMAIL as string,
    from: process.env.TO_EMAIL as string,
    subject: "OSA",
    html: template,
  });

  return NextResponse.json({ success: true });
}
