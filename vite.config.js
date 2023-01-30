import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  vite: {
    define: {
      "process.env.VITE_SHAZAM_CORE_RAPID_API_KEY": JSON.stringify(
        process.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      ),
      "process.env.VITE_GEO_API_KEY": JSON.stringify(
        process.env.VITE_GEO_API_KEY
      ),
    },
  },
  plugins: [react()],
});
