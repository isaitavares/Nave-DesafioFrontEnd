import styled from 'styled-components'

const Header = styled.header`
height:85px;
width: 100%;
background: white;
display: flex;
align-items: center;
justify-content: space-between;
    @media (max-width: 540px) {
        height:55px;
    }    
`
export default Header;