import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // Raise chunk warning limit slightly
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor chunks so browser can cache them separately
        manualChunks: {
          'react-vendor':   ['react', 'react-dom'],
          'motion-vendor':  ['framer-motion'],
          'icons-fa':       ['react-icons/fa'],
          'icons-si':       ['react-icons/si'],
          'icons-hi':       ['react-icons/hi'],
        },
      },
    },

    // Minify with esbuild (default, fastest)
    minify: 'esbuild',

    // Generate source maps only in dev
    sourcemap: false,

    // Inline assets smaller than 4kb
    assetsInlineLimit: 4096,

    // Target modern browsers — smaller output
    target: 'es2020',
  },

  // Pre-bundle deps for faster cold starts in dev
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
