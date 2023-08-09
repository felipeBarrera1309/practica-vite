import { defineConfig } from 'vite';

// vite.config.js
export default defineConfig(({ command, mode }) => {
    const port = 8080;

    console.log('Esto se ejecuta en el momento de poner en desarrollo nuestro proyecto y trae estos dos valores: ', command, mode)

    return {
        server: {
            port
        }
    }
})