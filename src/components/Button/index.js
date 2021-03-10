import styled from 'styled-components'
import {layout,flexbox,color,typography,border,space } from 'styled-system';


// fontFamily: 'Montserrat', sans-serif;
const Button = styled.a`
    cursor:pointer;
    ${space};
    ${color};
    ${flexbox};
    ${layout};
    ${typography};
    ${border};
`

export default Button
