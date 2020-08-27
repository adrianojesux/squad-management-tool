import styled from 'styled-components'
import colors from './../../styles/colors'

export const Container = styled.div`
  width: calc(100vw - 10%);
  padding: 35px 16px;
  margin: 0 auto;
  box-sizing: border-box;
`
export const Content = styled.div`
  width: calc(100vw - 20%);
  padding: 35px 16px;
  margin: 0 auto;
  box-sizing: border-box;
`

export const RowCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 16px;
    color: ${colors.dark};
    font-weight: 600;
    text-transform: uppercase;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Collumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1em;
  padding: 0.5em 1em;
`

export const PlayerList = styled.div`
  width: 100%;
  min-height: 100px;
  flex: 1;
  display: flex;
  flex-direction: column;
`
