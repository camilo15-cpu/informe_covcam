# Bitácora de Uso de IA — Caso Banco Estado Chile 2020

## Herramienta Utilizada
Claude (Anthropic) — Chatbot externo vía navegador web.

## Registro de Prompts

### Sección 1: Resumen Ejecutivo
**Prompt utilizado:**
"Necesito redactar el resumen ejecutivo del caso Banco Estado Chile 2020, donde el banco sufrió un ataque de ransomware REvil el 7 de septiembre de 2020. El resumen debe incluir qué pasó, cuándo, quiénes participaron, cómo ocurrió y el impacto del ataque."

**Qué se aceptó:** La estructura general del resumen y los datos principales del ataque.
**Qué se corrigió:** Se verificaron las fechas y datos con fuentes externas para confirmar su exactitud.

### Sección 2: Marco Normativo
**Prompt utilizado:**
"Para el caso Banco Estado Chile 2020 (ransomware REvil), necesito identificar el marco normativo aplicable. Incluye normas nacionales chilenas como la Ley 21.459 y Ley 19.628, y normas internacionales como NIST y ISO 27001. Justifica la aplicabilidad de cada norma con hechos concretos del caso."

**Qué se aceptó:** La identificación de las normas y su justificación.
**Qué se corrigió:** Se agregó la Ley General de Bancos (DFL N°3) que no fue incluida inicialmente.

### Sección 3: Tipificación de Delitos
**Prompt utilizado:**
"Para el caso Banco Estado Chile 2020, necesito tipificar los delitos según la Ley 21.459 de Chile. El ataque involucró acceso no autorizado mediante correo malicioso, interceptación de datos, cifrado de archivos con ransomware REvil y paralización de sistemas. Cita los artículos específicos y mapea cada acción del atacante."

**Qué se aceptó:** La tipificación de los artículos 2, 3, 4 y 5 de la Ley 21.459.
**Qué se corrigió:** Se verificaron los números de artículos con el texto oficial de la ley.

### Sección 4: Comparación de Marcos
**Prompt utilizado:**
"Crea una tabla comparativa de marcos regulatorios para el caso Banco Estado Chile 2020. Compara Ley 19.628, GDPR y PCI-DSS usando los ejes: alcance, sujeto regulado, sanciones, notificación de brechas y jurisdicción. Incluye aplicabilidad al caso."

**Qué se aceptó:** La estructura de la tabla y los ejes de comparación.
**Qué se corrigió:** Se ajustaron las sanciones del GDPR con datos más precisos.

### Sección 5: Responsabilidades
**Prompt utilizado:**
"Para el caso Banco Estado Chile 2020, identifica las responsabilidades legales de 3 actores: el grupo REvil, Banco Estado y sus ejecutivos. Para cada actor distingue responsabilidad penal, civil y administrativa, citando artículos del Código Civil y leyes chilenas aplicables."

**Qué se aceptó:** La identificación de actores y tipos de responsabilidad.
**Qué se corrigió:** Se agregaron las citas específicas del Código Civil (Art. 2314 y 2329).

### Sección 6: Datos Personales
**Prompt utilizado:**
"Para el caso Banco Estado Chile 2020, analiza el tratamiento de datos personales según la Ley 19.628. Lista los tipos de datos comprometidos, distingue datos personales de sensibles, y analiza los 4 derechos ARCO afectados citando el artículo correspondiente de la ley."

**Qué se aceptó:** La clasificación de datos y análisis de derechos ARCO.
**Qué se corrigió:** Se precisó que los datos financieros son considerados sensibles en el contexto chileno.

### Sección 7: Conclusiones
**Prompt utilizado:**
"Para el caso Banco Estado Chile 2020, redacta las conclusiones del análisis legal incluyendo una reflexión sobre el impacto del ataque y al menos 6 recomendaciones concretas de seguridad para evitar futuros incidentes similares."

**Qué se aceptó:** La estructura de recomendaciones y reflexión final.
**Qué se corrigió:** Se agregó la recomendación de autenticación multifactor que no estaba incluida inicialmente.

## Reflexión Final sobre el Uso de IA

El uso de Claude como chatbot externo fue útil para estructurar el contenido de cada sección del informe. A diferencia de un agente integrado como GitHub Copilot, el chatbot externo no tiene acceso al proyecto, por lo que fue necesario proporcionar todo el contexto en cada prompt.

La principal ventaja fue la rapidez para generar estructuras de análisis legal. La principal limitación fue la necesidad de verificar cada dato con fuentes externas, ya que la IA puede cometer errores en fechas, números de artículos y detalles específicos del caso.

La calidad del resultado dependió directamente de la especificidad del prompt: los prompts que mencionaban el nombre del caso, el año, los actores y las normas específicas obtuvieron respuestas más precisas que los prompts genéricos.