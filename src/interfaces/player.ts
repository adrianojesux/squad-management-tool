import colors from '../styles/colors'
import { uuid } from 'uuidv4'

export class Player {
  readonly player_id: number | string = -1
  player_name: string = ''
  age: number = 0
  firstname: string = ''
  lastname: string = ''
  position: string = ''
  nationality: string = ''

  constructor(props?: Omit<Player, 'id'>, id?: string) {
    if (props) {
      Object.assign(this, props)
    }
    Object.assign(this, props)
    if (!id) {
      this.player_id = uuid()
    }
  }
}
