# Bazar-Dor

A responsive Bengali market-price companion for browsing daily product prices, comparing markets, and viewing protected product details.

**Live demo:** [bazar-dor-x3dz.vercel.app](https://bazar-dor-x3dz.vercel.app/)

## Overview

Bazar-Dor helps shoppers explore current prices, category changes, and market ranges in one focused interface. Homepage and category browsing are public. Product details and profile management require authentication.

## Features

- Daily product prices with today-versus-yesterday changes
- Category navigation and category-specific product grids
- Minimum, maximum, and average market-price summaries
- Protected product details with return-to-product login flow
- Email/password, Google, and GitHub authentication through Better Auth
- Profile name and avatar updates
- Synchronized navbar session state and sign-out behavior
- Responsive desktop, tablet, and mobile UI
- Toast notifications, loading states, and lightweight route transitions

## Routes

| Route | Access | Purpose |
| --- | --- | --- |
| `/` | Public | Homepage, price highlights, and all products |
| `/category/[slug]` | Public | Category-specific product prices |
| `/product/[id]` | Authenticated | Detailed market prices for one product |
| `/login` | Public | Email, Google, and GitHub sign-in |
| `/signup` | Public | Email account creation and social sign-in |
| `/profile` | Authenticated | View and update account details |
| `/api/auth/[...all]` | Server | Better Auth API handler |

Search, cart, checkout, and about routes are not currently implemented.

## Technology Stack

- Next.js `16.4.2` App Router with Turbopack
- React `19.3.0` and TypeScript
- Tailwind CSS `4` and DaisyUI `5`
- Better Auth with the MongoDB adapter
- MongoDB
- React Toastify
- Vercel

## Project Structure

```text
src/app/             App Router pages, layouts, loading, and auth API route
src/components/      Navbar, categories, cards, forms, profile, and toast UI
src/assets/          Bazar-Dor logo and hero image
src/lib/             API client and Better Auth configuration
src/types/           Shared domain types
docs/screenshots/    Real showcase screenshots
public/              Static public assets
```

## Prerequisites

- Node.js 20 or newer recommended
- npm
- MongoDB database
- Google and/or GitHub OAuth applications for social sign-in

## Local Development

```bash
npm install
```

Copy `.env.example` to `.env.local` and provide real local values. Never commit `.env`, `.env.local`, database credentials, OAuth secrets, or Better Auth secrets.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

The required variable names are documented in [.env.example](.env.example):

```env
BAZAR_DOR_API_URL=https://openapi.programming-hero.com/api/bazardor
BETTER_AUTH_SECRET=replace-with-a-long-random-secret
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/bazar_dor
BETTER_AUTH_GOOGLE_CLIENT_ID=your-google-client-id
BETTER_AUTH_GOOGLE_CLIENT_SECRET=your-google-client-secret
BETTER_AUTH_GITHUB_CLIENT_ID=your-github-client-id
BETTER_AUTH_GITHUB_CLIENT_SECRET=your-github-client-secret
```

For Vercel Production, set `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL` to the deployed URL and add all credentials in the Vercel Environment Variables panel.

Production OAuth callback URLs:

```text
https://bazar-dor-x3dz.vercel.app/api/auth/callback/google
https://bazar-dor-x3dz.vercel.app/api/auth/callback/github
```

## Authentication and Security

Sessions are validated server-side through Better Auth and MongoDB. Client-side cached profile data is only a display optimization and is never used as authorization. Keep all secrets outside Git and configure separate local and production OAuth credentials where possible.

## Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Start the production server
npm run lint      # Run ESLint
```

## Deployment

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add Production environment variables.
4. Configure Google and GitHub callback URLs.
5. Deploy or redeploy the project.

The production build has been verified locally with `npm run build`. The lint command still reports existing React effect warnings in Hero and Navbar code.

## Showcase Sequence

Suggested LinkedIn or portfolio carousel:

1. `homepage-current.png` — introduce the daily price dashboard.
2. `category-current.png` — show category navigation.
3. `category2.png` — highlight category-level price comparison.
4. `mobile-view1.png` — demonstrate responsive behavior.
5. `signup-current.png` — show the account entry point.

Suggested title: **Bazar-Dor — A responsive daily market price companion**

Suggested summary: “A responsive Next.js market-price experience with category browsing, price comparison, protected product details, Better Auth integrations, and a mobile-friendly interface.”

## Known Limitations

- Authenticated showcase screenshots require a dedicated authorized test account.
- Search, cart, checkout, and about pages are not implemented.
- Social OAuth depends on correctly configured provider credentials, callback URLs, MongoDB, and Vercel environment variables.
- Existing lint findings remain in unrelated Hero and Navbar code.

## Future Improvements

- Add search, cart, checkout, and order workflows.
- Add automated end-to-end authentication tests.
- Add a staging environment and dedicated test account.
- Resolve remaining lint findings and add CI checks.

## Contributing

1. Create a feature branch.
2. Keep secrets out of commits.
3. Run `npx tsc --noEmit` and `npm run build` before opening a pull request.
4. Describe user-visible changes and environment requirements.

## Acknowledgments

- Next.js and Vercel
- Better Auth
- Programming Hero Bazar-Dor API
