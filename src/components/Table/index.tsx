import React from "react";

import { Container } from "./styles";

const Table: React.FC = () => {
  return (
    <Container>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>Barcelona</td>
        <td>Barcelona Squad</td>
      </tr>
      <tr>
        <td>Real Madrid</td>
        <td>Real Madrid Squad</td>
      </tr>
      <tr>
        <td>Milan</td>
        <td>Milan Squad</td>
      </tr>
    </Container>
  );
};

export default Table;
