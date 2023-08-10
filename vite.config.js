import { defineConfig, loadEnv } from 'vite';

// vite.config.js
export default defineConfig(({ command, mode }) => {
    const port = 5050;

    const seeEnv = loadEnv(mode, process.cwd())
    console.log('Estas son las variables de entorno que me trae: ', seeEnv);

    console.log('Esto se ejecuta en el momento de poner en desarrollo nuestro proyecto y trae estos dos valores: ', command, mode)

    return {
        // configuracion de vite
        // vite config
        server: {
            port
        }
    }
})