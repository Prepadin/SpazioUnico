import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export const LandingTutos = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
          Scatta una foto e ridisegna i tuoi interni in pochi secondi utilizzando l'intelligenza artificiale
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Stai cercando di trasformare la tua casa all'interno? La nostra funzionalità AI per interni Beautiful Spazio Unico è qui
          per aiutare. Ti consente di rinnovare il tuo spazio in vari stili, assicurandoti che appaia spettacolare. Puoi riprogettare
          interni con facilità.
          </p>
          <Button size="lg" className="bg-[#6C5CE7] hover:bg-[#5A4BD1]">
            Inizia
          </Button>
        </div>
        {/* <div className="aspect-[4/3] w-full"> */}
          {/* <BeforeAfterSlider
            beforeImage="@/images/room4.jpg"
            afterImage="@/images/room4lux.png"
          /> */}
             <div className="aspect-[4/3] w-full relative rounded-full overflow-hidden"  style={{ height: "300px" }}>
          <Image
            src="/room4lux.png"
            alt="Before redesign"
            layout="fill"
            objectFit="cover"
            priority
          />
          </div>
      </div>
    </section>
  )
}

