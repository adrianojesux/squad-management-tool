import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(to bottom, rgb(184, 61, 124), rgb(102, 46, 135));
  border-radius: 15px;
  margin-top: 2em;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: "";
    width: 1px;
    height: 300px;
    background-color: ${colors.gray};
    position: absolute;
    left: 50%;
    bottom: 0;
    top: 0;
  }

  &::before {
    content: "";
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    background: transparent;
    border: solid 1px ${colors.gray};
    border-radius: 100%;
  }
`;

export const BalanceData = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2em 1em;

  h2 {
    color: ${colors.light};
    text-align: center;
  }

  .data {
    display: flex;
    align-items: row;
    justify-content: center;
    margin: 1em 0;

    span {
      width: 50px;
      height: 24px;
      font-weight: 600;
      color: ${colors.light};
      border-bottom: solid 1px ${colors.light};
    }
  }
`;

export const PhotoRounded = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 100%;
  background-color: #fff;
  border: solid 2px ${colors.purple};
  position: relative;
  margin: 0.5em 0;

  &::after {
    content: "";
    width: 135px;
    height: 135px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: dashed 2px ${colors.gray};
    border-radius: 100px;
    position: absolute;
  }
`;
