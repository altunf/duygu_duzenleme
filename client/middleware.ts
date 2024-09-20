import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth/index.js";

export async function middleware(req: NextRequest) {
  const { url, nextUrl, cookies } = req;
  const { value: token } = cookies.get("token") ?? { value: null };

  const AUTH_PAGES = ["/login", "/register", "/forgot-password"];
  const isAuthPages = (url: string) =>
    AUTH_PAGES.some((page) => page.startsWith(url));

  const hasVerifyToken = token && (await verifyJwtToken(token));

  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!hasVerifyToken) {
      const response = NextResponse.next();
      return response;
    }
  }

  if (!hasVerifyToken) {
    return NextResponse.redirect(new URL("/login", url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
