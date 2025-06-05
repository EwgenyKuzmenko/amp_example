import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use a relative base path so that the app works when served from a subdirectory
  base: './',
});
