## 1. Especificación

- [x] 1.1 Documentar problema, alcance y arquitectura prevista.
- [x] 1.2 Escribir propuesta, diseño y requisitos con escenarios antes de implementar.

## 2. Implementación

- [x] 2.1 Crear interfaz adaptable con identidad y estado de demostración.
- [x] 2.2 Implementar consultas locales, sugerencias, validaciones y reinicio.
- [x] 2.3 Mostrar documentos pendientes y documentar cómo ejecutar el proyecto.

## 3. Verificación

- [x] 3.1 Compilar el frontend y validar las especificaciones en modo estricto.
- [x] 3.2 Revisar los escenarios de interacción y distribución móvil en navegador.
- [x] 3.3 Registrar resultados y preparar el archivo del cambio con la CLI.

## Evidencia

- `npm run build`: compilación correcta.
- `npm run spec:validate`: validación estricta correcta.
- Navegador: tres sugerencias, consulta propia, texto HTML literal sin elementos inyectados, rechazo de espacios y de 1001 caracteres, reinicio y salto de línea con Mayús + Enter.
- Teclado: foco visible al recorrer los controles.
- Vista de 360 × 800: sin desbordamiento horizontal (ancho del documento: 345 px; viewport: 360 px).
- Consola del navegador: sin advertencias ni errores capturados.
- Captura del prototipo: `docs/images/avance-01.png`.
