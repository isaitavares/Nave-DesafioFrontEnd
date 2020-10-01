import styled from 'styled-components'

const LoginButton = styled.button`
    height: 40px;
    width: 100%;
    color: white;
    cursor: pointer;
    border: 1px solid; 
    background: black;
    outline: none;
    text-align: center;
    margin: 32px 0px 0px 0px;
    background-size: 200% 100%;
    font-weight:600;
    background-image: linear-gradient( to right, black 50%, white 50%);
    transition: background-position 1s;
        &:hover{
            background-position: 100% 0;
            color: black;            
        }
`;

export default LoginButton
