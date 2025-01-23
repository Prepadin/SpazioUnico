import Image from "next/image"

export const LandingDesgns = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-16 space-y-4">
        <p className="text-purple-600 font-medium">FALLO IN SECONDI INVECE DI GIORNI</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-purple-600">Spazio Unico L&apos;intelligenza artificiale è per </span>
          <span className="text-white">Proprietari di case e Professionisti</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Personal Use Section */}
        <div className="space-y-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/for-whom-1.png"
              alt="Person using home design app on mobile phone"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
            Uso Personale <span className="text-purple-600">01</span>
            </h2>
            <p className="text-zinc-400">
            Scopri il  <span className="text-purple-600">stile di decorazione</span> che si adatta alle tue preferenze e
            genera concetti creativi e realistici illimitati per gli spazi interni ed esterni della tua casa.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Decorazione della casa AI",
              "Mobili per la casa AI",
              "Decorazioni per la casa fai da te",
              
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Use Section */}
        <div className="space-y-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/for-whom-2.png"
              alt="Professional working at desk with laptop"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
            Uso professionale <span className="text-blue-400">02</span>
            </h2>
            <p className="text-zinc-400">
            Fai un&apos;ottima prima impressione sui potenziali clienti mostrando loro quanto può fare il tuo lavoro{" "}
              <span className="text-blue-400">migliorare la propria casa e risparmiare tempo</span>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Designer d&apos;interni",
              "Architetti",
              "Costruttori di case",
              "Agenzie immobiliari",
              "Costruttori di mobili",
              "Imprenditori",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-50 text-blue-400 rounded-full text-sm hover:bg-blue-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

