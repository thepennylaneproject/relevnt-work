/// <reference types="vite/client" />

/**
 * This file provides TypeScript definitions for Vite's special import.meta.env object.
 * 
 * 🎓 WHAT YOU'RE LEARNING:
 * - TypeScript needs to know the "shape" of every object you use
 * - Vite provides import.meta.env at runtime, but TypeScript doesn't know about it by default
 * - This reference directive tells TypeScript to load Vite's type definitions
 * 
 * You can also extend the ImportMetaEnv interface to add your own custom env vars:
 */

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  // Add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
