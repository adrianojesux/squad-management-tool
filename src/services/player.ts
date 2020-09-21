import { Player } from './../interfaces/player'
import Proxy from './proxy'
import ResponseHolder from '../interfaces/responseHolder'
import playersMock from './../mocks/player.json'

const MOCK = true

class PlayerServices {
  /**
   * Search for player by name
   * @param {String} name Player Name
   */
  async searchPlayer(name: string): Promise<Array<Player>> {
    try {
      if (MOCK) {
        if (name.trim() === '') return []

        const {
          api: { players },
        } = playersMock as ResponseHolder<Player>
        const playersFiltered = players.filter(
          p => p.player_name.indexOf(name) > -1
        )
        console.log(playersFiltered)
        return playersFiltered
      }

      const {
        data: {
          api: { players },
        },
      } = await Proxy.get<ResponseHolder<Player>>(`/search/${name}`)
      return players
    } catch (error) {
      return Promise.reject({ message: 'Failed. Try again later.' })
    }
  }
}

export default new PlayerServices()
