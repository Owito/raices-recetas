import { useEffect, useRef, useState } from 'react'
import type { Screen } from './types'
import { Pitch } from './components/Pitch'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { RecordScreen } from './screens/RecordScreen'
import { AiScreen } from './screens/AiScreen'
import { WallScreen } from './screens/WallScreen'
import { RecipeDetail } from './screens/RecipeDetail'

const SAVED_TOAST = '🌿 Guardada en el muro de los García'

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [detailOpen, setDetailOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState(SAVED_TOAST)
  const [toastShow, setToastShow] = useState(false)
  const toastTimers = useRef<number[]>([])

  const clearToastTimers = () => {
    toastTimers.current.forEach(clearTimeout)
    toastTimers.current = []
  }
  useEffect(() => clearToastTimers, [])

  /** Muestra un toast; opcionalmente restaura otro mensaje al ocultarse. */
  const showToast = (msg: string, resetTo?: string) => {
    clearToastTimers()
    setToastMsg(msg)
    setToastShow(true)
    toastTimers.current.push(
      window.setTimeout(() => {
        setToastShow(false)
        if (resetTo) {
          toastTimers.current.push(window.setTimeout(() => setToastMsg(resetTo), 400))
        }
      }, 2600),
    )
  }

  const handleSave = () => {
    setScreen('wall')
    toastTimers.current.push(window.setTimeout(() => showToast(SAVED_TOAST), 350))
  }

  const handleInvite = () =>
    showToast('💌 Enviamos el link a Mamá, Juan y la tía Marta', SAVED_TOAST)

  return (
    <div className="stage">
      <Pitch />
      <div className="device-wrap">
        <div className="device">
          <div className="screen-frame">
            <div className="notch" />
            <div className={'toast' + (toastShow ? ' show' : '')}>{toastMsg}</div>

            <WelcomeScreen active={screen === 'welcome'} onStart={() => setScreen('record')} />
            <RecordScreen
              active={screen === 'record'}
              onBack={() => setScreen('welcome')}
              onNext={() => setScreen('ai')}
            />
            <AiScreen active={screen === 'ai'} onBack={() => setScreen('record')} onSave={handleSave} />
            <WallScreen
              active={screen === 'wall'}
              onBack={() => setScreen('ai')}
              onOpenDetail={() => setDetailOpen(true)}
              onInvite={handleInvite}
            />
            <RecipeDetail open={detailOpen} onClose={() => setDetailOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}
