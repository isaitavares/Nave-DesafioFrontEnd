import styled, { css } from 'styled-components'

const Label = styled.label`

            ${props => props.labellogin && css`
                display: block;
                margin-top:32px;
                top:0%;
                font-weight:600;
                font-family: 'Montserrat', sans-serif;
                font-size:16px;
                line-height:18px;        
            `}
            ${props => props.labelnaver && css`
                font-family: 'Montserrat', sans-serif;
                font-size:14px;
                line-height:18px;
                font-weight:600;
                style:normal;
                display:block;
                text-align: left;
                margin-top: 5px;       
            `}
`
export default Label;