'use client'


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

export const LandingPricing = () => {
//   const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
const { isSignedIn } = useAuth()
  const plans = [
    {
      name: "Gratuito",
      description: "Scopri il designer che è in te e crea la casa dei tuoi sogni con il nostro software conveniente e facile da usare.",
    //   price: billingPeriod === "monthly" ? 0 : 0,
      price: 0 ,
      features: [
        "10 crediti per la generazione di immagini",
        "Solo per uso personale",
        "Risoluzione di base",
        
      ],
    },
    {
      name: "Pro",
      description: "Genera rapidamente idee, stupisci i clienti con immagini straordinarie e chiudi le trattative più velocemente utilizzando i nostri strumenti professionali.",
    //   price: billingPeriod === "monthly" ? 99 : 66,
      price: 20,
      popular: true,
      features: [
        "300 crediti per la generazione di immagini",
        "Licenza commerciale",
        "Massima risoluzione",
        "Assistenza clienti prioritaria",
      ],
    },
    {
      name: "Annuale Pro",
      description: "Migliora la tua azienda con una tecnologia AI all'avanguardia per aumentare l'efficienza, soddisfare i clienti e rimanere competitivi sul mercato.",
      price: 200,
      features: [
        "5000 crediti per la generazione di immagini",
        "Licenza commerciale",
        "Massima risoluzione",
        "Assistenza clienti prioritaria",
      ],
    },
  ]

  return (
    <div className="py-12 px-4">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl text-white font-bold tracking-tight sm:text-5xl">
        Inizia a rimodellare<br />la tua casa con l&apos;intelligenza artificiale
        </h1>
        {/* <div className="inline-flex items-center rounded-full border p-1 bg-muted/50">
          <button
            onClick={() => setBillingPeriod("yearly")}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              billingPeriod === "yearly" 
                ? "bg-background shadow-sm" 
                : ""
            }`}
          >
            Yearly
            <span className="ml-1 text-emerald-500 font-medium">33% off</span>
          </button>
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              billingPeriod === "monthly" 
                ? "bg-background shadow-sm" 
                : ""
            }`}
          >
            Monthly
          </button>
        </div> */}
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-emerald-500' : ''}`}>
            {plan.popular && (
              <span className="absolute -top-3 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                Popolare
              </span>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">€{plan.price}</span>
                {/* <span className="text-muted-foreground ml-1">/month</span> */}
              </div>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
              <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
              Inizia a progettare
              </Link>
              </Button>
              <div className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-emerald-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              {/* <p className="text-xs text-muted-foreground">Prekliči kadar koli</p> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}