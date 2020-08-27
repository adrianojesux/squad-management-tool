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
