import styled, { css } from 'styled-components'
import colors from '../../styles/colors'

const formationAreas = css`
  grid-template-areas:
    'ata ata ata ata'
    'md md md md'
    'vol vol vol vol'
    'def def def def'
    'pk pk pk pk';
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1em 0;

  label {
    color: ${colors.font_dark};
    font-size: 14px;
    margin: 0.5em 0;
    font-weight: 600;
    margin: 1em 2em 1em 0;
  }
`

export const InputSelect = styled.select`
  height: 40px;
  width: 150px;
  border: solid 1px ${colors.gray};
  font-size: 14px;
  color: ${colors.dark};
  border-radius: 5px;
  padding: 0 8px;
  font-family: 'Roboto', sans-serif;
  margin: 1em 0;
  position: relative;

  &::placeholder {
    font-size: 14px;
    color: #ccc;
  }

  option {
    height: 40px;
    background-color: ${colors.gray};
  }
`
export const Camp = styled.div`
  width: 450px;
  height: 700px;
  background: linear-gradient(to bottom, rgb(184, 61, 124), rgb(102, 46, 135));
  margin: 1em 0;
  border-radius: 5px;
  position: relative;
  display: grid;
  ${formationAreas}

  &::after {
    content: '';
    width: 450px;
    height: 1px;
    background-color: rgb(233, 227, 233);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 50%;
  }

  &::before {
    content: '';
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
`

export const PlayerItemContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ce9bbf;
  border-radius: 100%;
  margin: 1em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${colors.dark};
  position: relative;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    width: 66px;
    height: 66px;
    top: -6px;
    left: -6px;
    border-radius: 100%;
    border: dashed 2px #ce9bbf;
  }
`
interface PlayerItemContainerProps {
  areaName: string
}

export const CampArea = styled.div`
  grid-area: ${(props: PlayerItemContainerProps) => props.areaName};
  display: flex;
  justify-content: space-around;
  align-items: center;
`
