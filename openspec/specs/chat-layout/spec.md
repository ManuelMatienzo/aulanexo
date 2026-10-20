# chat-layout Specification

## Purpose
Mantener la entrada del chat visible dentro de la ventana mientras la bienvenida, los mensajes y el panel lateral se desplazan de forma independiente.

## Requirements

### Requirement: Entrada persistente
El chat SHALL mantener completamente visibles el campo de consulta y el botón de envío dentro del viewport en escritorio de 1480 x 668 y móvil de 360 x 800.

#### Scenario: Vista inicial
- **WHEN** se abre la aplicación en cualquiera de los tamaños indicados
- **THEN** el usuario puede escribir y enviar sin desplazar la página

#### Scenario: Conversación larga
- **GIVEN** una conversación que excede la altura disponible
- **WHEN** se desplaza el historial
- **THEN** solo se desplazan los mensajes y el campo de consulta conserva su posición

#### Scenario: Reinicio
- **WHEN** el usuario inicia una nueva conversación después de enviar mensajes
- **THEN** reaparece la bienvenida y el campo permanece completamente visible

### Requirement: Contenido accesible en pantallas pequeñas
La interfaz SHALL permitir acceder al contenido que no quepa mediante desplazamiento interno sin desbordamiento horizontal de la página.

#### Scenario: Bienvenida y panel lateral
- **WHEN** la altura disponible es menor que la del contenido
- **THEN** se pueden recorrer la bienvenida y el panel lateral en sus propias áreas sin desplazar el compositor

