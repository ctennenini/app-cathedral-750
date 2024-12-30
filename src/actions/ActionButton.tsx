'use client'
import { ComponentProps, useState } from 'react'
import { Action } from './actions'
import { OldestStoneGame } from './OldestStoneGame'

export type ActionButtonProps = ComponentProps<'button'> & {
  action: Action
}

export function ActionButton({ action, ...buttonProps }: ActionButtonProps) {
  const [showOldestStoneGame, setShowOldestStoneGame] = useState(false)

  console.log('ActionButton:', { action, otherProps: buttonProps })

  const onClick = () => {
    if (action.type === 'oldestStoneGame') {
      setShowOldestStoneGame(true)
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
    </>
  )
}
