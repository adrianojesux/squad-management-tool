import React, { useState, useCallback, useContext, useEffect } from 'react'
import { MdAdd } from 'react-icons/md'

import SquadService from './../../services/squad'

import {
  Container,
  InputSelect,
  Row,
  Camp,
  CampArea,
  PlayerItemContainer,
} from './styles'
import { Player } from '../../interfaces/player'
import colors from '../../styles/colors'

import SquadContext from './../../pages/CreateSquad/contex'
import { Formation, Position } from '../../interfaces/squad'

interface SquadPlainProps {
  squad?: Formation
}

const SquadPlain: React.FC<SquadPlainProps> = ({ squad: squadFormation }) => {
  const { onPickPlayer, onSquadSelect } = useContext(SquadContext)
  const [formations, setFormations] = useState<string[]>([])

  useEffect(() => {
    const formationsList = SquadService.getFormationList()
    setFormations(formationsList)
  }, [])

  function handleChangeSelectFormation(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    const { value } = event.target
    const formationSelected = SquadService.getFormatedSquad(value)
    console.log(formationSelected)
    onSquadSelect({ ...(formationSelected as Formation) })
  }

  function handlePickPlayer(player: Player): void {
    onPickPlayer({ ...player })
  }

  return (
    <Container>
      <Row>
        <label htmlFor="">Formation</label>
        <InputSelect onChange={handleChangeSelectFormation}>
          <option value="">-- select ---</option>
          {formations.map(formation => (
            <option value={formation} key={formation}>
              {formation}
            </option>
          ))}
        </InputSelect>
      </Row>
      <Camp>
        <CampArea areaName="pk">
          {squadFormation &&
            squadFormation.playerPositions
              .filter(p => p.positionName === Position.PK)
              ?.map(p => (
                <PlayerItem
                  player={p.player}
                  onClick={handlePickPlayer}
                  key={p.player.player_id}
                />
              ))}
        </CampArea>
        <CampArea areaName="def">
          {squadFormation &&
            squadFormation.playerPositions
              .filter(
                p =>
                  p.positionName === Position.ZAG ||
                  p.positionName === Position.LAT
              )
              ?.map(p => (
                <PlayerItem
                  player={p.player}
                  onClick={handlePickPlayer}
                  key={p.player.player_id}
                />
              ))}
        </CampArea>
        <CampArea areaName="md">
          {squadFormation &&
            squadFormation.playerPositions
              .filter(p => p.positionName === Position.MD)
              ?.map(p => (
                <PlayerItem
                  player={p.player}
                  onClick={handlePickPlayer}
                  key={p.player.player_id}
                />
              ))}
        </CampArea>
        <CampArea areaName="ata">
          {squadFormation &&
            squadFormation.playerPositions
              .filter(p => p.positionName === Position.ATA)
              ?.map(p => (
                <PlayerItem
                  player={p.player}
                  onClick={handlePickPlayer}
                  key={p.player.player_id}
                />
              ))}
        </CampArea>
      </Camp>
    </Container>
  )
}

interface PlayerItemProps {
  player: Player
  onClick: (player: Player) => void
}

const PlayerItem: React.FC<PlayerItemProps> = ({ player, onClick }) => {
  function getPrevName(): string {
    const [name, last_name] = player.player_name.split(' ')
    return name[0] + last_name[0]
  }

  return (
    <PlayerItemContainer onClick={() => onClick(player)}>
      {player && player.player_name === '' && (
        <MdAdd size={20} color={colors.gray} />
      )}
      {player && player.player_name !== '' && <h3>{getPrevName()}</h3>}
    </PlayerItemContainer>
  )
}

export default SquadPlain
