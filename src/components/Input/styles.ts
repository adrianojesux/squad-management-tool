import styled from "styled-components";
import colors from "../../styles/colors";

interface ContainerInputProps {
  focused: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  label {
    color: ${(props: ContainerInputProps) =>
      props.focused ? colors.purple : colors.dark};
    font-size: 14px;
    margin: 0.5em 0;
    font-weight: 600;
  }

  input {
    height: 40px;
    border: solid 2px
      ${(props: ContainerInputProps) =>
        props.focused ? colors.purple : colors.gray};
    font-size: 14px;
    color: ${colors.dark};
    border-radius: 5px;
    padding: 0 8px;
    font-family: "Roboto", sans-serif;
  }
`;
