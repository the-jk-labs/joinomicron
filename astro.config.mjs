import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  // Production URL — used for canonical links and OG/Twitter preview URLs.
  // Update this if the site is served from a different domain.
  site: "https://join.omicron.blog",
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
