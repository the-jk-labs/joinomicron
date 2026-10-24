import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  // Production URL — used for canonical links and OG/Twitter preview URLs.
  // Update this if the site is served from a different domain.
  site: "https://join.omicron.blog",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
