import { Database } from 'lucide-react'

function Datos() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Database className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Tratamiento de Datos Personales — Ley 19.628
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">
            Tipos de Datos Comprometidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Datos Personales</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Nombres y apellidos</li>
                <li>• RUT</li>
                <li>• Correo electrónico</li>
                <li>• Teléfono</li>
                <li>• Dirección física</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 border-red-200 bg-red-50">
              <h4 className="font-semibold text-slate-800 mb-2">Datos Financieros (Sensibles)</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Números de cuentas</li>
                <li>• Tarjetas de crédito/débito</li>
                <li>• Historial de transacciones</li>
                <li>• Saldos y movimientos</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Datos de Empleados</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Información personal</li>
                <li>• Credenciales de acceso</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">
            Distinción: Datos Personales vs Sensibles
          </h3>
          <p className="text-slate-600 text-sm">Según la Ley 19.628, los datos financieros (cuentas, tarjetas, transacciones) se consideran datos sensibles porque revelan el comportamiento económico de las personas y su exposición puede causar daños graves como fraude o robo de identidad.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">
            Derechos ARCO Afectados (Art. 12, Ley 19.628)
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-red-400 pl-4">
              <h4 className="font-semibold text-slate-800">Derecho de Acceso</h4>
              <p className="text-slate-600 text-sm mt-1">Los clientes tienen derecho a saber qué datos posee el banco. El ataque pone en riesgo este derecho ya que los datos pudieron ser accedidos por terceros sin conocimiento de los titulares.</p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h4 className="font-semibold text-slate-800">Derecho de Rectificación</h4>
              <p className="text-slate-600 text-sm mt-1">Si el ataque alteró registros de clientes, el banco está obligado a rectificarlos y notificar a los afectados conforme al Art. 12 de la Ley 19.628.</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-semibold text-slate-800">Derecho de Cancelación</h4>
              <p className="text-slate-600 text-sm mt-1">El incidente evidencia que el banco debe revisar qué datos almacena y por cuánto tiempo, eliminando aquellos innecesarios que aumentan el riesgo.</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-semibold text-slate-800">Derecho de Oposición</h4>
              <p className="text-slate-600 text-sm mt-1">El ataque evidencia que el banco no contaba con medidas suficientes para garantizar que el tratamiento de datos se realizara de forma segura conforme a la ley.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datos