import styled from "styled-components";
import colors from "./../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export const TextFooter = styled.p`
  color: #666;
  font-size: 12px;
  font-weight: 600;
`;
