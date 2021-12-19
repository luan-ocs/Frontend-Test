import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
  padding: 20px;
  background: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  outline: 0;
  background: #1c1c1c;
  > svg {
    fill: #fff;
    width: 20px;
    height: 20px;
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;

  > input {
    background: transparent;
    color: #fff;
    margin-left: 15px;
    border: solid 1px black;
    font-size: 20px;
    outline: none;
    margin-bottom: 15px;
  }

  > svg {
    margin-bottom: 15px;
    width: 20px;
    &:hover {
      fill: #f22613;
      cursor: pointer;
    }
  }
`;
