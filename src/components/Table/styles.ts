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
    height: 30px;
    font-family: "Roboto", sans-serif;
    margin-top: 4px;

    & + tr {
      height: 50px;
    }

    th {
      & + th {
        border-left: solid 1px ${colors.gray};
      }
    }

    td {
      border-bottom: solid 1px ${colors.gray};
      transition: 0.3s ease-in-out;

      .content-table {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0;
      }
    }

    td,
    th {
      margin: 0;
      padding: 0 16px;
      font-size: 14px;
      font-weight: 600;
      font-family: "Roboto", sans-serif;
      color: ${colors.dark};
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

        .content-table .actions {
          opacity: 1;
        }
      }
    }
  }
`;
