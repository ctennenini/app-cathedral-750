import { ComponentProps } from 'react'
import { Action } from './actions'

export type ActionButtonProps = ComponentProps<'button'> & {
  action: Action
}

export function ActionButton({ action, ...otherProps }: ActionButtonProps) {
  const onClick = () => {
    if (action.type === 'quiz') {
      // redirect(target)
    }
  }

  return (
    <button
      onClick={onClick}
      {...otherProps}
    >
      {action.label}
    </button>
  )
}
