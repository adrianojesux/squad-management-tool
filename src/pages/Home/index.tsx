import React, { useState, useEffect } from 'react'
import { MdAdd } from 'react-icons/md'

import Panel from './../../components/Panel'
import Table from './../../components/Table'
import HighList, { SquadInfo } from './../../components/HighList'
import BalancePlayers from './../../components/BalancePlayers'

import { Container, ButtonAdd, Row } from './styles'
import { useHistory } from 'react-router-dom'
import { ApplicationState } from '../../store'
import { useSelector } from 'react-redux'
import { Squad } from '../../interfaces/squad'
import { Player } from '../../interfaces/player'

const Home: React.FC = () => {
  const history = useHistory()
  const [squadList, setSquadList] = useState<Array<Squad>>([])

  const { data: squads } = useSelector((state: ApplicationState) => state.squad)

  function getPlayersMustOld() {
    let players: Player[] = []
    for (let i = 0; i < squadList.length; i++) {
      for (let j = 0; j < squadList[i].players.length; j++) {
        const { player } = squadList[i].players[j]
        players.push(player)
      }
    }
    return players.sort((a, b) => a.age - b.age).splice(0, 5)
  }

  function getSquadAvgOldPlayer() {}

  useEffect(() => {
    setSquadList(squads)
  }, [squads])

  function openCreateSquadPage() {
    history.push('/create')
  }

  return (
    <Container>
      <Panel
        title="My teams"
        action={
          <ButtonAdd onClick={openCreateSquadPage}>
            <MdAdd size="22" />
          </ButtonAdd>
        }
      >
        <Table squads={squadList} />
      </Panel>
      <div />
      <div>
        <Panel title="Top 5">
          <Row>
            <HighList players_info={getPlayersMustOld()} />
            <HighList players_info={getPlayersMustOld()} />
          </Row>
        </Panel>
        <BalancePlayers />
      </div>
    </Container>
  )
}

export default Home
