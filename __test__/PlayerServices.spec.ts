import PlayerService from './../src/services/player'

describe('Testing PlayerServices', () => {
  it('should return empty array when query not passed', async () => {
    const players = await PlayerService.searchPlayer('')
    console.log(players)

    expect(players).toEqual([])
  })
})
