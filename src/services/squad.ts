import { Formation, Position } from '../interfaces/squad'
import { Player } from '../interfaces/player'

const formationList: string[] = ['4-4-2', '4-3-3']

const squadFormation: Formation[] = [
  {
    formationName: '4-4-2',
    playerPositions: [
      {
        positionName: Position.PK,
        player: new Player(),
      },
      {
        positionName: Position.ZAG,
        player: new Player(),
      },
      {
        positionName: Position.ZAG,
        player: new Player(),
      },
      {
        positionName: Position.LAT,
        player: new Player(),
      },
      {
        positionName: Position.LAT,
        player: new Player(),
      },
      {
        positionName: Position.MD,
        player: new Player(),
      },
      {
        positionName: Position.MD,
        player: new Player(),
      },
      {
        positionName: Position.MD,
        player: new Player(),
      },
      {
        positionName: Position.MD,
        player: new Player(),
      },
      {
        positionName: Position.ATA,
        player: new Player(),
      },
      {
        positionName: Position.ATA,
        player: new Player(),
      },
    ],
  },
  {
    formationName: '4-3-3',
    playerPositions: [
      {
        positionName: Position.PK,
        player: new Player(),
      },
      {
        positionName: Position.ZAG,
        player: new Player(),
      },
      {
        positionName: Position.ZAG,
        player: new Player(),
      },
      {
        positionName: Position.LAT,
        player: new Player(),
      },
      {
        positionName: Position.LAT,
        player: new Player(),
      },
      {
        positionName: Position.MD,
        player: new Player(),
      },
      {
        positionName: Position.MD,
        player: new Player(),
      },
      {
        positionName: Position.MD,
        player: new Player(),
      },
      {
        positionName: Position.ATA,
        player: new Player(),
      },
      {
        positionName: Position.ATA,
        player: new Player(),
      },
      {
        positionName: Position.ATA,
        player: new Player(),
      },
    ],
  },
]

class Squad {
  /**
   * Get Avaliable formations
   */
  getFormationList(): string[] {
    return formationList
  }

  /**
   * Get Squad with formation
   * @param {String} formation Formation to prepare squad
   */
  getFormatedSquad(formation: string): Formation {
    const mySquadFormation = squadFormation.find(
      f => f.formationName === formation
    )
    if (!mySquadFormation) {
      throw new Error('Foramtion not existing')
    }
    return { ...mySquadFormation }
  }
}

export default new Squad()
