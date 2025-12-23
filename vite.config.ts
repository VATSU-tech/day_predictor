import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'apple-touch-icon.png'
      ],
      manifest: {
        name: "Day predictor",
        short_name: "DP",
        background_color: "white",
        theme_color: "white",
        orientation: "portrait-primary",
        start_url: "/index.html",
        display: "standalone",
        description: "Application pour predire de jour qui suit celui selectionner",
        icons: [
          {
            src: "/media/icons/dice_dark_32x32.png",
            type: "image/png",
            sizes: "32x32"
          },
          {
            src: "/media/icons/dice_dark_16x16.png",
            type: "image/png",
            sizes: "16x16"
          },
          {
            src: "/media/icons/dice_dark_48x48.png",
            type: "image/png",
            sizes: "48x48"
          },
          {
            src: "/media/icons/dice_dark_64x64.png",
            type: "image/png",
            sizes: "64x64"
          },
          {
            src: "/media/icons/dice_dark_96x96.png",
            type: "image/png",
            sizes: "96x96"
          },
          {
            src: "/media/icons/dice_dark_128x128.png",
            type: "image/png",
            sizes: "128x128"
          },
          {
            src: "/media/icons/dice_dark_256x256.png",
            type: "image/png",
            sizes: "256x256"
          },
          {
            src: "/media/icons/dice_dark_512x512.png",
            type: "image/png",
            sizes: "512x512"
          }
        ],
        prefer_related_applications: true,
        related_applications: [
          {
            platform: "play",
            id: "com.google.samples.apps.iosched"
          }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache'
            }
          },
          {
            urlPattern: ({ request }) =>
              request.destination === 'script' || request.destination === 'style',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'asset-cache'
            }
          },
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 jours
              }
            }
          }
        ]
      }
    })
  ]
});
