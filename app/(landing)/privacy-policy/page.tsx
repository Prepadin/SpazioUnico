import Head from 'next/head';
import { LandingFooters } from '@/components/landing-footers'
import { LandingNavbar } from '@/components/landing-navbar'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Politica sulla riservatezza - Spazio Unico</title>
        <meta name="description" content="Privacy Policy for Room AI" />
        <meta name="robots" content="noindex" />
      </Head>
      <LandingNavbar />
      <main className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Politica sulla riservatezza</h1>

        <section className="mb-12">
       
          <p>
          Il servizio Spazio Unico, fornito da Prepad d.o.o. valorizziamo e rispettiamo la privacy dei nostri utenti.
          Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali,
          quando accedi e utilizzi i nostri servizi.

          Dati che raccogliamo
          Raccogliamo informazioni da te quando utilizzi i nostri servizi, inclusi, a titolo esemplificativo ma non esaustivo:
<ul className="list-disc list-inside ml-4">
<li>1. Informazioni sull'account: quando crei un account con Spazio Unico, raccogliamo il tuo nome, indirizzo email e qualsiasi altra informazione fornita durante la procedura di registrazione.</li>
<li>2. Dati di utilizzo: raccogliamo dati relativi al tuo utilizzo dei nostri servizi, come le immagini che crei, la data e l'ora del tuo utilizzo e altre azioni che intraprendi all'interno della nostra piattaforma.</li>

<li>3. Dati analitici: utilizziamo strumenti analitici per raccogliere informazioni su come gli utenti interagiscono con i nostri servizi, inclusi, a titolo esemplificativo ma non esaustivo, le pagine visitate, la durata della visita e altri dati comportamentali.</li>
</ul>
          </p>
        </section>

        <section className="mb-12">
          
          <p>
          Utilizzo di servizi esterni
          Potremmo avvalerci di servizi e piattaforme di terze parti per fornire i nostri servizi. Sebbene facciamo ogni sforzo per garantire che questi servizi esterni rispettino i nostri standard sulla privacy, non possiamo garantire la riservatezza delle tue informazioni quando vengono elaborate o archiviate da questi servizi esterni.

          Come utilizziamo le tue informazioni
          Utilizziamo i dati raccolti per:

<ul className="list-disc list-inside ml-4">
<li>1. Fornire e mantenere i nostri servizi;</li>
<li>2. Per migliorare i nostri servizi e sviluppare nuove funzionalità;</li>
<li>3. Prevenire frodi e abusi;</li>
<li>4. Monitoraggio e applicazione della conformità ai nostri Termini di servizio;</li>
<li>5. Comunicare con te su aggiornamenti, promozioni e altre informazioni rilevanti.</li>
</ul>




          </p>
         
        </section>

        <section className="mb-14">
          
        Per garantire che l'utilizzo dei nostri servizi sia conforme ai nostri Termini di servizio, potremmo rivedere periodicamente le immagini generate dagli utenti. Ciò ci consente di verificare che gli utenti non creino immagini inappropriate o violino in altro modo i nostri Termini di servizio.

        Sicurezza dei dati
        Adottiamo misure di sicurezza ragionevoli per proteggere i tuoi dati personali da accessi, utilizzi o divulgazioni non autorizzati. Tuttavia, non possiamo garantire la completa sicurezza dei tuoi dati e non saremo responsabili per eventuali violazioni della sicurezza.

        Modifiche alla presente Informativa sulla privacy
        Ci riserviamo il diritto di aggiornare o modificare la presente Informativa sulla privacy in qualsiasi momento. Vi informeremo di eventuali modifiche pubblicando la politica aggiornata sul nostro sito web. L'uso continuato di Spazio Unico dopo eventuali modifiche alla presente Informativa sulla privacy costituisce l'accettazione dell'informativa aggiornata.

        Informazioni sui contatti
        In caso di domande o dubbi sulla presente Informativa sulla privacy o sull'utilizzo di Spazio Unico, contattateci all'indirizzo info@spaziounico.com.
        </section>

        

        

       

        
      </main>
      <LandingFooters />
    </>
  );
}
