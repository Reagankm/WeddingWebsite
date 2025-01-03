import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Normalize path to lowercase
  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase();
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
