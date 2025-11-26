import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import edgeongeAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-Pietro.edgeone.app/',
  integrations: [tailwind()],
  adapter: edgeongeAdapter(),
});