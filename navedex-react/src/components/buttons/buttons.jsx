import styled, { css } from 'styled-components'

const Button = styled.button`    
        
        ${props => props.login && css`
            height: 40px;
            width: 100%;
            margin: 32px 0px 0px 0px;
            color: white;
            cursor: pointer;
            border: 1px solid;
            outline: none;
            text-align: center;
            margin: 32px 0px 0px 0px;
            background-size: 200% 100%;
            font-weight:600;
            font-family: 'Montserrat', sans-serif;
            background-image: linear-gradient( to right, black 50%, white 50%);
            transition: background-position 1s;            
                &:hover{
                    background-position: 100% 0;
                    color: black;            
        }
    `}

    ${props => props.header && css`
            height: 24px;
            cursor: pointer;
            outline: none;
            text-align: center;
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            font-weight:600;
            font-family: 'Montserrat', sans-serif;
            margin: 32px 42px 32px 32px;
                &:hover{
                    font-weight:800;                   
                    
        }
    `}

    ${props => props.titlehome && css`
            width:176px;
            height: 40px;
            cursor: pointer;
            outline: none;
            text-align: center;
            font-weight:600;
            color: white;
            border: 1px solid;
            font-family: 'Montserrat', sans-serif;
            background-size: 200% 100%;
            background-image: linear-gradient( to right, black 50%, white 50%);
            transition: background-position 1s;            
                &:hover{
                    background-position: 100% 0;
                    color: black;            
        }
    `}
    ${props => props.salvarbutton && css`
            width:176px;
            height: 40px;
            cursor: pointer;
            outline: none;
            text-align: center;
            font-weight:600;
            color: white;
            border: 1px solid;
            font-family: 'Montserrat', sans-serif;
            background-size: 200% 100%;
            background-image: linear-gradient( to right, black 50%, white 50%);
            transition: background-position 1s;            
                &:hover{
                    background-position: 100% 0;
                    color: black;            
        }
    `}
`

export default Button
