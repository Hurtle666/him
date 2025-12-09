import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {  // Use the mode param for NODE_ENV equivalent
  const isProduction = mode === 'production';
  return {
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || (isProduction ? '/him' : '/'),  // Example: '/him' only in prod
  };
});