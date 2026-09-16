import { defineConfig } from "vite";

export default defineConfig({
  // Project Pages URL: https://jullietprojects.github.io/ParisBook/
  base: process.env.GITHUB_ACTIONS ? "/ParisBook/" : "/",
  server: {
    // 0.0.0.0 = listen on all IPv4 interfaces (phone on same Wi‑Fi)
    host: "0.0.0.0",
  },
});
