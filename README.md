# REVNCIA Microsoft-Inspired Enterprise Theme Pack

A clean, light enterprise UI for REVNCIA Website + REVNCIA OS. It is inspired by modern Microsoft enterprise design patterns (layout, whitespace, cards, navigation, blue CTAs) without copying Microsoft branding or assets.

## Included
- Public website landing page
- REVNCIA OS dashboard shell
- Responsive top navigation and OS sidebar
- Service catalog data model
- 8 recovered REVNCIA solution pillars and their known sub-services
- Enterprise cards, CTA patterns, KPI cards, tables, feature panels
- Accessible light theme tokens
- Easy integration with an existing Next.js application

## Integration
Copy `app/globals.css`, `components/*`, and `lib/services.ts` into the existing REVNCIA Next.js project, then wire the components into the existing routes. Keep the existing backend, authentication, service-request flow, APIs, and Cloudflare/OpenNext configuration.

Important: the exact source repository was not available in the saved file library during pack generation. Therefore this pack does not overwrite or pretend to reproduce unseen source code. The service catalog contains the REVNCIA services recoverable from the saved REVNCIA materials and is structured so the complete existing catalog can be merged without changing the UI.
