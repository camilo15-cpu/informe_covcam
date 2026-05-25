import { FileText } from 'lucide-react'

function Resumen() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="text-red-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Resumen Ejecutivo — Caso Banco Estado Chile 2020
        </h2>
      </div>

      <div className="space-y-4 text-slate-600 leading-relaxed">
        <div>
          <h3 className="font-semibold text-slate-800 mb-1">¿Qué pasó?</h3>
          <p>El 7 de septiembre de 2020, Banco Estado se vio obligado a cerrar todas sus sucursales a nivel nacional debido a un ataque de ransomware REvil (Sodinokibi).</p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-1">¿Cuándo ocurrió?</h3>
          <p>El ataque fue detectado el 7 de septiembre de 2020, afectando las operaciones del banco durante varios días.</p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-1">¿Quiénes participaron?</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li><span className="font-medium">Atacante:</span> Grupo cibercriminal detrás del ransomware REvil, de origen ruso.</li>
            <li><span className="font-medium">Víctima:</span> Banco Estado de Chile, institución financiera pública.</li>
            <li><span className="font-medium">Afectados:</span> Clientes del banco y ciudadanos que dependían de sus servicios.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-1">¿Cómo ocurrió?</h3>
          <p>El ataque se originó a través de un archivo de Microsoft Office malicioso enviado por correo electrónico a un empleado. Al abrirlo, se instaló una puerta trasera que permitió desplegar el ransomware REvil, cifrando los archivos del banco.</p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-1">Impacto</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Cierre total de las 409 sucursales del banco durante un día.</li>
            <li>Sistemas internos cifrados e inoperativos.</li>
            <li>Interrupción de servicios financieros para miles de clientes.</li>
            <li>Exposible exposición de datos de clientes y empleados.</li>
            <li>Daño reputacional significativo para la institución.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resumen