'use client'

import Navigation from '../components/Navigation'
import CopyButton from '../components/CopyButton'

const copyData = {
  headlines: [
    "Delivery de bebidas a las 4AM — cuando todos los kioscos están cerrados",
    "¿Se acabó el fernet a la 1AM y nadie quiere ir a buscar más?",
    "Bebidas + hielo en tu puerta en minutos — sin moverte del sillón",
    "El momento incómodo cuando se acaba el hielo y hay que decidir quién sale",
    "Ya pedimos 47 veces este mes — y los puntos nos dieron 2 promos gratis"
  ],
  subheadlines: [
    "Pedí desde el celu, llega a tu casa. Sí, incluso de madrugada. Sí, con hielo.",
    "El único delivery de bebidas que opera las 24 horas — porque las previas no tienen horario y las fiestas no avisan cuándo se quedan sin alcohol",
    "Sumá puntos con cada pedido, desbloqueá descuentos, olvidate de salir a buscar hielo a las 3 de la mañana"
  ],
  bodyShort: `Se acabó la bebida. Son las 3AM. Nadie quiere salir.

No hace falta.

Delivery de bebidas + hielo las 24 horas. Pedís desde el celu, llega a tu puerta. Mientras todos discuten quién va al kiosco, vos ya estás sirviendo el próximo trago.

Pedí ahora → link en bio`,
  bodyLong: `Todos conocemos ese momento.

La fiesta está en su mejor punto. Suena la canción perfecta. Y alguien dice las palabras que nadie quiere escuchar:

"Se acabó la bebida."

Son las 2AM. El kiosco de la esquina cerró hace rato. El único que tiene auto está en condiciones de manejar exactamente 0 metros. Y nadie — NADIE — quiere ser el que sale a buscar más.

La fiesta muere ahí.

O moría. Porque ahora existe otra opción.

Delivery de bebidas las 24 horas. Sí, a las 4AM también.

Pedís desde tu teléfono en 30 segundos. Bebidas, packs, y sí — también hielo. Llega a tu puerta mientras la playlist sigue sonando.

Mismos precios que cualquier otro lugar. Pero sin tener que ponerte los zapatos, sin discusiones de quién va, sin perderte la mejor parte de la noche.

Y si pedís seguido, acumulás puntos que se convierten en descuentos reales. No de esos de "10% en tu próxima compra de más de $50.000". Descuentos que se sienten.

La próxima fiesta que se quede sin fernet a las 3AM, no tiene por qué terminar.

Comprá desde tu teléfono ahora.`,
  ctas: [
    "Pedir ahora",
    "Quiero bebidas en mi puerta",
    "Pedir antes de que se acabe",
    "Probar con envío gratis",
    "Dale, necesito esto en mi vida"
  ],
  hooks: [
    { text: "Son las 3AM, se acabó la bebida, y el único que tiene auto está en pedo. Bueno, ya no importa.", format: "video 15s" },
    { text: "¿Cuántas fiestas murieron porque nadie quiso ir a buscar más hielo?", format: "post" },
    { text: "Se acabó el vodka a las 2AM (pero esta vez no importó)", format: "email subject" }
  ],
  emails: [
    {
      subject: "Tu delivery de madrugada está listo 🍻",
      preview: "Bebidas + hielo a las 4AM. En serio.",
      body: `¡Ey!

Bienvenido al único delivery de bebidas que no cierra. Nunca.

Ahora podés pedir bebidas + hielo a cualquier hora desde tu teléfono. Las 3AM de un martes, las 5AM de un sábado — no importa. Nosotros operamos.

Así funciona:
1. Entrás a la app o la web
2. Elegís tu pack (o armás el tuyo)
3. Pagás online
4. Llega a tu puerta

Mismos precios que en cualquier local. Pero sin salir de tu casa.

Y con cada pedido sumás puntos que después canjeás por descuentos reales.

La próxima previa, probalo.

→ Hacé tu primer pedido acá`,
      cta: "Hacer mi primer pedido"
    },
    {
      subject: "El truco para que nunca más muera una fiesta",
      preview: "Aprendido después de muchas previas...",
      body: `¿Sabés cuál es el error más común en una previa?

Calcular mal.

"Somos 8, con 2 fernets alcanza." No alcanza. Nunca alcanza.

Pero el problema no es quedarse corto. El problema es que cuando te das cuenta, ya son las 2AM y conseguir más bebida se convierte en una odisea.

Por eso creamos los packs.

Combinaciones de bebidas + hielo pensadas para grupos. Cantidades reales, no las de la matemática optimista de las 8PM.

Y si se te termina igual — pedís más. A cualquier hora.

Esta semana tenemos un pack nuevo con 15% off para que lo pruebes.

→ Ver los packs disponibles`,
      cta: "Ver packs con descuento"
    },
    {
      subject: "Solo por este finde: envío gratis 🚀",
      preview: "Sin mínimo. Sin letra chica.",
      body: `Directo al punto:

Este fin de semana el envío es gratis.

Sin mínimo de compra. Sin códigos raros. Solo pedís y llega.

Quería que lo pruebes sin excusas. Porque sé que una vez que pidas a las 3AM y veas que realmente llega — no vas a volver a salir a buscar hielo nunca más.

El delivery funciona las 24 horas, todos los días. Bebidas, packs, hielo, todo.

Y si te copa, con cada pedido acumulás puntos para futuros descuentos.

Pero el envío gratis es solo este finde.

→ Pedí ahora con envío gratis

PD: Si tenés previa esta noche, dejalo armado de antes. O pedilo a las 4AM cuando se acabe. Tu decisión.`,
      cta: "Pedir con envío gratis"
    }
  ],
  scripts: [
    {
      duration: "30s",
      hook: "Son las 3 de la mañana y se acaba de terminar el fernet. ¿Quién va a buscar más?",
      body: "Nadie. Porque ahora existe delivery de bebidas las 24 horas. Pedís desde el celu — bebidas, packs, hasta hielo. Llega a tu puerta mientras la fiesta sigue. Mismos precios, pero sin salir de tu casa a las 4AM.",
      cta: "Link en bio. Pedí ahora y olvidate de ser el que sale a buscar."
    },
    {
      duration: "60s",
      hook: "El sábado pasado estábamos en una previa. Éramos como 12. A las 2AM pasó lo inevitable.",
      body: `Se acabó todo. El vodka, el fernet, hasta el hielo.

Y empezó la discusión de siempre: quién va. Nadie quería. El que tenía auto había tomado. El kiosco más cercano abierto estaba a 15 cuadras.

Entonces uno de los pibes sacó el celu y en 2 minutos había pedido un pack completo. Bebidas más hielo.

Llegó en 25 minutos. A las 2 y media de la mañana.

Delivery de bebidas 24 horas. Funciona cuando nada más funciona. Pagás lo mismo que en cualquier lado, pero sin moverte.

Y si pedís seguido, acumulás puntos para descuentos.`,
      cta: "La próxima previa que se quede sin nada — ya sabés. Link en bio, pedí desde el celu."
    }
  ],
  socialPosts: [
    {
      platform: "Instagram",
      content: `Momento exacto en que se acaba la bebida a las 3AM y recordás que existe el delivery 24hs 😌

Bebidas + hielo desde el celu. Llega a tu puerta.

Link en bio → no seas el que sale a buscar`,
      hashtags: ["previa", "delivery", "fiesta", "bebidas", "argentina"]
    },
    {
      platform: "LinkedIn",
      content: `Construimos un delivery de bebidas que opera las 24 horas.

¿Por qué?

Porque identificamos un hueco enorme en el mercado: cuando más se necesitan bebidas (madrugada, fines de semana), menos opciones hay.

Los supermercados cierran. Los kioscos 24hs son pocos y lejos. Y las apps de delivery tradicionales no cubren esta categoría de noche.

El resultado: gente que tiene que subirse a un auto (muchas veces habiendo tomado) para buscar más bebida. O fiestas que terminan antes de tiempo.

Nuestra solución es simple: operación nocturna real, stock preparado para la demanda de madrugada, y logística optimizada para entregar rápido cuando todos los demás están cerrados.

Mismos precios que cualquier local. Pero llegamos a la puerta.

A veces la innovación no es tecnología nueva. Es simplemente estar disponible cuando nadie más quiere estarlo.`,
      hashtags: ["ecommerce", "delivery", "startup", "argentina"]
    }
  ]
}

