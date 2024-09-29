import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  if (!env.VITE_HOST) {
    throw new Error("VITE_HOST is required");
  }
  if (!env.VITE_PORT) {
    throw new Error("VITE_PORT is required");
  }
  if (isNaN(parseInt(env.VITE_PORT))) {
    throw new Error("VITE_PORT must be a number");
  }

  return {
    base: "/os-drill/",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      strictPort: true,
    },
    server: {
      port: parseInt(env.VITE_PORT),
      strictPort: true,
      host: true,
      origin: `http://0.0.0.0:${env.VITE_PORT}`,
    },
  };
});
