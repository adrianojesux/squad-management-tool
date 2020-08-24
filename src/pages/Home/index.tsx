import React from "react";
import Panel from "./../../components/Panel";
import Table from "./../../components/Table";

import { Container } from "./styles";

const Action: React.FC = () => {
  return <button type="button">Teste</button>;
};

const Home: React.FC = () => {
  return (
    <Container>
      <Panel title="My teams" action={<Action />}>
        <Table />
      </Panel>
      <div />
      <Panel title="My teams" />
    </Container>
  );
};

export default Home;
