import React from "react";

import { Container, TitleList, ListItem } from "./styles";

const HighList: React.FC = () => {
  return (
    <div>
      <TitleList>Highest avg age</TitleList>
      <Container>
        <ListItem>
          <h4>Inter Milan</h4>
          <span>31.9</span>
        </ListItem>
        <ListItem>
          <h4>Inter Milan</h4>
          <span>31.9</span>
        </ListItem>
        <ListItem>
          <h4>Inter Milan</h4>
          <span>31.9</span>
        </ListItem>
        <ListItem>
          <h4>Inter Milan</h4>
          <span>31.9</span>
        </ListItem>
        <ListItem>
          <h4>Inter Milan</h4>
          <span>31.9</span>
        </ListItem>
      </Container>
    </div>
  );
};

export default HighList;
