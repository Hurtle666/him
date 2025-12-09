import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',  // Use your env var if set, else root '/'. Remove VITE_BASE_PATH if not needed.
});