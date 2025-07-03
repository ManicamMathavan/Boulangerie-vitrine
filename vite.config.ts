import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,webp,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
              }
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 an
              },
            },
          },
        ]
      },
      manifest: {
        name: 'Boulangerie Dego',
        short_name: 'Boulangerie Dego',
        description: 'Boulangerie artisanale depuis 1954',
        theme_color: '#FFA500',
        background_color: '#E8E8E8',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  build: {
    // Optimisations pour les performances
    rollupOptions: {
      output: {
        // Séparer les chunks pour un meilleur caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animation: ['framer-motion'],
          social: ['react-social-icons']
        }
      }
    },
    // Compression et optimisation des assets
    assetsInlineLimit: 8192, // Augmenté pour inline plus de petites images
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Retire les console.log en production
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    sourcemap: false, // Désactive les sourcemaps en production
    reportCompressedSize: false // Améliore la vitesse de build
  },
  // Optimisations pour le développement
  server: {
    host: true,
    port: 5173
  },
  // Preload des modules
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-social-icons']
  }
})
