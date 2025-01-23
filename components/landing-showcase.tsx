import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const LandingShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Fill The Room Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#7C3AED]">Riempi la stanza</span> <span className="text-white">con Mobili e Decorazioni</span>
          </h2>
          {/* <h3 className="text-3xl md:text-4xl font-bold text-white">Mobili e Decorazioni</h3> */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Ti sei mai chiesto come starebbe la tua casa con i mobili che desideri? Fill The Room consente all&apos;IA di fornirne qualsiasi
            tipo di camera. Puoi provare diverse configurazioni finché non trovi quella perfetta. Decora la stanza vuota con
            mobili con HomeDesignsAI. Funziona per in costruzione o spazi vuoti.
          </p>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/room4lux.png"
              alt="Empty room with white walls and wooden flooring"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </CardContent>
        </Card>
      </section>

      {/* Decor Staging Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/room4lux.png"
              alt="Modern room with purple sofa and industrial shelving"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </CardContent>
        </Card>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#7C3AED]">Messa in scena dell&apos;arredamento</span> <span className="text-white">e Vetrina di mobili</span>
          </h2>
          {/* <h3 className="text-3xl md:text-4xl font-bold text-white">Vetrina di mobili</h3> */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Metti in mostra i tuoi mobili e le tue decorazioni in tanti stili con Decor Staging. Puoi vedere come sarebbero le tue cose
            guarda in tutti i tipi di design diversi, come un decoratore professionista. Metti in mostra qualsiasi mobile o altro
            oggetti.
          </p>
        </div>
      </section>
    </div>
  )
}

