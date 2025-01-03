'use client'
import { ComponentProps, useState } from 'react'
import { Action } from './actions'
import { OldestStoneGame } from './OldestStoneGame'
import { DegradationTypesGame } from './DegradationTypesGame'

export type ActionButtonProps = ComponentProps<'button'> & {
  action: Action
}

export function ActionButton({ action, ...buttonProps }: ActionButtonProps) {
  const [showOldestStoneGame, setShowOldestStoneGame] = useState(false)
  const [showDegradationTypesGame, setShowDegradationTypesGame] = useState(false)

  console.log('ActionButton:', { action, otherProps: buttonProps })

  const onClick = () => {
    switch (action.type) {
      case 'oldestStoneGame':
        setShowOldestStoneGame(true)
        break

      case 'degradationTypesGame':
        setShowDegradationTypesGame(true)
        break

      case 'link':
      default:
        console.error('action type not implemented:', action)
    }
  }

  return (
    <>
      <button
        onClick={onClick}
        {...buttonProps}
      >
        {action.label}
      </button>
      {action.type === 'oldestStoneGame' && showOldestStoneGame && (
        <OldestStoneGame
          onClose={() => setShowOldestStoneGame(false)}
          {...action.params}
        />
      )}
      {action.type === 'degradationTypesGame' && showDegradationTypesGame && (
        <DegradationTypesGame
          onClose={() => setShowDegradationTypesGame(false)}
          {...action.params}
        />
      )}
    </>
  )
}
