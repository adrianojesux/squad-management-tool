import React, { memo } from 'react'

import { Container } from './styles'

import { Player } from './../../interfaces/player'

interface PlayerListItemProps {
  player: Player
  onSelect?: (player: Player) => void
}

const PlayerListItem: React.FC<PlayerListItemProps> = ({
  player,
  onSelect,
}) => {
  function handleSelect() {
    if (typeof onSelect == 'function') onSelect(player)
  }

  return (
    <Container onClick={handleSelect}>
      <p>
        <span>Name:</span> {player.player_name}
      </p>
      <p>
        <span>Age:</span> {player.age}
      </p>
      <p>
        <span>Nacionality:</span> {player.nationality}
      </p>
    </Container>
  )
}

export default memo(PlayerListItem)
