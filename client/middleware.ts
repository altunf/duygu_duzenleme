import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  console.log(`${JSON.stringify(res)} sad`);
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*", "/another-path/:path*"],
};
