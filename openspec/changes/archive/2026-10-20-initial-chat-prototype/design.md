## Context

El proyecto corresponde a un harness web académico. Este incremento sirve como avance inicial, previo a la integración de IA y RAG. El repositorio no contiene implementación previa.

## Goals / Non-Goals

**Objetivos:** interfaz legible en español; interacción local; límites visibles; documentación SDD; ejecución reproducible.

**Fuera del incremento:** LLM, backend, carga real de archivos, RAG, cuentas y publicación en hosting.

## Decisions

1. Usar HTML, CSS y módulos JavaScript con Vite. Es suficiente para validar el flujo inicial y mantiene pocas dependencias.
2. Guardar la conversación en el DOM y en memoria de la página, sin persistencia ni solicitudes externas.
3. Usar respuestas fijas según sugerencias conocidas y un aviso genérico para otras consultas. Cada respuesta se etiqueta como demostración.
4. Insertar contenido del usuario mediante `textContent`, nunca como HTML.
5. Limitar las consultas a 1000 caracteres y bloquear mensajes vacíos. El límite se comprueba también al enviar.
6. Mostrar el procesamiento de documentos como pendiente mediante un control deshabilitado y texto explicativo.
7. Crear primero los artefactos OpenSpec, implementar después y archivar únicamente tras verificar los escenarios.

## Risks / Trade-offs

- Las respuestas fijas podrían confundirse con IA: mostrar un indicador persistente y una etiqueta en cada respuesta.
- Una interfaz estática no demuestra un harness funcional completo: distinguir el prototipo actual de los componentes futuros en la documentación.
- El proveedor y la persistencia siguen abiertos: resolverlos mediante nuevas propuestas, sin aumentar este incremento.

## Verification

Compilar con Vite y validar OpenSpec en modo estricto. Revisar en navegador consultas sugeridas y propias, entrada vacía, límite de longitud, texto con marcado, reinicio y distribución móvil. Registrar evidencia y limitaciones en las tareas.
