import { BarChart2 } from 'lucide-react'

function Comparacion() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <BarChart2 className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Comparación de Marcos Regulatorios
        </h2>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="p-3 border">Eje de Comparación</th>
              <th className="p-3 border">Ley 19.628 (Chile)</th>
              <th className="p-3 border">GDPR (Europa)</th>
              <th className="p-3 border">PCI-DSS (Internacional)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-50">
              <td className="p-3 border font-semibold">Alcance</td>
              <td className="p-3 border">Datos personales en Chile</td>
              <td className="p-3 border">Datos de ciudadanos de la UE</td>
              <td className="p-3 border">Datos de tarjetas a nivel mundial</td>
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Sujeto Regulado</td>
              <td className="p-3 border">Organismos públicos y privados</td>
              <td className="p-3 border">Toda organización que trate datos UE</td>
              <td className="p-3 border">Organizaciones que procesen pagos</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="p-3 border font-semibold">Sanciones</td>
              <td className="p-3 border">Multas y responsabilidad civil</td>
              <td className="p-3 border">Hasta 20 millones de euros o 4% facturación</td>
              <td className="p-3 border">Multas y suspensión del servicio</td>
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Notificación de Brechas</td>
              <td className="p-3 border">Sin plazo específico</td>
              <td className="p-3 border">Obligatoria en 72 horas</td>
              <td className="p-3 border">Notificación inmediata</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="p-3 border font-semibold">Jurisdicción</td>
              <td className="p-3 border">Chile</td>
              <td className="p-3 border">Unión Europea</td>
              <td className="p-3 border">Internacional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Aplicabilidad al Caso</h3>
        <div className="border-l-4 border-red-400 pl-4">
          <h4 className="font-semibold text-slate-800">Ley 19.628</h4>
          <p className="text-slate-600 text-sm mt-1">Aplica directamente ya que Banco Estado almacena datos personales de millones de clientes chilenos. El ataque pudo comprometer esos datos sin notificación formal a los afectados.</p>
        </div>
        <div className="border-l-4 border-blue-400 pl-4">
          <h4 className="font-semibold text-slate-800">GDPR</h4>
          <p className="text-slate-600 text-sm mt-1">Si Banco Estado operara en Europa, estaría obligado a notificar la brecha en 72 horas y enfrentaría multas millonarias. Sirve como referencia para evaluar las falencias de la normativa chilena.</p>
        </div>
        <div className="border-l-4 border-green-400 pl-4">
          <h4 className="font-semibold text-slate-800">PCI-DSS</h4>
          <p className="text-slate-600 text-sm mt-1">Como institución financiera que procesa pagos con tarjeta, Banco Estado debe cumplir PCI-DSS. El ransomware pone en riesgo directo el cumplimiento de este estándar.</p>
        </div>
      </div>
    </div>
  )
}

export default Comparacion