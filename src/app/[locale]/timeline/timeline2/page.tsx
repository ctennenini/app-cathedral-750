import { HorizontalTimelineLayout, HorizontalTimelineEvent } from '@/layouts/TextPageLayout/TimelineLayout2'
import heroImg from '@/assets/bg-images/daylight-drone-shot-between-towers.png'

const timelineEvents: HorizontalTimelineEvent[] = [
  {
    year: '1133',
    title: 'Inizio costruzione della cattedrale',
    description: 'La costruzione della Grossmünster iniziò sotto l\'imperatore Enrico IV. Questo maestoso edificio religioso rappresenta uno dei più importanti esempi di architettura romanica in Svizzera. La cattedrale fu costruita sopra una precedente chiesa carolingia, e la sua costruzione si protrasse per diversi decenni.',
    image: {
      src: '/images/grossmunster-construction.jpg',
      alt: 'Costruzione della Grossmünster nel XII secolo',
      width: 400,
      height: 300
    }
  },
  {
    year: '1523',
    title: 'Riforma di Zwingli',
    description: 'Ulrich Zwingli lancia il movimento della Riforma protestante a Zurigo dalla Grossmünster. Le sue prediche rivoluzionarie trasformarono non solo la città di Zurigo, ma influenzarono profondamente il corso della Riforma in tutta Europa. Zwingli predicò contro le indulgenze e promosse una forma di cristianesimo più pura e scripturale.',
    image: {
      src: '/images/zwingli-reform.jpg',
      alt: 'Ulrich Zwingli predica nella Grossmünster',
      width: 400,
      height: 300
    }
  },
  {
    year: '1833',
    title: 'Fondazione dell\'Università di Zurigo',
    description: 'La prima università europea fondata da uno stato democratico. L\'Università di Zurigo rappresenta un momento cruciale nella democratizzazione dell\'educazione superiore. Fu fondata con l\'obiettivo di fornire un\'educazione laica e scientifica, libera dalle influenze ecclesiastiche tradizionali.',
    image: {
      src: '/images/university-zurich.jpg',
      alt: 'L\'Università di Zurigo nel XIX secolo',
      width: 400,
      height: 300
    }
  },
  {
    year: '1950',
    title: 'Restauro post-bellico',
    description: 'Importanti lavori di restauro e modernizzazione della cattedrale dopo la Seconda Guerra Mondiale. Questi interventi hanno preservato l\'integrità architettonica dell\'edificio mentre hanno introdotto moderne tecnologie per la conservazione.',
    image: {
      src: '/images/restoration-1950.jpg',
      alt: 'Lavori di restauro della Grossmünster negli anni \'50',
      width: 400,
      height: 300
    }
  },
]

export default function HorizontalTimelinePage() {
  return (
    <HorizontalTimelineLayout 
      events={timelineEvents}
      backgroundImage={heroImg.src}
    />
  )
}

// Se preferisci un layout con header/footer, puoi usare questo wrapper alternativo:
export function HorizontalTimelinePageWithLayout() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Header opzionale */}
      <header style={{
        position: 'absolute',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          margin: '0 0 0.5rem 0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
        }}>
          Storia della Grossmünster
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          margin: 0,
          textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
        }}>
          Clicca sui punti della timeline per esplorare i momenti chiave
        </p>
      </header>

      <HorizontalTimelineLayout 
        events={timelineEvents}
        backgroundImage={heroImg.src}
      />

      {/* Footer opzionale */}
      <footer style={{
        position: 'absolute',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        color: 'rgba(255,255,255,0.8)',
        fontSize: '0.9rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
      }}>
        © 2024 Storia della Grossmünster
      </footer>
    </div>
  )
}