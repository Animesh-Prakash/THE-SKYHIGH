// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src', // This allows you to use `@` to refer to the src directory
        },
    },
});
