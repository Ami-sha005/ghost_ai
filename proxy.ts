import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    '/((?!_next|_static|favicon.ico|sign-in|sign-up|public|proxy).*)',
    '/(api|trpc)(.*)',
  ],
}
