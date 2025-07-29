import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@deno/svelte-adapter";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csrf: {
      checkOrigin: false,
    },
  },
};

export default config;
