import React from "react";

import { Container, BalanceData, PhotoRounded } from "./styles";

const BalancePlayers: React.FC = () => {
  return (
    <Container>
      <BalanceData>
        <h2>Most picked player</h2>
        <div className="data">
          <PhotoRounded />
          <span>75%</span>
        </div>
      </BalanceData>
      <BalanceData>
        <h2>Less picked player</h2>
        <div className="data">
          <PhotoRounded />
          <span>75%</span>
        </div>
      </BalanceData>
    </Container>
  );
};

export default BalancePlayers;
