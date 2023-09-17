import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    reporter: "json",
    outputFile: "./result.json",
  },
});
