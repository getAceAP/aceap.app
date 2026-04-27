import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    dyadComponentTagger(), 
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'AceAP.png'],
      manifest: {
        name: 'AceAP - AP Revision Tool',
        short_name: 'AceAP',
        description: 'Master AP subjects with active recall and randomized testing.',
        theme_color: '#8b5cf6',
        icons: [
          {
            src: 'AceAP.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'AceAP.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'AceAP.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));