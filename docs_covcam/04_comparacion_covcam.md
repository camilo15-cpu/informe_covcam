# Comparación de Marcos Regulatorios — Caso Banco Estado Chile 2020

## Tabla Comparativa

| Eje de Comparación | Ley 19.628 (Chile) | GDPR (Europa) | PCI-DSS (Internacional) |
|---|---|---|---|
| **Alcance** | Datos personales de personas naturales en Chile | Datos personales de ciudadanos de la UE | Datos de tarjetas de pago a nivel mundial |
| **Sujeto Regulado** | Organismos públicos y privados que traten datos | Toda organización que trate datos de ciudadanos UE | Organizaciones que procesen pagos con tarjeta |
| **Sanciones** | Multas y responsabilidad civil | Multas de hasta 20 millones de euros o 4% facturación | Multas, suspensión del servicio de tarjetas |
| **Notificación de Brechas** | No establece plazo específico | Obligatoria en 72 horas | Notificación inmediata a las marcas de tarjetas |
| **Jurisdicción** | Chile | Unión Europea | Internacional |

## Aplicabilidad al Caso

### Ley 19.628
Aplica directamente al caso ya que Banco Estado es una institución chilena que almacena datos personales de millones de clientes. El ataque pudo haber comprometido esos datos sin que existiera una notificación formal a los afectados.

### GDPR
Si Banco Estado operara en Europa o tuviera clientes europeos, estaría obligado a notificar la brecha en 72 horas y enfrentaría multas millonarias. Este marco sirve como referencia para evaluar las falencias de la normativa chilena vigente.

### PCI-DSS
Como institución financiera que procesa pagos con tarjeta, Banco Estado debe cumplir con PCI-DSS. El ataque ransomware pone en riesgo directo el cumplimiento de este estándar, ya que los sistemas de procesamiento de pagos fueron afectados.