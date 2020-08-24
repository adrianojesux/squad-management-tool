import styled from "styled-components";
import colors from "../../styles/colors";

interface TableStyleProps {
  cellspacing: number;
  cellpadding: number;
}

export const Container = styled.table.attrs({
  cellSpacing: 0,
  cellPadding: 0,
})`
  width: 100%;
  min-height: 50px;
  text-align: left;
  background-color: #fff;
  margin-top: 2em;

  th,
  td {
    border: 0px solid black;
    border-collapse: none;
  }

  tr {
    height: 50px;
    font-family: "Roboto", sans-serif;
    margin-top: 4px;

    th {
      & + th {
        border-left: solid 1px ${colors.gray};
      }
    }

    td {
      border-bottom: solid 1px ${colors.gray};
    }

    td,
    th {
      margin: 0;
      padding: 0 16px;
      font-size: 14px;
      font-weight: 600;
      font-family: "Roboto", sans-serif;
    }

    &:hover {
      td {
        background-color: ${colors.gray};
        border-radius: 10px 0 0 10px;
        color: ${colors.purple};
        border-bottom: 0;

        & + td {
          border-radius: 0 10px 10px 0;
        }
      }
    }
  }
`;
