import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@deno/svelte-adapter";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    experimental: {
      async: true,
    },
  },
  kit: {
    adapter: adapter(),
    csrf: {
      checkOrigin: false,
    },
    experimental: {
      remoteFunctions: true,
    },
  },
};

export default config;
