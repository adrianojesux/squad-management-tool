import { Player } from './player'
import { uuid } from 'uuidv4'

export class Squad {
  squad_id: string = ''
  name: string = ''
  team_website: string = ''
  description: string = ''
  team_type: 'real' | 'fantasy' = 'real'
  tags: string[] = []
  formation: string = ''
  players: Array<PlayerPosition> = []

  constructor(props?: Omit<Player, 'id'>, id?: string) {
    if (props) {
      Object.assign(this, props)
    }
    Object.assign(this, props)
    if (!id) {
      this.squad_id = uuid()
    }
  }
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
