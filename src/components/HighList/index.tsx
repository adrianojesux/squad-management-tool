import React from 'react'
import { Player } from '../../interfaces/player'

import { Container, TitleList, ListItem } from './styles'
export interface SquadInfo {
  squad_name: string
  age_midle: number
}

interface HighListProps {
  squads_info?: SquadInfo[]
  players_info?: Player[]
}

const HighList: React.FC<HighListProps> = ({ squads_info, players_info }) => {
  return (
    <div>
      <TitleList>Highest avg age</TitleList>
      <Container>
        {squads_info &&
          squads_info.map(info => (
            <ListItem>
              <h4>{info.squad_name}</h4>
              <span>{info.age_midle.toFixed(1)}</span>
            </ListItem>
          ))}
        {players_info &&
          players_info.map(player => (
            <ListItem>
              <h4>{player.player_name}</h4>
              <span>{player.age}</span>
            </ListItem>
          ))}
      </Container>
    </div>
  )
}

export default HighList
