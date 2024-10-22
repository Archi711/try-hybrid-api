import cloudflare from "@astrojs/cloudflare";
// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import { loadEnv } from "vite";
const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");
// https://astro.build/config
export default defineConfig({
	site: env.SITE_URL,
	image: {
		service: passthroughImageService(),
	},
	output: "server",
	adapter: cloudflare(),
});
