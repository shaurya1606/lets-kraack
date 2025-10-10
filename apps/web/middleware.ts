// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if session exists
  const hasSession = request.cookies.has("session");
  const path = request.nextUrl.pathname;
  
  console.log(`[Middleware] Path: ${path}, Has session: ${hasSession}`);
  
  // Define public paths that don't require authentication
  const isPublicPath = 
    path === '/' || // Home page
    path === '/auth/signin' ||
    path === '/auth/signup' ||
    path.startsWith('/api/auth/') ||
    path.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js)$/); // Static assets
  
  // PROTECTION LOGIC
  if (!isPublicPath && !hasSession) {
    console.log('[Middleware] Protected route access without session - redirecting to login');
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
  
  // PREVENT AUTHENTICATED USERS FROM ACCESSING AUTH PAGES
  if (path.startsWith('/auth/') && hasSession) {
    console.log('[Middleware] Authenticated user on auth page - redirecting to dashboard');
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

// Match all routes except for specific Next.js system files
export const config = {
  matcher: [
    /*
     * Match all routes except:
     * 1. /api routes that don't need auth
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. /favicon.ico, /sitemap.xml, etc.
     */
    '/((?!api/auth|_next|_static|_vercel|favicon.ico|sitemap.xml).*)',
  ],
};