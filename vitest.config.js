import { defineConfig } from "vite";

export default defineConfig({
  test: {
    global: true,
    environment: "jsdom",
  },
});
