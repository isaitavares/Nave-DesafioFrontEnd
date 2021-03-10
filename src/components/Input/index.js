import styled, { css } from 'styled-components'

const Input = styled.input`
    margin: 0;
    padding: 0;

    ${props => props.login && css`
        height:40px;
        width: 100%;
        font-size: 18px;
        font-weight: 200;
        line-height: 24px;
        text-align: left;
        padding-left: 8px;
        margin-top: 5px;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;                
        `}
    ${props => props.adicionarnaverform && css`
        height:40px;
        width: 280px;
        font-size: 18px;
        font-weight: 200;
        line-height: 24px;
        text-align: left;
        padding-left: 8px;
        margin-top: 5px;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box; 
        display:block;               
        `}
`;

export default Input