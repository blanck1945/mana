import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Archivo de entrada
  format: ["esm", "cjs"], // Formatos: ESModules y CommonJS
  dts: true, // Genera archivos de declaración (.d.ts)
  sourcemap: false, // Incluye mapas de fuente
  clean: true, // Limpia la carpeta "dist" antes de empaquetar
  splitting: true, // Habilita el "splitting" de dependencias
  treeshake: true, // Elimina código no usado
  minify: true, // Minificar archivos
});
