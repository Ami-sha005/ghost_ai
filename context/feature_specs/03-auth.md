Clerk is already installed and connected. wire it into the Next.js app: provider, auth pages, redirects, route protection and user menu.

## Design

 Use the clerk's `dark` theme from `@clerk/ui/themes as the base.
 
 Override the clerk appearance variables using the app's existing CSS variables. Do not hardcode colors.

 Sign-i and sign-up pages:

 -large screens:simple two pannel layout
 -Left: compact logo, tagline, short text only feature list 
-right: centered clerk form
-small screens: form only
-no gradients
-no oversized hero sections
-no feature cards
-no scroll-heavy layouts

Keep the layout minimal and professional.

## Implementation

Wrap the root layout with `ClerkProvider` using clerk's `dark` theme.

create sign-in and sign-up pages using clerk components.

Use `proxy.ts` at the project root, not `middleware.ts`.

Define public routes using the existing sign-in nd sign-up env vars. Protect everything else by default.

Update `/`:

-authenticated users redirect to `/editor`
-unauthenticated users redirect to `/sign-in`

Add Clerk's built-in `UserButton` to the editor nabar right section for profile settings and logout.

Keep Clerk's default user menu and profile flows intact. Do not rebuilt or heavily customize clerks internals.

Use existing clerk env vars. Do not rename or invent new ones.

## Dependencies

install: @clerk/ui.

## Check when done

-`proxy.ts` exists at the root 
-all routes are predicted except pulic auth paths
-auth pages use CSS variables with no harcoded colors
-`ClerkProvider` wraps the root layout
-`npm run build` passes