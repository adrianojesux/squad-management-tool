import styled, { css } from "styled-components";
import colors from "../../styles/colors";

const boxShadow = css`
  -webkit-box-shadow: 0px 0px 13px -11px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 13px -11px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 13px -11px rgba(0, 0, 0, 0.41);
`;

export const Container = styled.div`
  width: 100%;
  min-width: 100px;
  min-height: 200px;
  background-color: #fff;
  border-radius: 10px;
  ${boxShadow}
`;

export const PanelHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: solid 1px ${colors.gray};

  h1 {
    color: ${colors.text_color};
    font-size: 24px;
  }
`;

export const PanelBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;
