## Why

En pantallas de poca altura, la bienvenida desplaza el campo de consulta fuera de la primera vista. El usuario necesita mantener la entrada disponible mientras recorre el contenido.

## What Changes

- Ajustar la aplicación a la altura visible del navegador.
- Mantener el compositor fuera del área desplazable de bienvenida y mensajes.
- Compactar la bienvenida en pantallas bajas y permitir desplazamiento independiente del panel lateral.
- Conservar consultas, sugerencias y reinicio. No se modifica la integración de IA ni el alcance del prototipo.

## Capabilities

### New Capabilities
- `chat-layout`: distribución del chat con entrada persistente y desplazamiento interno.

### Modified Capabilities
Ninguna.

## Impact

Cambios de CSS y ajuste del desplazamiento automático en JavaScript. Sin dependencias adicionales.
