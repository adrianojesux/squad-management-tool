import React from "react";

import Panel from "./../../components/Panel";
import InputText from "./../../components/Input";
import RadioInput from "./../../components/RadioInput";

import { Container, Content, Row, RowCenter, Collumn } from "./styles";

const CreateSquad: React.FC = () => {
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
                onChange={(e) => console.log(e.target.value)}
                label="Team name"
                placeHolder="Type name your team"
              />
            </Collumn>
            <Collumn>
              <InputText
                onChange={(e) => console.log(e.target.value)}
                label="Team name"
                placeHolder="Type name your team"
              />
              <RadioInput />
            </Collumn>
          </Row>
        </Content>
      </Panel>
    </Container>
  );
};

export default CreateSquad;
