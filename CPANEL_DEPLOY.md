# Redorch cPanel Node.js Deploy

This package is a Next.js standalone production build prepared for CloudLinux/cPanel Node.js Selector.

Do not upload a real `node_modules` folder to the application root. This package keeps production dependencies inside `standalone/node_modules` so the application root stays compatible with CloudLinux.

## cPanel Settings

- Recommended Node.js version: `20.x`
- Application startup file: `app.js`
- Node environment: `production`
- Start command, if cPanel asks: `node app.js`

The startup file forces the app to bind to `0.0.0.0`, because some cPanel servers expose a `HOSTNAME` environment variable that can make Next.js crash with `Incomplete response received from application`.

If `22.x` shows an npm path error like `/opt/alt/alt-nodejs22/root/usr/bin/npm: No such file or directory`, the hosting server's CloudLinux Node 22 package is incomplete. Select Node.js `20.x`, recreate the app virtual environment, then run `NPM Install`.

## Upload Order

1. Create the Node.js app in cPanel first.
2. Select Node.js `20.x`.
3. Upload and extract this zip into the application root.
4. Add the environment variables below.
5. Restart the Node.js app.

`NPM Install` is not required for this package because the standalone runtime is included. If your cPanel screen requires it, running it is okay, but do not upload a root `node_modules` folder yourself.

If cPanel shows an error about `node_modules`, delete any uploaded `node_modules` folder/file from the application root and run `NPM Install` again from the cPanel Node.js app screen.

## If Only a Big Image Shows

## If the Website Looks Unstyled

If the website opens but looks like plain HTML, the CSS files under `/_next/static/...` are not loading. Check these:

- The zip contents must be extracted directly inside the Node.js application root.
- Do not extract the zip into an extra nested folder.
- Application root must be the folder containing `app.js`, `server.js`, `package.json`, `.next`, `_next`, and `public`.
- Application root must not be the `public` folder.
- Make sure hidden folders are extracted. The folder `.next/static` must exist.
- The folder `_next/static` must also exist in the application root. This package includes it for cPanel/Apache static asset compatibility.
- Visit a CSS file under `https://yourdomain.com/_next/static/css/...`. It should show CSS text, not a 404 page and not an image.
- If your hosting panel has a separate document root, it should point to the same Node app route/proxy, not only to `/public`.

Correct app root should look like:

```text
app.js
package.json
standalone/
_next/
public/
```

## Environment Variables

Set these in cPanel before starting the app:

```env
ZEPTOMAIL_API_KEY=your_zeptomail_api_key
ZEPTOMAIL_FROM_EMAIL=noreply@imabdullah.com
ZEPTOMAIL_FROM_NAME=Redorch Website
CONTACT_TO_EMAILS=nazmul@redorch.com,ab@redorch.com
NODE_ENV=production
```

After changing environment variables, restart the Node.js app.
