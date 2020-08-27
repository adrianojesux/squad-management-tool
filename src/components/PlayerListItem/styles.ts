import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  border: dashed 1px ${colors.gray};
  background: linear-gradient(to top, #e6e6e6, #fdfdfd);
  border-spacing: 5px;
  padding: 16px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin: 0.5em 0;
  cursor: pointer;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.purple};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 800;
    color: ${colors.font_dark};
    margin: 4px 8px 4px 0;
  }
`
