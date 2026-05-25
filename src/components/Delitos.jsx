import { AlertTriangle } from 'lucide-react'

function Delitos() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Tipificación de Delitos — Ley 21.459
        </h2>
      </div>

      <div className="space-y-4">
        <div className="border-l-4 border-red-500 pl-4 py-2">
          <h3 className="font-semibold text-slate-800">Artículo 2 — Acceso Ilícito</h3>
          <p className="text-slate-600 text-sm mt-1">El grupo REvil accedió de forma no autorizada a los sistemas internos de Banco Estado mediante una puerta trasera instalada a través de un correo malicioso. Sanciona a quien acceda o se mantenga en un sistema informático sin autorización.</p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-2">
          <h3 className="font-semibold text-slate-800">Artículo 3 — Interceptación Ilícita</h3>
          <p className="text-slate-600 text-sm mt-1">Una vez dentro de la red, los atacantes interceptaron comunicaciones y datos internos del banco para mapear la red y propagar el ransomware. Sanciona la interceptación no autorizada de transmisiones de datos.</p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-2">
          <h3 className="font-semibold text-slate-800">Artículo 4 — Ataque a la Integridad de los Datos</h3>
          <p className="text-slate-600 text-sm mt-1">El ransomware REvil cifró los archivos y sistemas del banco, alterando y bloqueando el acceso a los datos. Sanciona a quien dañe, altere, borre o destruya datos informáticos sin autorización.</p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-2">
          <h3 className="font-semibold text-slate-800">Artículo 5 — Ataque a la Integridad del Sistema</h3>
          <p className="text-slate-600 text-sm mt-1">El ataque dejó inoperativos los sistemas del banco, obligando al cierre de 409 sucursales. Sanciona a quien obstaculice o perturbe el funcionamiento de un sistema informático.</p>
        </div>
      </div>
    </div>
  )
}

export default Delitos