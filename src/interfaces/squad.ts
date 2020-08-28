import { Player } from './player'

export interface Squad {
  name: string
  team_website: string
  description: string
  team_type: 'real' | 'fantasy'
  tags: string[]
  formation: string
  players: Array<Player>
}

export enum Position {
  PK = 'pk',
  ZAG = 'zag',
  LAT = 'lat',
  MD = 'md',
  ATA = 'ata',
}
export interface PlayerPosition {
  positionName: Position
  player: Player
}
export interface Formation {
  formationName: string
  playerPositions: PlayerPosition[]
}
