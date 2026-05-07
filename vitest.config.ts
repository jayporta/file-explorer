import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setupTests.ts",
    include: ["app/**/*.test.{ts,tsx,js,jsx}", "app/**/*.spec.{ts,tsx,js,jsx}"],
  },
});
