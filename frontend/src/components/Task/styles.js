import styled from "styled-components";

export const Container = styled.li`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  > input {
    background: transparent;
    color: #fff;
    margin-left: 15px;
    border: 0;
    font-size: 15px;
  }
`;

export const CompleteButton = styled.button`
  border: solid 1px #32d460;
  width: 20px;
  height: 20px;
  background: transparent;
  &:hover {
    background: #0b0b0b;
    cursor: pointer;
  }
  > svg {
    fill: #32d460;
  }
`;

export const DescButton = styled.button`
  > svg {
    width: 15px;
    height: 15px;
    fill: #32d460;
  }
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
  margin-left: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  & > textarea {
    margin-top: 15px;
    color: #fff;
    border: none;
    resize: none;
    background: transparent;
  }
  & > svg {
      width: 15px;
      height: 15px;
      fill: #32d460;
    &:hover {
        fill: #f22613;
        cursor: pointer;
    }
  }

  & > label {
    font-size: 12px;
    margin-top: 5px;
  }
`;