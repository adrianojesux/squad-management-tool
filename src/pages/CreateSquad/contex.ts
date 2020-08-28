import { Formation } from './../../interfaces/squad'
import { Player } from './../../interfaces/player'
import { createContext } from 'react'

interface SquadContext {
  onPickPlayer: (player: Player) => void
  onSquadSelect: (squad: Formation) => void
}

const context = createContext<SquadContext>({
  onPickPlayer: () => {},
  onSquadSelect: () => {},
})

export default context
