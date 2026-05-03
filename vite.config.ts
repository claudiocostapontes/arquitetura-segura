import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        artigos: resolve(__dirname, 'artigos.html'),
        sobre: resolve(__dirname, 'sobre.html'),
        trilhas: resolve(__dirname, 'trilhas.html'),
        ferramentas: resolve(__dirname, 'ferramentas.html'),
        // Adicione esta linha abaixo para a nova página funcionar no deploy
        cve: resolve(__dirname, 'cve-watch.html') 
      }
    }
  }
})