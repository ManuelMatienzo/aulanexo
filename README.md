# AulaNexo

Asistente académico web para consultar material de **Tópicos Avanzados de Programación** con respuestas fundamentadas en documentos de la materia.

**Estado: primer avance académico.** Se implementó un prototipo local del chat con respuestas fijas identificadas como demostración. Todavía no hay conexión a un LLM, RAG, procesamiento de archivos ni despliegue público.

## Propuesta

Los apuntes y documentos de una materia suelen estar dispersos. AulaNexo busca facilitar su consulta desde una sola interfaz y mostrar las fuentes utilizadas al responder.

El proyecto corresponde a la **opción 3: harness web especializado**. Su alcance final incluye:

| Componente | Función prevista | Estado |
| --- | --- | --- |
| Interfaz web | Conversar desde el navegador | Prototipo local |
| Instrucciones del sistema | Delimitar tema, fuentes y comportamiento | Borrador documentado |
| RAG | Recuperar fragmentos de material académico y citar su procedencia | Pendiente |
| Herramientas | Procesar documentos TXT y posteriormente PDF | Pendiente |
| Backend y LLM | Coordinar contexto, herramientas y respuestas | Pendiente |
| Hosting | Publicar la aplicación en internet | Pendiente |

## Ejecutar el avance

Requisitos: Node.js 22.12 o superior y npm.

```bash
npm ci
npm run dev
```

Abrir la dirección local que muestra Vite. La demostración funciona sin claves de API: se puede enviar una consulta, seleccionar una sugerencia o iniciar una nueva conversación.

```bash
npm run build
npm run spec:validate
npm run spec:list
```

`build` genera `dist/`. La validación de OpenSpec comprueba las especificaciones; no demuestra que las futuras funciones de IA estén implementadas.

## Desarrollo con SDD y OpenSpec

Cada incremento parte de una propuesta, requisitos con escenarios de aceptación, decisiones de diseño y tareas. La implementación se verifica frente a esos escenarios. Al finalizar, el cambio se archiva y sus requisitos se incorporan a las especificaciones vigentes.

- `openspec/config.yaml`: contexto y reglas del proyecto.
- `openspec/changes/`: cambios en curso y archivo histórico.
- `openspec/specs/`: comportamiento vigente después de archivar los cambios.
- `docs/avance-01.md`: explicación breve para presentar.
- `docs/arquitectura.md`: separación entre prototipo actual y arquitectura prevista.
- `docs/system-prompt.md`: borrador de las reglas del futuro asistente.

OpenSpec está instalado como dependencia de desarrollo, con versión exacta y archivo de bloqueo. Se puede utilizar su CLI con `npx openspec`.

Referencia del flujo: [documentación oficial de OpenSpec](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md).

## Siguiente incremento propuesto

Especificar e implementar un backend mínimo que procese un TXT de ejemplo y permita recuperar fragmentos. Después, integrar el modelo para responder con fuentes y manejar consultas sin evidencia. La elección del proveedor y del hosting se realizará en esos incrementos.
