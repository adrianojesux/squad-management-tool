import React from "react";
import Panel from "./../../components/Panel";

import { Container } from "./styles";

const Action: React.FC = () => {
  return <button type="button">Teste</button>;
};

const Home: React.FC = () => {
  return (
    <Container>
      <Panel title="My teams" action={<Action />}>
        <Action />{" "}
      </Panel>
      <div />
      <Panel title="My teams" />
    </Container>
  );
};

export default Home;
