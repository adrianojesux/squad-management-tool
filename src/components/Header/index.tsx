import React from "react";

import { Container, TitleApp } from "./styles";
import UserData from "../UserData";

const Header: React.FC = () => {
  return (
    <Container>
      <TitleApp>Squad Management Tool</TitleApp>
      <UserData name="Adriano Jesus" short_name="ad" />
    </Container>
  );
};

export default Header;
