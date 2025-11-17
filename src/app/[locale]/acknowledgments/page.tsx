import { makePage } from '@/components/makePage'
import { Container, LanguageSwitcher } from '@/layouts/TextPageLayout/TextPageLayout.styled'
import { HomeButton } from '@/components/HomeButton'
import { BackButton } from '@/components/BackButton'
import creditImage from './credits2.jpg' // Metti qui la tua immagine

export default makePage((dictionary) => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Pulsanti Home e Back */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          display: 'flex',
          gap: '12px',
          zIndex: 10,
        }}
      >
        <HomeButton $dark />
        <BackButton $dark href="/the-immersive-cathedral" />
      </div>

      {/* Immagine fullscreen */}
      <img
        src={creditImage.src}
        alt="Credits"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // cover = riempie tutto, contain = mantiene proporzioni
          display: 'block',
        }}
      />

      <LanguageSwitcher />
    </div>
  )
})