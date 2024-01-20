/** @type {import('vite').UserConfig} */
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "useComponentSlot",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: [
        {
          format: "es",
        },
        {
          format: "cjs",
        },
      ],
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
