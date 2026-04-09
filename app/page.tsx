import Navigation from './components/Navigation'

export default function LandingPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                🚀 Delivery 24 horas — Sí, a las 4AM también
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Delivery de bebidas a las 4AM — cuando todos los kioscos están cerrados
              </h1>
              <p className="text-xl lg:text-2xl text-pink-100 mb-8">
                Pedí desde el celu, llega a tu casa. Sí, incluso de madrugada. Sí, con hielo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pedir"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white text-pink-600 rounded-xl hover:bg-pink-50 transition-colors shadow-lg"
                >
                  Pedir ahora 🍻
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-white/50 text-white rounded-xl hover:bg-white/10 transition-colors"
                >
                  ¿Cómo funciona?
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">🍺🧊</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-pink-200 text-sm">Pack más vendido</p>
                    <p className="text-xl font-bold">Fernet + Cola + Hielo</p>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg">
                    <p className="text-sm text-pink-200">Entrega en</p>
                    <p className="font-bold">25-40 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Se acabó el fernet a la 1AM y nadie quiere ir a buscar más?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El único delivery de bebidas que opera las 24 horas — porque las previas no tienen horario y las fiestas no avisan cuándo se quedan sin alcohol
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌙',
                title: 'No hay delivery de noche',
                description: 'Los supermercados cierran, las apps no tienen bebidas, y el kiosco 24hs queda a 15 cuadras.',
              },
              {
                icon: '📅',
                title: 'No todos los días',
                description: 'Algunos servicios solo operan de jueves a domingo. ¿Y si la juntada es un martes?',
              },
              {
                icon: '🚗',
                title: 'Hay que trasladarse',
                description: 'El único que tiene auto tomó. Nadie quiere pedir un Uber para ir a buscar fernet.',
              },
              {
                icon: '🧊',
                title: 'Se acaba en medio de la fiesta',
                description: 'Son las 3AM, se terminó todo, y alguien tiene que ser el héroe que sale a buscar más.',
              },
            ].map((pain, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all"
              >
                <span className="text-4xl mb-4 block">{pain.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pain.title}</h3>
                <p className="text-gray-600">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
                La solución
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Bebidas + hielo en tu puerta en minutos — sin moverte del sillón
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Todos conocemos ese momento.
              </p>
              <p>
                La fiesta está en su mejor punto. Suena la canción perfecta. Y alguien dice las palabras que nadie quiere escuchar:
              </p>
              <p className="text-2xl font-bold text-gray-900 text-center py-4">
                "Se acabó la bebida."
              </p>
              <p>
                Son las 2AM. El kiosco de la esquina cerró hace rato. El único que tiene auto está en condiciones de manejar exactamente 0 metros. Y nadie — NADIE — quiere ser el que sale a buscar más.
              </p>
              <p className="text-xl font-semibold text-pink-600">
                La fiesta muere ahí. O moría. Porque ahora existe otra opción.
              </p>
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  Delivery de bebidas las 24 horas. Sí, a las 4AM también.
                </p>
                <p>
                  Pedís desde tu teléfono en 30 segundos. Bebidas, packs, y sí — también hielo. Llega a tu puerta mientras la playlist sigue sonando.
                </p>
              </div>
              <p>
                Mismos precios que cualquier otro lugar. Pero sin tener que ponerte los zapatos, sin discusiones de quién va, sin perderte la mejor parte de la noche.
              </p>
              <p>
                Y si pedís seguido, <strong>acumulás puntos que se convierten en descuentos reales</strong>. No de esos de "10% en tu próxima compra de más de $50.000". Descuentos que se sienten.
              </p>
              <p className="text-xl font-bold text-gray-900">
                La próxima fiesta que se quede sin fernet a las 3AM, no tiene por qué terminar.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#pedir"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors shadow-lg"
              >
                Comprá desde tu teléfono ahora 📱
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Objections Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Probablemente te estés preguntando...
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                objection: 'Hay un mínimo de compra y capaz no llego',
                response: 'El mínimo existe para que el envío tenga sentido — pero es bajo. Un pack básico para 4-5 personas ya lo supera. Y si estás en una previa con amigos, dividirlo hace que te salga menos que el Uber al kiosco.',
              },
              {
                objection: 'El envío me sale caro si pido poco',
                response: 'Si no llegás al mínimo, sí hay costo de envío. Pero pensalo así: ¿cuánto vale no tener que salir a las 3AM, encontrar algo abierto, hacer la cola, y volver? Muchas veces el envío sale menos que el viaje. Y con los puntos que acumulás, después te ahorrás más.',
              },
              {
                objection: '¿De verdad entregan a las 4AM? Suena a chamuyo',
                response: 'Operamos las 24 horas, los 7 días. No es un bot que te dice que sí y después no aparece. Es gente real que labura de noche porque sabemos que las fiestas no tienen horario. Probalo una vez y después me contás.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold">
                    ?
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      "{item.objection}"
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Guarantee */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600 text-white" id="pedir">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ya pedimos 47 veces este mes — y los puntos nos dieron 2 promos gratis
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Sumá puntos con cada pedido, desbloqueá descuentos, olvidate de salir a buscar hielo a las 3 de la mañana
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">💰 Precios</h3>
                <p className="text-pink-100">
                  Similar a otras tiendas físicas. No pagás más por la comodidad de que llegue a tu puerta a las 3AM.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">✅ Garantía</h3>
                <p className="text-pink-100">
                  Garantía del propio producto. Si hay algún problema con tu pedido, lo resolvemos.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 text-xl font-bold bg-white text-pink-600 rounded-xl hover:bg-pink-50 transition-colors shadow-lg"
            >
              Pedir ahora 🍻
            </a>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-pink-200">
              <span>✓ Envío rápido</span>
              <span>✓ 24 horas</span>
              <span>✓ Pago online</span>
              <span>✓ Puntos acumulables</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍻</span>
              <span className="font-bold">Delivery Bebidas 24hs</span>
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
            <p className="text-gray-500 text-sm">
              Marketing Workspace by IdeaForge
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
