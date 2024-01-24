import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  site: "https://astro-og.vercel.app/",
  output: "server",
  adapter: vercel(),
  integrations: [react()],
});