export default function CopyPage() {
  return (
    <>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📝 Biblioteca de Copy
          </h1>
          <p className="text-xl text-gray-600">
            Todos los assets de copy listos para usar. Hacé click en "Copiar" para llevártelo al portapapeles.
          </p>
        </div>

        {/* Headlines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">H1</span>
            Headlines Principales
          </h2>
          <div className="space-y-4">
            {copyData.headlines.map((headline, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 flex justify-between items-start gap-4 hover:border-pink-300 transition-colors"
              >
                <p className="text-lg font-medium text-gray-900">{headline}</p>
                <CopyButton text={headline} />
              </div>
            ))}
          </div>
        </section>

        {/* Subheadlines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">H2</span>
            Subheadlines
          </h2>
          <div className="space-y-4">
            {copyData.subheadlines.map((subheadline, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 flex justify-between items-start gap-4 hover:border-pink-300 transition-colors"
              >
                <p className="text-gray-700">{subheadline}</p>
                <CopyButton text={subheadline} />
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">🎯</span>
            Llamados a la Acción (CTAs)
          </h2>
          <div className="flex flex-wrap gap-3">
            {copyData.ctas.map((cta, index) => (
              <div
                key={index}
                className="bg-white rounded-xl px-6 py-4 border border-gray-200 flex items-center gap-4 hover:border-pink-300 transition-colors"
              >
                <span className="font-medium text-gray-900">{cta}</span>
                <CopyButton text={cta} />
              </div>
            ))}
          </div>
        </section>

        {/* Hooks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">🪝</span>
            Hooks por Formato
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {copyData.hooks.map((hook, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-300 transition-colors"
              >
                <span className="inline-block bg-pink-100 text-pink-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {hook.format}
                </span>
                <p className="text-gray-900 mb-4">{hook.text}</p>
                <CopyButton text={hook.text} />
              </div>
            ))}
          </div>
        </section>

        {/* Body Short */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">📄</span>
            Body Copy Corto (Redes Sociales)
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <pre className="whitespace-pre-wrap text-gray-700 font-sans mb-4">
              {copyData.bodyShort}
            </pre>
            <CopyButton text={copyData.bodyShort} label="Copiar body corto" />
          </div>
        </section>

        {/* Body Long */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">📃</span>
            Body Copy Largo (Landing/Email)
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <pre className="whitespace-pre-wrap text-gray-700 font-sans mb-4 max-h-96 overflow-y-auto">
              {copyData.bodyLong}
            </pre>
            <CopyButton text={copyData.bodyLong} label="Copiar body largo" />
          </div>
        </section>

        {/* Video Scripts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">🎬</span>
            Scripts de Video
          </h2>
          <div className="space-y-6">
            {copyData.scripts.map((script, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {script.duration}
                  </span>
                  <span className="text-gray-500">Video Script #{index + 1}</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-medium mb-1">Hook (primeros 3 segundos)</p>
                    <p className="text-lg font-medium text-gray-900 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      {script.hook}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-medium mb-1">Body</p>
                    <pre className="whitespace-pre-wrap text-gray-700 font-sans bg-gray-50 p-3 rounded-lg">
                      {script.body}
                    </pre>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 font-medium mb-1">CTA Final</p>
                    <p className="text-gray-900 font-medium bg-pink-50 p-3 rounded-lg border border-pink-200">
                      {script.cta}
                    </p>
                  </div>
                </div>
                
                <CopyButton 
                  text={`HOOK:\n${script.hook}\n\nBODY:\n${script.body}\n\nCTA:\n${script.cta}`} 
                  label="Copiar script completo" 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Social Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">📱</span>
            Posts para Redes Sociales
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {copyData.socialPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    post.platform === 'Instagram' 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {post.platform}
                  </span>
                </div>
                
                <pre className="whitespace-pre-wrap text-gray-700 font-sans mb-4 text-sm">
                  {post.content}
                </pre>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.hashtags.map((tag, i) => (
                    <span key={i} className="text-pink-600 text-sm">#{tag}</span>
                  ))}
                </div>
                
                <CopyButton 
                  text={`${post.content}\n\n${post.hashtags.map(t => '#' + t).join(' ')}`} 
                  label="Copiar post" 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Emails */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">✉️</span>
            Secuencia de Emails
          </h2>
          <div className="space-y-6">
            {copyData.emails.map((email, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email #{index + 1}</p>
                      <p className="font-bold text-gray-900">{email.subject}</p>
                      <p className="text-sm text-gray-500">{email.preview}</p>
                    </div>
                    <CopyButton text={email.subject} label="Copiar asunto" />
                  </div>
                </div>
                
                <div className="p-6">
                  <pre className="whitespace-pre-wrap text-gray-700 font-sans mb-4 text-sm">
                    {email.body}
                  </pre>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">CTA:</span>
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-lg font-medium text-sm">
                        {email.cta}
                      </span>
                    </div>
                    <CopyButton 
                      text={`Asunto: ${email.subject}\nPreview: ${email.preview}\n\n${email.body}\n\nCTA: ${email.cta}`} 
                      label="Copiar email completo" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
