# chat-prototype Specification

## Purpose
Permitir explorar el flujo de consulta de AulaNexo mediante una interfaz local en español, con respuestas fijas claramente identificadas como demostración, antes de integrar el modelo, la recuperación de contexto y las herramientas.

## Requirements

### Requirement: Identidad y estado de demostración
La interfaz SHALL mostrar AulaNexo, la materia Tópicos Avanzados de Programación y un indicador persistente de modo demostración.

#### Scenario: Apertura inicial
- **WHEN** el usuario abre la aplicación
- **THEN** ve el nombre, la materia y un aviso que explica que aún no hay IA ni consulta real de documentos

### Requirement: Envío local de consultas
La interfaz SHALL aceptar consultas de entre 1 y 1000 caracteres después de eliminar espacios iniciales y finales, mostrar el texto como contenido literal y generar una respuesta fija etiquetada como demostración.

#### Scenario: Consulta válida
- **WHEN** el usuario envía una consulta no vacía de hasta 1000 caracteres
- **THEN** aparecen su consulta y una respuesta local identificada como demostración, sin llamadas a un modelo

#### Scenario: Consulta vacía
- **WHEN** el usuario intenta enviar únicamente espacios o una entrada vacía
- **THEN** no se añade ningún mensaje

#### Scenario: Contenido con marcado
- **WHEN** el usuario envía texto que contiene etiquetas HTML
- **THEN** las etiquetas aparecen como texto y no se ejecutan ni crean elementos HTML

#### Scenario: Límite de longitud
- **WHEN** la consulta supera los 1000 caracteres al intentar enviarla
- **THEN** se rechaza el envío y se muestra una indicación del límite

### Requirement: Preguntas sugeridas
La interfaz SHALL ofrecer preguntas sugeridas sobre harness, alcance y fuentes.

#### Scenario: Selección de sugerencia
- **WHEN** el usuario selecciona una pregunta sugerida
- **THEN** se añade esa consulta y se muestra su explicación fija con etiqueta de demostración

### Requirement: Reinicio de conversación
La interfaz SHALL ofrecer una acción de nueva conversación que elimine los mensajes y restablezca la vista inicial sin recargar la página.

#### Scenario: Nueva conversación
- **GIVEN** una conversación con mensajes
- **WHEN** el usuario pulsa Nueva conversación
- **THEN** desaparecen los mensajes anteriores, se limpia la entrada y vuelven a mostrarse las sugerencias iniciales

### Requirement: Documentos pendientes
La interfaz SHALL indicar que el procesamiento de documentos todavía está pendiente y no ofrecer una carga operativa.

#### Scenario: Consulta del área de documentos
- **WHEN** el usuario revisa el área de documentos
- **THEN** encuentra una explicación de la próxima etapa y un control de carga deshabilitado

### Requirement: Accesibilidad y adaptación
La interfaz SHALL permitir operar los controles disponibles con teclado, identificar la entrada con una etiqueta y adaptarse a pantallas de 360 píxeles sin desplazamiento horizontal de la página.

#### Scenario: Navegación con teclado
- **WHEN** el usuario recorre la interfaz con Tab
- **THEN** puede alcanzar los controles disponibles y ver el foco

#### Scenario: Pantalla móvil
- **WHEN** se abre la interfaz en una pantalla de 360 píxeles de ancho
- **THEN** la entrada y los mensajes permanecen utilizables y no generan desplazamiento horizontal de la página
