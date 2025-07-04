import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    site: 'https://diegomantegazza.me',
    output: 'static',
    adapter: cloudflare(),
    integrations: [sitemap({
        lastmod: new Date(),
        filter: (page) => 
          page !== 'https://diegomantegazza.me/privacy/' &&
          page !== 'https://diegomantegazza.me/sitemap/' &&
          page !== 'https://diegomantegazza.me/success/',
      })
    ],
    vite: {
        plugins: [tailwindcss()],
    }
});
