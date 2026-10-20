## 1. Diseño e implementación
- [x] 1.1 Documentar el problema y los escenarios antes de modificar la interfaz.
- [x] 1.2 Limitar la altura y separar el desplazamiento del contenido y el compositor.
- [x] 1.3 Ajustar espaciados y comportamiento de móvil.

## 2. Verificación
- [x] 2.1 Revisar tamaños de escritorio y móvil, conversación larga y reinicio.
- [x] 2.2 Compilar, validar y archivar el cambio.

## Evidencia

- Escritorio 1480 x 668: campo entre y=496 y y=545; botón hasta y=591.
- Con nueve consultas y al desplazar el historial al inicio, el campo conserva su posición.
- Móvil 360 x 800: sin desbordamiento; campo hasta y=683 y botón hasta y=729.
- La bienvenida se desplaza de forma independiente y Nueva conversación restablece la vista.
- Compilación y validación estricta correctas.

