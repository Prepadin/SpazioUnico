import { Users, MessageCircle, Layout, HardHat, Home, TreePine, Upload, MousePointer, Wand2 } from "lucide-react"
import { IconCard } from "@/components/icon-card"
import { StepCard } from "@/components/step-card"

export const LandingCard = () => (
  
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Facile e veloce{" "}
            <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">
            Tecnologia AI per interni
            </span>
          </h1>

          {/* User Groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-12 ">
            <IconCard icon={Users} title="TU, LA FAMIGLIA, GLI AMICI" />
            <IconCard icon={MessageCircle} title="COMUNITÀ ONLINE" />
            <IconCard icon={Layout} title="DESIGNER D'INTERNI" />
            <IconCard icon={HardHat} title="ARCHITETTI, COSTRUTTORI DI CASE" />
            <IconCard icon={Home} title="AGENZIE IMMOBILIARI, AGENTI REALI" />
            <IconCard icon={TreePine} title="PAESAGGISTI, GIARDINIERI" />
          </div>
        </section>

        {/* How to Use Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-violet-600 font-semibold">PROGETTARE LA CASA CON L'AI RESO FACILE</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
            Come utilizzare Spazio Unico in <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">3 semplici passaggi</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              icon={Upload}
              title="Upload"
              description="Carica la tua immagine di qualsiasi tipologia di camera"
            />
            <StepCard
              number={2}
              icon={MousePointer}
              title="Customize"
              description="Personalizza il tipo di stanza, le istruzioni personalizzate, la modalità e lo stile di design"
            />
            <StepCard
              number={3}
              icon={Wand2}
              title="Generate"
              description="Genera nuove idee di decorazione e design in pochi secondi"
            />
          </div>
        </section>
      </main>
    </div>
  )


