import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  span {
    color: ${colors.font_dark};
    font-size: 14px;
    margin: 0.5em 0;
    font-weight: 600;
  }

  div.content-input {
    & {
      position: relative;
    }

    input[type='radio'] {
      position: absolute;
      visibility: hidden;
    }

    label {
      display: inline-block;
      position: relative;
      font-weight: normal;
      font-size: 14px;
      padding: 8px 8px 8px 40px;
      margin: 10px 5em 10px 0;
      color: #ccc;
      z-index: 9;
      cursor: pointer;
      transition: all 0.25s linear;

      span {
        font-size: 14px;
        font-weight: normal;
        color: #ccc;
      }
    }

    .check {
      display: block;
      position: absolute;
      border: 1px solid #ccc;
      border-radius: 100%;
      height: 25px;
      width: 25px;
      top: 4px;
      left: 0;
      z-index: 5;
      transition: border 0.25s linear;
      -webkit-transition: border 0.25s linear;

      &::before {
        display: block;
        position: absolute;
        content: '';
        border-radius: 100%;
        height: 15px;
        width: 15px;
        top: 4px;
        left: 4px;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
      }
    }

    input[type='radio']:checked ~ .check::before {
      background: ${colors.purple};
    }

    input[type='radio']:checked ~ .check > .inside {
      background: ${colors.purple};
    }

    input[type='radio']:checked ~ span {
      color: ${colors.purple};
    }
  }
`
