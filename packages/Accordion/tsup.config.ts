import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2020",
  format: ["cjs", "esm"],
  banner: { js: '"use client";' },
});