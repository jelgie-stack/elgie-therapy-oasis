import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        // Optimize for better SEO and loading
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    },
    // Ensure XML files are copied to dist
    assetsInclude: ['**/*.xml']
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'postbuild-prerender',
      apply: 'build' as const,
      async closeBundle() {
        try {
          const { exec } = await import('node:child_process');
          await new Promise((resolve, reject) => {
            const child = exec('node ./scripts/prerender.js');
            child.stdout?.pipe(process.stdout);
            child.stderr?.pipe(process.stderr);
            child.on('exit', (code) => {
              if (code === 0) resolve(null);
              else reject(new Error(`prerender exited with code ${code}`));
            });
          });
        } catch (err) {
          console.error('Prerender step failed:', err);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
