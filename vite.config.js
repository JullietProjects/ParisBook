import { defineConfig } from "vite";

export default defineConfig({
  server: {
    // 0.0.0.0 = listen on all IPv4 interfaces (phone on same Wi‑Fi)
    host: "0.0.0.0",
  },
});
