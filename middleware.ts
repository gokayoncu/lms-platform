import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/public(.*)' 
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth();
  }
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', 
    '/',                    
    '/(api|trpc)(.*)',       
  ],
};