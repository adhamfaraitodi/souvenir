import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ["resources/js/app.jsx", "resources/css/app.css"],
            refresh: true,
        }),
    ],
    server: {
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
    },
});
