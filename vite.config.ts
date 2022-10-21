import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/joskapotin_14_27052022/",
  server: {
    host: true,
  },
  plugins: [react()],
})
