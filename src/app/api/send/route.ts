import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import GithubAccessTokenEmail from "../../../../emails";


const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: NextRequest, res: NextResponse) {
  const { email, username } = await request.json();

  try {
    const { data } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Github Access Token',
      react: GithubAccessTokenEmail({
        username: username,
      }),
    })

    return Response.json({ data, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
