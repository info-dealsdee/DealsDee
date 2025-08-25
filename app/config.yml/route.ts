import { NextResponse } from 'next/server';

export async function GET() {
  // Redirect to the correct config path
  return NextResponse.redirect(new URL('/admin/config.yml', process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://dealsdee.vercel.app'));
}