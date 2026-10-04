This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Verified Changes (verified-changes/0.1)

The site publishes its changelog under the [Verified Changes protocol](https://databutler.dev/protocol):

- `/.well-known/changes.json` — discovery document (areas, cadence, endpoints)
- `/changes.json` — changes document (static; consumers filter `since` client-side)

Source of truth is `data/changes/changelog.json` (append-only entries; never edit or delete one, correct with a new entry) plus `data/changes/publisher.json` (discovery metadata). Run `npm run changes` to regenerate the two files in `public/`; `npm test` (also run before `next build`) validates both against the vendored schemas in `vendor/verified-changes/` and fails if `public/` is stale.

Currently zero entries: the engines use no external data, and the drawdown return assumptions are fixed model choices with no official source, unchanged since 2026-08-30. The changes document carries a `note` saying so.
