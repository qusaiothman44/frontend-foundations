import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/frontend-foundations/week%204/Todo%20app%20react/todo-react/",
});
