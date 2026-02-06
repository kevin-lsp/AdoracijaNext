# Netlify Deployment Guide - Adoramus Nextjs

This guide will help you deploy your Catholic Eucharistic Adoration website to Netlify using the Netlify CLI.

## Prerequisites

- Node.js 20.9 or later installed
- A Netlify account (free at https://netlify.com)
- Terminal/Command Prompt access

## Step-by-Step Deployment

### 1. Install Dependencies

First, make sure all project dependencies are installed, including the new Netlify plugin:

```bash
npm install
```

This installs `@netlify/plugin-nextjs` which enables API routes and server-side rendering on Netlify.

### 2. Install Netlify CLI

Install the Netlify CLI globally on your computer (only needed once):

```bash
npm install -g netlify-cli
```

### 3. Login to Netlify

Open your browser and authenticate with Netlify:

```bash
netlify login
```

A browser window will open asking you to authorize the CLI. Click "Authorize" to continue.

### 4. Build Your Project

Create a production build of your Next.js site:

```bash
npm run build
```

This generates the `.next` folder with optimized production files.

### 5. Initialize Netlify Site (First Time Only)

Set up your site on Netlify:

```bash
netlify init
```

When prompted, choose:
- **"Create & configure a new site"**
- **Team**: Select your personal account or team
- **Site name**: Enter a custom name like `adoramus-adoration` (or press Enter for a random name)
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### 6. Deploy to Production

Deploy your site to Netlify:

```bash
netlify deploy --prod
```

Netlify will:
- Upload your files
- Run the build process
- Deploy to production
- Provide your live URL

### 7. Get Your Live URL

After deployment completes, you'll see output like:

```
✔ Deploy is live!

Website URL:  https://adoramus-xyz.netlify.app
```

**Copy this URL and share it with your friend!** 🎉

## Future Updates

To deploy updates to your site:

1. Make your code changes
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy to production:
   ```bash
   netlify deploy --prod
   ```

That's it! Your changes will be live in a few minutes.

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy to production
netlify deploy --prod

# View site status
netlify status

# Open site in browser
netlify open:site

# View deployment logs
netlify logs
```

## Troubleshooting

### "Command not found: netlify"
- Run: `npm install -g netlify-cli`
- On Windows, you may need to restart your terminal after installation

### "Build failed"
- Check that all dependencies are installed: `npm install`
- Try building locally first: `npm run build`
- Check the error message for missing packages

### "API routes not working"
- Ensure `@netlify/plugin-nextjs` is in package.json (should already be there)
- Check that `netlify.toml` is in your project root
- The plugin is automatically activated during deployment

### "Images not loading"
- Images should be in the `public/images/` folder
- Use paths like `/images/your-image.jpg` (without "public" in the path)
- Next.js automatically serves files from the `public` directory

## Configuration Files

Your project includes these Netlify configuration files:

- **`netlify.toml`**: Build settings, redirects, headers, and plugin configuration
- **`.nvmrc`**: Specifies Node.js version (20.9)
- **`package.json`**: Includes `@netlify/plugin-nextjs` in devDependencies

## Features Enabled

✅ **Server-side rendering (SSR)**
✅ **API routes** (your signup form will work)
✅ **Image optimization**
✅ **Automatic redirects**
✅ **Security headers**
✅ **Long-term caching for images**

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/frameworks/next-js/
- Support: https://answers.netlify.com

---

**Congratulations!** Your site is now live and ready to share. 🙏✨
