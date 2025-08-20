# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/216cd712-d515-4f1e-a2be-fd5801009726

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/216cd712-d515-4f1e-a2be-fd5801009726) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/216cd712-d515-4f1e-a2be-fd5801009726) and click on Share -> Publish.

### Deploying to Cloudflare Pages

This project can also be deployed to Cloudflare Pages:

1. **Connect your GitHub repository** to Cloudflare Pages
2. **Configure build settings**:
   - **Framework preset**: None/Other
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Node.js version**: `20` (or use .nvmrc file)
3. **Environment variables** (add these in Cloudflare Pages settings):
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
   SKIP_PRERENDER=true
   ```
4. **Note**: Set `SKIP_PRERENDER=true` to skip Puppeteer prerendering in CI, as it may fail in Cloudflare's build environment

The project includes CI-safe Puppeteer settings, but you can disable prerendering entirely for Cloudflare Pages deployment by setting the environment variable above.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
