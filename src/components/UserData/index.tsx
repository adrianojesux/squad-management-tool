import React from "react";

import { Container, RoundedName, Name } from "./styles";

interface UserDataProps {
  name: string;
  short_name: string;
}

const UserData: React.FC<UserDataProps> = ({ name, short_name }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <RoundedName>{short_name}</RoundedName>
    </Container>
  );
};

export default UserData;
