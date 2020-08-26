import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;

  span {
    color: ${colors.dark};
    font-size: 14px;
    font-weight: 600;
  }

  input[type="radio"] + label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: ${colors.light};
    }

    /* On mouse-over, add a grey background color */
    &:hover input ~ .checkmark {
      background-color: ${colors.dark};
    }

    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
      background-color: ${colors.purple};
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    &:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    &:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid ${colors.purple};
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  input[type="radio"]:checked + label {
    background-position: 0 -30px;
  }
`;
