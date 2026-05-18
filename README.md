# Redorch Website Frontend

Next.js frontend redesign for Redorch Technology using shadcn-style components, Tailwind CSS, static export, and local image assets.

## Commands

```bash
npm install
npm run dev
npm run build
```

## cPanel Hosting

This project is configured with `output: "export"`. After `npm run build`, upload the contents of the `out` folder to the public web root in cPanel.

The exported frontend includes the original public slugs from `redorch.com`, including:

- `/`
- `/about/`
- `/services/`
- `/services/web-application-development/`
- `/services/mobile-application-development/`
- `/services/business-solution/`
- `/services/game-design-and-development/`
- `/services/strategic-marketing-plan-development/`
- `/projects/`
- `/case-studies/`
- `/case-study/*/`
- `/blog/`
- `/hello-world/`
- `/contact/`
- `/privacy-policy-2/`
- `/terms-of-service/`

## CMS Phase Notes

The frontend content is centralized in `lib/site-data.ts`. During the backend phase, these arrays can be replaced with data from a Node.js API and MySQL tables for pages, services, blog posts, portfolio items, and SEO metadata.
