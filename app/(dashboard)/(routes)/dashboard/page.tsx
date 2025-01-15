'use client'
//import Lottie from "react-lottie";
import animationData from "@/public/assets/house1.json"
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

import { Card } from '@/components/ui/card'

import { TOOLS } from '@/constants'
import { cn } from '@/lib/utils'
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const DashboardPage = () => {
  const router = useRouter()
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current!, // Use non-null assertion
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('@/public/assets/house1.json'), // Replace with your Lottie animation file
      });
    }
  }, []);

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
        Arreda la casa dei tuoi sogni
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Trasforma le tue idee di design in interni eleganti e professionali con la nostra intelligenza artificiale.
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {TOOLS.map(tool => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>

              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
       <div className="flex justify-center items-center">
      {/* <Lottie style={{ width: '50%', height: '50%' }} animationData={animationData} /> */}
      <div ref={animationContainer} style={{ width: 400, height: 400 }} />
    </div>
      </div>
      
    </div>
  )
}

export default DashboardPage
