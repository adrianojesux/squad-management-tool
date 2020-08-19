import styled, { css } from "styled-components";
import colors from "./../../styles/colors";

const bgGradient = css`
  background: linear-gradient(to right, rgb(191, 14, 79), rgb(139, 31, 110));
`;

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 8px 35px;
  ${bgGradient}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleApp = styled.h2`
  font-size: 18px;
  color: ${colors.light};
`;
