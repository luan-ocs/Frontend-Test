import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export const ButtonDiv = styled.div`
    margin-top: 50px;
    width: 100px;
    height: 40px;
    justify-content: center;
    margin-left: 15px;
    align-items: center;
    display: flex;
    background: #2c2c2c;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 0;
    cursor: pointer;
    background: #1c1c1c;
    > svg {
        width: 20px;
        height: 20px;
        fill: #fff;
    }

`;
