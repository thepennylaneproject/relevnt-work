import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// This ensures environment variables in .env/.env.local are always loaded,
// even if Vite misses them (especially on Netlify Dev)
export default ({ mode }) => {
  // Load all env files in the project root
  const env = loadEnv(mode, process.cwd(), '')

  // Optional: sanity check
  console.log('✅ Loaded ENV for mode:', mode)
  console.log('🌐 SUPABASE URL:', env.VITE_SUPABASE_URL)

  return defineConfig({
    plugins: [react()],

    server: {
      port: 5174,
      open: true,
    },

    define: {
      // Makes process.env.* available in your code
      'process.env': env,
    },

    // Optional: build optimizations
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
  })
}
