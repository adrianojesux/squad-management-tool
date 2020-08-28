import React, { useState, useEffect } from 'react'

import Panel from './../../components/Panel'
import InputText from './../../components/Input'
import RadioInput from './../../components/RadioInput'
import InputTags from './../../components/InputTags'
import SquadPlain from './../../components/SquadPlain'
import PlayerListItem from '../../components/PlayerListItem'
import SearchPlayer from './../../components/SearchPlayer'
import SquadContext from './contex'

import { Container, Content, Row, RowCenter, Collumn } from './styles'
import { Player } from '../../interfaces/player'
import { Formation } from '../../interfaces/squad'

const CreateSquad: React.FC = () => {
  const [squad, setSquad] = useState<Formation>()
  const [playerSelected, setPlayerSelected] = useState<Player>()
  const [playerPicked, setPlayerPicked] = useState<Player>()

  useEffect(() => {
    console.log('SQUAD ==> ', squad)
  }, [squad])

  useEffect(() => {
    if (playerSelected && squad) {
      const squadCopy: Formation = { ...squad }
      squadCopy.playerPositions[
        squadCopy.playerPositions.findIndex(
          p => p.player.player_id === playerPicked?.player_id
        )
      ].player = { ...playerSelected }
      setSquad({ ...squadCopy })
    }
  }, [playerSelected])

  function onSelectPlayer(player: Player) {
    setPlayerSelected({ ...player })
  }

  function onPickPlayer(player: Player) {
    setPlayerPicked({ ...player })
  }

  function onSquadSelect(squad: Formation) {
    setSquad({ ...squad })
    setPlayerSelected(undefined)
  }

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
                  onChange={e => console.log(e.target.value)}
                  label="Team name"
                  placeHolder="Type name your team"
                  fieldType="input"
                />
                <InputText
                  onChange={e => console.log(e.target.value)}
                  label="Description"
                  id="input-team-description"
                  placeHolder="Type name your team"
                  fieldType="text_area"
                />
              </Collumn>
              <Collumn>
                <InputText
                  onChange={e => console.log(e.target.value)}
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
                />
                <InputTags label="Tags" placeHolder="" />
              </Collumn>
            </Row>
            <RowCenter>
              <h3>Configure Squad</h3>
            </RowCenter>
            <Row>
              <Collumn>
                <SquadPlain squad={squad} />
              </Collumn>
              <Collumn>
                <SearchPlayer
                  onSelect={onSelectPlayer}
                  disabled={!playerPicked}
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
