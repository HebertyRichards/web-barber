import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    historyApiFallback: true,
    proxy: {
      // Redireciona requisições feitas para /agendar para o backend
      "/agendar": "http://localhost:3000",
      "/cancelar-agendamento": "http://localhost:3000",
      // Se o backend utilizar outras rotas, adicione-as aqui
    },
  },
});
