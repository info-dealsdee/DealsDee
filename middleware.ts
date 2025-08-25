import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only handle /admin routes, not /admin/ static files
  if (pathname === '/admin') {
    return NextResponse.rewrite(new URL('/admin/index.html', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin',
};