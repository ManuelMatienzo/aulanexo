## Context

La aplicación usa altura mínima y márgenes amplios. La suma de bienvenida, entrada y panel lateral provoca desplazamiento de toda la página.

## Goals / Non-Goals

Mantener el campo y su botón visibles al abrir y al recorrer mensajes. No rediseñar el contenido ni añadir funcionalidades.

## Decisions

Usar una altura de 100dvh y contenedores flexibles con min-height: 0. Bienvenida y mensajes ocupan el espacio restante y tienen desplazamiento propio; el compositor no se encoge. El panel lateral se desplaza independientemente y tiene altura limitada en móvil. Reducir espacios de bienvenida en escritorio con poca altura. Desplazar únicamente el contenedor de mensajes al enviar.

## Risks / Trade-offs

En móvil, el panel lateral y la bienvenida pueden requerir desplazamiento interno para mantener disponible la entrada. Comprobar que ningún contenido quede inaccesible y que la página no desborde horizontalmente.

## Verification

Revisar apertura en 1480 x 668 y 360 x 800, conversación larga, desplazamiento y reinicio. Compilar y validar OpenSpec.
