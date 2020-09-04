import styled from 'styled-components'
import colors from '../../styles/colors'

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${colors.purple};
  text-align: center;
  border: 0;
  font-size: 16px;
  color: ${colors.light};
  font-weight: 600;
  border-radius: 5px;
  transition: ease-in-out 0.5s;

  &:hover {
    background-color: ${colors.primary};
    transform: scale(0.99);
    color: ${colors.light};
  }
`
