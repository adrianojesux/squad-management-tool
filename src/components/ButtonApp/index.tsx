import React, { MouseEvent, ButtonHTMLAttributes } from 'react'

import { Button } from './styles'

interface ButtonAppProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  onClick: (e: React.MouseEvent) => void
}

const ButtonApp: React.FC<ButtonAppProps> = ({ title, onClick, ...props }) => {
  function handleClick(e: React.MouseEvent) {
    onClick(e)
  }

  return (
    <Button onClick={handleClick} {...props}>
      {title}
    </Button>
  )
}

export default ButtonApp
