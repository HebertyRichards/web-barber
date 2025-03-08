import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    historyApiFallback: true,
    proxy: {
      "/agendar": "http://localhost:3000",
      "/cancelar-agendamento": "http://localhost:8080",
    },
  },
});
