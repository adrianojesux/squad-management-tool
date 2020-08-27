import React, { useState, useEffect, useCallback } from 'react'

import { Container, PlayerList } from './styles'
import { Player } from '../../interfaces/player'
import InputText from './../Input'
import PlayerListItem from './../PlayerListItem'

import PlayerService from './../../services/player'

interface SearchPlayerProps {
  onSelect: (player: Player) => void
  disabled?: boolean
}

const SearchPlayer: React.FC<SearchPlayerProps> = ({ onSelect, disabled }) => {
  const [playersSearch, setPlayersSearch] = useState<Player[]>([])
  const [querySearch, setQuerySearch] = useState<string>('')

  useEffect(() => {
    if (querySearch && querySearch.trim() !== '' && querySearch.length > 3) {
      getPlayer(querySearch)
    } else {
      setPlayersSearch([])
    }
  }, [querySearch])

  useEffect(() => {
    setQuerySearch('')
    setPlayersSearch([])
  }, [disabled])

  async function getPlayer(name: string) {
    const players = await PlayerService.searchPlayer(name)
    setPlayersSearch(players)
  }

  const onSelectPlayer = useCallback((player: Player) => {
    onSelect(player)
    setPlayersSearch([])
    setQuerySearch('')
  }, [])

  return (
    <Container>
      <InputText
        onChange={e => setQuerySearch(e.target.value)}
        value={querySearch}
        label="Search Players"
        placeHolder="Player name"
        fieldType="input"
        id="input-team-web-site"
        disabled={disabled}
      />
      <PlayerList>
        {playersSearch &&
          playersSearch.map(p => (
            <PlayerListItem
              player={p}
              onSelect={onSelectPlayer}
              key={p.player_id}
            />
          ))}
      </PlayerList>
    </Container>
  )
}

export default SearchPlayer
