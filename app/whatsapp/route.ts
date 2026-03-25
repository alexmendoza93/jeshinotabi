import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("https://api.whatsapp.com/send?phone=523335842694");
}
