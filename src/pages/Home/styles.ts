import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 10%);
  display: grid;
  grid-template-columns: 1.4fr 0.1fr 1.4fr;
  padding: 35px 16px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const ButtonAdd = styled.button`
  width: 40px;
  height: 40px;
  background: linear-gradient(to top, rgb(139, 31, 110), rgb(178, 60, 125));
  border: none;
  border-radius: 10px;
  color: #fff;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
