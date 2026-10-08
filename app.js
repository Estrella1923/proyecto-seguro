// app.js

const API_SECRET_KEY = process.env.API_SECRET_KEY;

if (!API_SECRET_KEY) {
    console.error("ERROR: No se encontró la variable API_SECRET_KEY");
    process.exit(1);
}

console.log("Iniciando aplicación...");
console.log("La clave API fue cargada mediante una variable de entorno.");
