import React, { useState } from 'react'

import Panel from './../../components/Panel'
import InputText from './../../components/Input'
import RadioInput from './../../components/RadioInput'
import InputTags from './../../components/InputTags'
import SquadPlain from './../../components/SquadPlain'
import PlayerListItem from '../../components/PlayerListItem'
import SearchPlayer from './../../components/SearchPlayer'

import {
  Container,
  Content,
  Row,
  RowCenter,
  Collumn,
  PlayerList,
} from './styles'
import { Player } from '../../interfaces/player'

const CreateSquad: React.FC = () => {
  const [playersSearch, setPlayersSearch] = useState<Player[]>([])
  const [querySearch, setQuerySearch] = useState<string>('')

  function onSelectPlayer(player: Player) {
    console.log(player)
  }

  return (
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
              <SquadPlain />
            </Collumn>
            <Collumn>
              <SearchPlayer onSelect={onSelectPlayer} />
            </Collumn>
          </Row>
        </Content>
      </Panel>
    </Container>
  )
}

export default CreateSquad
