import React from 'react';
import styled from 'styled-components'
import Text from '../Text'
import CloseIcon from '@material-ui/icons/Close';
import { Row } from '../Grid'
import Button from '../Button'

const Alert = ({ title, message, changeAlert, confirmation=false, confirmationClick, cancelClick }) => {
    return(
        <AlertOutsideContent>
            <AlertInsideContent>
                <Row width="100%" justifyContent="flex-end">
                    <CloseIconStyled onClick={changeAlert} />
                </Row>
                <Text fontSize='large' fontWeight='large' marginBottom='24px'>{title}</Text>
                <Text fontWeight='small'>{message}</Text>
                {confirmation && (
                    <Row display="flex" height="40px" width={1} justifyContent="flex-end" mt="32px">
                        <Button color="black"
                                bg="white"
                                width="176px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                border="0.1px solid"
                                mr="24px"
                                onClick={cancelClick} 
                                >Cancelar</Button>
                        <Button color="white"
                                bg="black"
                                width="176px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                onClick={confirmationClick}                    
                                >Excluir</Button>
                    </Row>
            )}   

            </AlertInsideContent>
        </AlertOutsideContent>
    )
}

const CloseIconStyled = styled(CloseIcon) `
&& {
    color: #212121;
    cursor: pointer;
    :hover {
        color: #313030 !important;
  }
}
`;

const AlertOutsideContent = styled.div `
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.5);
`

const AlertInsideContent =  styled.div `
    display:flex;
    align-items: center;
    background-color: white;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    padding:32px;
    width: 40%;
    height: 30%;
`

export default Alert;

