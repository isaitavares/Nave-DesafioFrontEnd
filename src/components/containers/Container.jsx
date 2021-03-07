import styled, { css } from 'styled-components'

export const ContentContainer = styled.div`
    height: 100vh;
    width: 100%;
    margin:0;
    padding:0;
    display:flex; 
    align-items: center;
    justify-content:center;
        ${props => props.home && css`
            margin:20px 0;
            justify-content:space-between;
            display:inline-flex;
            align-content: space-between;
            box-sizing: border-box;
            padding: 0 32px 0 32px;
            align-items: flex-start;
            flex-flow: wrap row;

                @media (max-width: 1024px) {
                    flex-direction:column;
                    align-items: center;
                    justify-content: center;
                    display:flex;
                    flex-flow:wrap;
    }          
    `}
    ${props => props.addeditnaver && css`
            margin:auto 0; 
            width: 100%;
            height: 100vh;
            display:flex;
            justify-content: center;
            text-align: center;

                @media (max-width: 1024px) {
                    flex-direction:column;
                    align-items: center;
                    justify-content: center;
                    display:flex;
                    flex-flow:wrap;
    }          
    `}    
    
`
        export const NaversFormsContainer = styled(ContentContainer)`
        margin:0 0 15px 0;
        width: 100%;
        height: 550px;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: center;
        box-sizing: border-box;

            @media (max-width: 1024px) {
                flex-direction:column;
                align-items: center;
                justify-content: center;
                display:flex;
                flex-flow:wrap;
                height: 400px;
        }             

    `
    export const PageTitleNaversContainer = styled(ContentContainer)`
    margin:0 0 0 0;
    width: 100%;
    height: 40px;
    display:flex;
    justify-content: flex-start;
    text-align: center;

        @media (max-width: 1024px) {
            flex-direction:column;
            align-items: center;
            justify-content: center;
            display:flex;
            flex-flow:wrap;
    }             

`
export const SectionNaversContainer = styled(ContentContainer)`
    margin:0 0 15px 0;
    width: 45%;
    height: 380px;
    display:flex;
    justify-content: space-between;
    text-align: center;
    flex-direction:column;
    max-width: 650px;
    min-width: 300px;
    margin-bottom: 100px;

        @media (max-width: 1024px) {
            flex-direction:column;
            align-items: center;
            justify-content: center;
            display:flex;
            flex-flow:wrap;
    }             

`
export const ButtonNaversContainer = styled(ContentContainer)`
    width: 100%;
    height: 40px;
    display:flex;
    margin: 15px auto;
    justify-content: flex-end;

        @media (max-width: 1024px) {
            justify-content: center;
            
    }             

`
export const NaversContainer = styled.div`
    width:300px;
    height:420px;
    margin: 0 0 0 0;
    display: block;
    justify-content: space-between;
        
`
export const PageTitleContainer = styled.div`
    width:100%;
    height:5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0 20px 0;
    padding: 0 32px 0 32px;
`
export const LoginContainer = styled.div`
    height:408px;
    width:28rem;
    border: 1px solid #212121;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:32px;
    padding: 40px 32px; 
`
export const HomeContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: white;
    margin: 0;
    padding: 0;
`
export const HRContainer = styled.hr`
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;

`