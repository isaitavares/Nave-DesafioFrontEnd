import styled, { css } from 'styled-components'

    const Text = styled.p`
        display: flex;
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
        font-family: 'Montserrat', sans-serif;
            ${props => props.naversname && css`
                font-size: 16px;
                font-style: normal;
                line-height: 18px;
                margin: 16px 0 4px 10px;
                display:block;
        `}
            ${props => props.naversjobtitle && css`
                font-size: 16px;
                font-style: normal;
                line-height: 24px;
                margin: 16px 0 4px 10px;
                font-weight: 400;
                display:block;
        `}
        ${props => props.adicionarnavers && css`
                font-size: 24px;
                font-style: normal;
                line-height: 36px;
                font-weight: 600;
                display:inline-block;
                align-items: center;
                text-align: center;
                margin: 0 0 0 3vh;
                @media (max-width: 1024px) {
                    margin: 0 0 0 2vh;  
            }

        `}
`

export default Text