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
      <p data-testid="item-field-name">
        <span>Name:</span> {player.player_name}
      </p>
      <p data-testid="item-field-age">
        <span>Age:</span> {player.age}
      </p>
      <p data-testid="item-field-nationality">
        <span>Nationality:</span> {player.nationality}
      </p>
    </Container>
  )
}

export default memo(PlayerListItem)
