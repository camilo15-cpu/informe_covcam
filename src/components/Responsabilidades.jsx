import { Users } from 'lucide-react'

function Responsabilidades() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Users className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Responsabilidades Legales de los Actores
        </h2>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-5">
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            Actor 1: Grupo Cibercriminal REvil
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-slate-800">Responsabilidad Penal</h4>
              <p className="text-slate-600 text-sm mt-1">Responsable por los delitos de la Ley 21.459: acceso ilícito (Art. 2), interceptación ilícita (Art. 3), ataque a la integridad de datos (Art. 4) y ataque a la integridad del sistema (Art. 5).</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-slate-800">Responsabilidad Civil</h4>
              <p className="text-slate-600 text-sm mt-1">Responsable por daños y perjuicios causados al banco y sus clientes según el Artículo 2314 del Código Civil chileno.</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            Actor 2: Banco Estado
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-slate-800">Responsabilidad Administrativa</h4>
              <p className="text-slate-600 text-sm mt-1">Como institución regulada por la CMF, tiene obligación de mantener estándares de seguridad bajo la Ley General de Bancos (DFL N°3). El ataque evidenció falencias en sus controles.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-slate-800">Responsabilidad Civil</h4>
              <p className="text-slate-600 text-sm mt-1">Responsabilidad civil frente a clientes por no implementar medidas suficientes para proteger datos personales y financieros, conforme al Artículo 23 de la Ley 19.628.</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            Actor 3: Ejecutivos y Directivos del Banco
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-slate-800">Responsabilidad Administrativa</h4>
              <p className="text-slate-600 text-sm mt-1">Responsables por no haber implementado políticas de ciberseguridad adecuadas, como capacitación del personal y controles de acceso a la red interna.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-slate-800">Responsabilidad Civil</h4>
              <p className="text-slate-600 text-sm mt-1">Pueden enfrentar responsabilidad civil por negligencia en la gestión de riesgos conforme al Artículo 2329 del Código Civil chileno.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Responsabilidades