import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rolandpotineizner/",
  server: {
    host: true,
  },
  plugins: [react()],
})
