import React, { ReactElement } from "react";

import { Container, PanelHeader, PanelBody } from "./styles";

interface PanelProps {
  title: string;
  action?: ReactElement;
}

const Panel: React.FC<PanelProps> = ({ children, title, action }) => {
  return (
    <Container>
      <PanelHeader>
        <h1>Title</h1>
        {action}
      </PanelHeader>
      <PanelBody>{children}</PanelBody>
    </Container>
  );
};

export default Panel;
