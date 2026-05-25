import { CheckCircle } from 'lucide-react'

function Conclusiones() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Conclusiones y Recomendaciones
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">
            Reflexión Final
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            El ataque de ransomware REvil a Banco Estado en septiembre de 2020 representó uno de los incidentes de ciberseguridad más graves en la historia de Chile. El caso evidenció múltiples falencias en la seguridad informática de una institución financiera pública que maneja datos sensibles de millones de ciudadanos chilenos.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-2">
            El vector de ataque inicial fue un simple correo electrónico malicioso, lo que demuestra que la capacitación del personal es tan importante como los controles técnicos.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">
            Recomendaciones de Seguridad
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-slate-800">1. Capacitación Continua del Personal</h4>
              <p className="text-slate-600 text-sm mt-1">Implementar programas de concientización en ciberseguridad para todos los empleados, con énfasis en la detección de correos de phishing y archivos maliciosos.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-slate-800">2. Segmentación de Redes</h4>
              <p className="text-slate-600 text-sm mt-1">Implementar segmentación de redes para limitar la propagación de malware. Si la red hubiera estado segmentada, el ransomware no habría podido propagarse a todos los sistemas.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-slate-800">3. Respaldos Offline</h4>
              <p className="text-slate-600 text-sm mt-1">Mantener respaldos de datos críticos en sistemas desconectados de la red principal para permitir recuperación sin pagar rescates.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-slate-800">4. Plan de Respuesta a Incidentes</h4>
              <p className="text-slate-600 text-sm mt-1">Desarrollar y ensayar regularmente un plan de respuesta a incidentes incluyendo protocolos de comunicación con clientes, autoridades y medios.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-slate-800">5. Cumplimiento Normativo</h4>
              <p className="text-slate-600 text-sm mt-1">Fortalecer el cumplimiento de la Ley 19.628 implementando protocolos de notificación a clientes y alinearse con ISO 27001 y NIST Cybersecurity Framework.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-slate-800">6. Autenticación Multifactor</h4>
              <p className="text-slate-600 text-sm mt-1">Implementar autenticación multifactor para todos los accesos a sistemas críticos, reduciendo el riesgo de acceso no autorizado.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-slate-700 text-sm leading-relaxed font-medium">
            El caso Banco Estado demuestra que ninguna organización está exenta de sufrir ataques cibernéticos. La ciberseguridad debe ser una prioridad estratégica combinando tecnología, procesos y personas para proteger los activos de información y cumplir con el marco normativo vigente.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Conclusiones