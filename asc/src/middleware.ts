import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const res = NextResponse.next(); // Create a NextResponse object

  try {
    // Create a Supabase client configured for middleware
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get: (name) => request.cookies.get(name)?.value,
          set: (name, value, options) => {
            res.cookies.set({ name, value, ...options });
          },
          remove: (name, options) => {
            res.cookies.delete({ name, ...options });
          },
        },
      }
    );

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user && request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // If the user is authenticated, you might want to refresh the session
    // periodically. This is an example and might need adjustments
    if (session?.user) {
      await supabase.auth.refreshSession();
    }
  } catch (error) {
    console.error('Error in middleware:', error);
    // Handle the error appropriately, maybe redirect to an error page
  }

  return res;
}

export const config = {
  matcher: ['/dashboard'],
};