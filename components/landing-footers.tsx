import Link from "next/link"

export const LandingFooters = () => {
  return (
    <footer className="w-full bg-[#192339] border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl text-white font-bold">SPAZIO UNICO</span>
              <span className="bg-primary text-primary-foreground text-xs px-1 rounded">IA</span>
            </div>
            <p className="text-sm text-zinc-400 text-muted-foreground">Progetti Spazio Unico con l&apos;intelligenza artificiale.</p>
            <div className="text-xs text-zinc-400 text-muted-foreground">
              <p>© 2025 All rights reserved</p>
              <p>SPAZIO UNICO® is a registered trademark.</p>
              {/* <p>Killbridge Ventures Pte. Ltd.</p> */}
            </div>
          </div>
          
          {/* <div className="space-y-4">
            <h3 className="font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Interior Design Advice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Interior Design Glossary
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Interior Design Podcast
                </Link>
              </li>
            </ul>
          </div> */}

           <div className="space-y-4">
            <h3 className="font-medium text-white">Connessioni</h3>
            <ul className="space-y-2 text-sm">
              <li>
                
                <Link href="/terms" className="text-muted-foreground text-zinc-400 hover:text-foreground">
                Termini di servizio
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground text-zinc-400 hover:text-foreground">
                Politica sulla riservatezza
                </Link>
              </li>
            </ul>
          </div> 

          <div className="space-y-4">
            <h3 className="font-medium text-white">Contatto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://instagram.com/spaziounico.com" className="text-muted-foreground text-zinc-400 hover:text-foreground">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="mailto:info@spaziounico.com" className="text-muted-foreground text-zinc-400 hover:text-foreground">
                Supporto (email)
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Press (email)
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}