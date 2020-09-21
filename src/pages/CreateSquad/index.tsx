import React, { useState, useEffect, useCallback, useRef } from 'react'

import Panel from './../../components/Panel'
import InputText from './../../components/Input'
import RadioInput, { Field } from './../../components/RadioInput'
import InputTags from './../../components/InputTags'
import SquadPlain from './../../components/SquadPlain'
import ButtonApp from './../../components/ButtonApp'
import PlayerListItem from '../../components/PlayerListItem'
import SearchPlayer from './../../components/SearchPlayer'
import SquadContext from './contex'
import { addSquad } from './../../store/ducks/squad/actions'

import { Container, Content, Row, RowCenter, Collumn } from './styles'
import { Player } from '../../interfaces/player'
import { Formation, Squad } from '../../interfaces/squad'
import { uuid } from 'uuidv4'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const CreateSquad: React.FC = () => {
  const [squadFormation, setSquadFormation] = useState<Formation>()
  const [mySquad, setMySquad] = useState<Squad>()
  const [playerSelected, setPlayerSelected] = useState<Player>()
  const [playerPicked, setPlayerPicked] = useState<Player>()
  const [teamName, setTeamName] = useState('')
  const [teamDescription, setTeamDescription] = useState('')
  const [teamWebsite, setTeamWebsite] = useState('')
  const [teamType, setTeamType] = useState<'real' | 'fantasy'>()
  const [teamFormation, setTeamFormation] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (playerSelected && squadFormation) {
      const squadCopy: Formation = { ...squadFormation }
      squadCopy.playerPositions[
        squadCopy.playerPositions.findIndex(
          p => p.player.player_id === playerPicked?.player_id
        )
      ].player = { ...playerSelected }
      setSquadFormation({ ...squadCopy })
    }
  }, [playerSelected])

  const enableSaveTeam = useCallback((): boolean => {
    if (
      teamName?.trim() === '' ||
      teamDescription?.trim() === '' ||
      teamWebsite?.trim() === '' ||
      teamType ||
      teamFormation.trim() === ''
    ) {
      return false
    }

    if (!squadFormation) {
      return false
    }

    for (let i = 0; i < squadFormation?.playerPositions?.length; i++) {
      const player = squadFormation?.playerPositions[i]
      if (player.player.player_name.trim() === '') {
        return false
      }
    }

    return true
  }, [mySquad, squadFormation])

  const onSelectPlayer = useCallback((player: Player) => {
    setPlayerSelected({ ...player })
  }, [])

  const onPickPlayer = useCallback((player: Player) => {
    setPlayerPicked({ ...player })
    searchInputRef.current?.focus()
  }, [])

  const onSquadSelect = useCallback((squad: Formation) => {
    setSquadFormation({ ...squad })
    setTeamFormation(squad.formationName)
    setPlayerSelected(undefined)
  }, [])

  const handleChangeTeamName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTeamName(event.target.value)
    },
    []
  )

  const handleChangeTeamDescription = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTeamDescription(event.target.value)
    },
    []
  )

  const handleChangeTeamWebsite = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTeamWebsite(event.target.value)
    },
    []
  )

  function saveTeam() {
    alert('Save Team')
    dispatch(
      addSquad({
        squad_id: uuid(),
        name: teamName,
        description: teamDescription,
        team_website: teamWebsite,
        team_type: teamType == 'real' ? 'real' : 'fantasy',
        formation: teamFormation,
        players: squadFormation?.playerPositions || [],
        tags: [],
      })
    )
    history.goBack()
  }

  const handleChangeTeamType = useCallback(({ value }: Field) => {
    console.log(value)
    setTeamType(value === 'real' ? 'real' : 'fantasy')
  }, [])

  return (
    <SquadContext.Provider value={{ onPickPlayer, onSquadSelect }}>
      <Container>
        <Panel title="Create your squad">
          <Content>
            <RowCenter>
              <h3>Team information</h3>
            </RowCenter>
            <Row>
              <Collumn>
                <InputText
                  id="input-team-name"
                  onChange={handleChangeTeamName}
                  label="Team name"
                  placeHolder="Type name your team"
                  fieldType="input"
                />
                <InputText
                  onChange={handleChangeTeamDescription}
                  label="Description"
                  id="input-team-description"
                  placeHolder="Type name your team"
                  fieldType="text_area"
                />
              </Collumn>
              <Collumn>
                <InputText
                  onChange={handleChangeTeamWebsite}
                  label="Team website"
                  placeHolder="http://mywebsite.com"
                  fieldType="input"
                  id="input-team-web-site"
                />
                <RadioInput
                  title="Team type"
                  name="team-type"
                  fields={[
                    {
                      title: 'Real',
                      value: 'real',
                    },
                    {
                      title: 'Fantasy',
                      value: 'fantasy',
                    },
                  ]}
                  onChange={handleChangeTeamType}
                />
                <InputTags label="Tags" placeHolder="" />
              </Collumn>
            </Row>
            <RowCenter>
              <h3>Configure Squad</h3>
            </RowCenter>
            <Row>
              <Collumn>
                <SquadPlain squad={squadFormation} />
                <ButtonApp
                  title="SAVE"
                  onClick={saveTeam}
                  disabled={!enableSaveTeam()}
                />
              </Collumn>
              <Collumn>
                <SearchPlayer
                  onSelect={onSelectPlayer}
                  disabled={!playerPicked}
                  ref={searchInputRef}
                />
              </Collumn>
            </Row>
          </Content>
        </Panel>
      </Container>
    </SquadContext.Provider>
  )
}

export default CreateSquad
