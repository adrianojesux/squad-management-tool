import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 280px;
  flex: 1;
  min-height: 50px;
  background-color: ${colors.gray};
  border-radius: 10px;
  padding: 4px;
`;

export const TitleList = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: ${colors.dark};
  margin: 16px 0;
`;

export const ListItem = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${colors.white};
  display: flex;
  border-radius: 5px;
  margin-bottom: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;

  h4 {
    font-size: 12px;
    color: ${colors.dark};
    font-weight: 400;
  }

  span {
    font-weight: 700;
    color: ${colors.dark};
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }

  &:hover {
    border: solid 1px ${colors.purple};
  }
`;
