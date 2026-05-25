import { Scale } from 'lucide-react'

function Marco() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Scale className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Marco Normativo
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">
            Normas Nacionales
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-slate-800">Ley 21.459 — Delitos Informáticos</h4>
              <p className="text-slate-600 text-sm mt-1">Establece los delitos informáticos en Chile. Aplica porque el ataque involucró acceso no autorizado, interceptación de datos y sabotaje informático tipificados en esta ley.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-slate-800">Ley 19.628 — Protección de la Vida Privada</h4>
              <p className="text-slate-600 text-sm mt-1">Regula el tratamiento de datos personales. Aplica porque Banco Estado almacena datos personales y financieros de millones de clientes que pudieron verse comprometidos.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-slate-800">Ley 20.009 — Uso Fraudulento de Tarjetas</h4>
              <p className="text-slate-600 text-sm mt-1">Regula la responsabilidad de los bancos frente al uso fraudulento. Aplica porque el ataque afectó los sistemas financieros poniendo en riesgo las operaciones con tarjetas.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-slate-800">Ley General de Bancos (DFL N°3)</h4>
              <p className="text-slate-600 text-sm mt-1">Regula el funcionamiento de instituciones bancarias. Aplica porque Banco Estado está obligado a mantener continuidad operacional y seguridad de sus sistemas.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">
            Normas Internacionales
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-semibold text-slate-800">NIST Cybersecurity Framework</h4>
              <p className="text-slate-600 text-sm mt-1">Marco de gestión de riesgos de ciberseguridad. Aplica porque el ataque evidenció falencias en las funciones de Detectar y Responder del framework.</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-semibold text-slate-800">ISO/IEC 27001 — Gestión de Seguridad</h4>
              <p className="text-slate-600 text-sm mt-1">Estándar internacional para seguridad de la información. Aplica porque el incidente reveló vulnerabilidades en controles que esta norma exige.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marco