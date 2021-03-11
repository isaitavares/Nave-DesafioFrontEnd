import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/Images/logo-nave.png'

import {Row,Text,Icons,Column} from '../'

    function Notfound () {
        return(
            <CustomRow>
                <Column>
                    <Icons src={Logo} />
                    <Text fontSize='large' fontWeight='600' mt='60px'>404 - Pagina não encontrada.</Text>
                </Column>
            </CustomRow>
        )
    }

const CustomRow = styled(Row) `
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default Notfound