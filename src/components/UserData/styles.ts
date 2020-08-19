import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  min-width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Name = styled.h3`
  font-size: 12px;
  color: ${colors.light};
  margin-right: 1em;
`;

export const RoundedName = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
