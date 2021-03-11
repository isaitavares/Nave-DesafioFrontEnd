import styled, { css } from 'styled-components'

const Icons = styled.img`
margin:auto;
display:block;
    ${props => props.header && css`
        height:37px;
        width:145.12px;
        display:inline-block;
            &:hover{
                    cursor:pointer;            
        }
    `}
    ${props => props.login && css`
        height:60px;
        width:235px;
    `}
    ${props => props.avatarnaver && css`
        height:370px;
        width:100%;
        &:hover{
            cursor: pointer;           
        }
    `}
    ${props => props.deletebutton && css`
        height:18px;
        width:14px;
        display:inline-block;
        margin: 12px 0 0 10px;
        &:hover{
            cursor:pointer;            
        }
    `}
    ${props => props.editbutton && css`
        height:18px;
        width:14px;
        display:inline-block;
        margin: 12px 0 0 16px;
        &:hover{
            cursor:pointer;            
        }
    `}
    ${props => props.ReturnButton && css`
        height:19px;
        width:11px;
        margin: 0;
        display:inline-block;
        align-items: flex-start;
        transition: 0.1s;
        &:hover{
            cursor:pointer;
            height:25px;
            width:15px;           
        }
    `}
`;

export default Icons