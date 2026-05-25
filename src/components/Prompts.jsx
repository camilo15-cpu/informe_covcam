import { MessageSquare } from 'lucide-react'

function Prompts() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Bitácora de Uso de IA
        </h2>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-slate-700 text-sm font-medium">
            Herramienta utilizada: Claude (Anthropic) — Chatbot externo vía navegador web.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">
            Registro de Prompts por Sección
          </h3>
          <div className="space-y-4">

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Sección 1: Resumen Ejecutivo</h4>
              <p className="text-slate-600 text-xs bg-slate-50 p-2 rounded mb-2 italic">"Necesito redactar el resumen ejecutivo del caso Banco Estado Chile 2020, donde el banco sufrió un ataque de ransomware REvil el 7 de septiembre de 2020..."</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Aceptado:</span> Estructura general y datos principales del ataque.</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Corregido:</span> Se verificaron fechas y datos con fuentes externas.</p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Sección 2: Marco Normativo</h4>
              <p className="text-slate-600 text-xs bg-slate-50 p-2 rounded mb-2 italic">"Para el caso Banco Estado Chile 2020 (ransomware REvil), necesito identificar el marco normativo aplicable incluyendo Ley 21.459, Ley 19.628, NIST e ISO 27001..."</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Aceptado:</span> Identificación de normas y justificación.</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Corregido:</span> Se agregó la Ley General de Bancos (DFL N°3).</p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Sección 3: Tipificación de Delitos</h4>
              <p className="text-slate-600 text-xs bg-slate-50 p-2 rounded mb-2 italic">"Para el caso Banco Estado Chile 2020, tipifica los delitos según la Ley 21.459. El ataque involucró acceso no autorizado, interceptación de datos y cifrado con ransomware REvil..."</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Aceptado:</span> Tipificación de artículos 2, 3, 4 y 5.</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Corregido:</span> Se verificaron números de artículos con texto oficial.</p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Sección 4: Comparación de Marcos</h4>
              <p className="text-slate-600 text-xs bg-slate-50 p-2 rounded mb-2 italic">"Crea una tabla comparativa de Ley 19.628, GDPR y PCI-DSS para el caso Banco Estado Chile 2020 usando ejes: alcance, sanciones, notificación de brechas y jurisdicción..."</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Aceptado:</span> Estructura de la tabla y ejes de comparación.</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Corregido:</span> Se ajustaron las sanciones del GDPR con datos precisos.</p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Sección 5: Responsabilidades</h4>
              <p className="text-slate-600 text-xs bg-slate-50 p-2 rounded mb-2 italic">"Para el caso Banco Estado Chile 2020, identifica responsabilidades legales de REvil, Banco Estado y sus ejecutivos, distinguiendo responsabilidad penal, civil y administrativa..."</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Aceptado:</span> Identificación de actores y tipos de responsabilidad.</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Corregido:</span> Se agregaron citas del Código Civil (Art. 2314 y 2329).</p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Sección 6: Datos Personales</h4>
              <p className="text-slate-600 text-xs bg-slate-50 p-2 rounded mb-2 italic">"Para el caso Banco Estado Chile 2020, analiza el tratamiento de datos según Ley 19.628, distingue datos personales de sensibles y analiza los 4 derechos ARCO afectados..."</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Aceptado:</span> Clasificación de datos y análisis de derechos ARCO.</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Corregido:</span> Se precisó que datos financieros son sensibles en contexto chileno.</p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Sección 7: Conclusiones</h4>
              <p className="text-slate-600 text-xs bg-slate-50 p-2 rounded mb-2 italic">"Para el caso Banco Estado Chile 2020, redacta conclusiones con reflexión sobre el impacto y al menos 6 recomendaciones concretas de seguridad..."</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Aceptado:</span> Estructura de recomendaciones y reflexión final.</p>
              <p className="text-slate-600 text-sm"><span className="font-medium">Corregido:</span> Se agregó recomendación de autenticación multifactor.</p>
            </div>

          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="font-bold text-slate-800 mb-2">Reflexión Final</h3>
          <p className="text-slate-600 text-sm leading-relaxed">El uso de Claude como chatbot externo fue útil para estructurar el contenido de cada sección. A diferencia de un agente integrado como GitHub Copilot, el chatbot externo no tiene acceso al proyecto, por lo que fue necesario proporcionar todo el contexto en cada prompt. La calidad del resultado dependió directamente de la especificidad del prompt: los prompts que mencionaban el nombre del caso, el año, los actores y las normas específicas obtuvieron respuestas más precisas.</p>
        </div>
      </div>
    </div>
  )
}

export default Prompts