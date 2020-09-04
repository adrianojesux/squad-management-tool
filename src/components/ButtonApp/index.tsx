import React, { MouseEvent } from 'react'

import { Button } from './styles'

interface ButtonAppProps {
  title: string
  onClick: (e: React.MouseEvent) => void
}

const ButtonApp: React.FC<ButtonAppProps> = ({ title, onClick }) => {
  function handleClick(e: React.MouseEvent) {
    onClick(e)
  }

  return <Button onClick={handleClick}>{title}</Button>
}

export default ButtonApp
