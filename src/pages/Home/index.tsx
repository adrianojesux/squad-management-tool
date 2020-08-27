import React from 'react'
import { MdAdd } from 'react-icons/md'

import Panel from './../../components/Panel'
import Table from './../../components/Table'
import HighList from './../../components/HighList'
import BalancePlayers from './../../components/BalancePlayers'

import { Container, ButtonAdd, Row } from './styles'
import { useHistory } from 'react-router-dom'

const Home: React.FC = () => {
  const history = useHistory()

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
        <Table squads={[]} />
      </Panel>
      <div />
      <div>
        <Panel title="Top 5">
          <Row>
            <HighList />
            <HighList />
          </Row>
        </Panel>
        <BalancePlayers />
      </div>
    </Container>
  )
}

export default Home
