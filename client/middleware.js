import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;


  if (!token && pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  
  if (token && (pathname === "/login" || pathname === "/")) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}
