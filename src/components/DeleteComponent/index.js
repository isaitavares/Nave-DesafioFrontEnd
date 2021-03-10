import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom'
import Alert from '../Alert'

import api from '../../services/api'

const DeleteComponent = ({ naverId }) => {
  const history = useHistory()
  const [alert, setAlert] = useState(false)

  function handleCancel() {
      setAlert(false);
  }

  async function handleConfirm() {
    try {
      await api.delete(`/navers/${naverId}`)
      setAlert(false)
      history.push({ pathname: '/', state: true })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <DeleteIconStyled size='24' onClick={() => setAlert(naverId)} />
      {alert && (
          <Alert
            title='Excluir Naver'
            message='Tem certeza que deseja excluir este naver?'
            confirmation='true'
            confirmationClick={handleConfirm}
            cancelClick={handleCancel}
            changeAlert={handleCancel}
          />
      )}
    </>
  )
}

const DeleteIconStyled = styled(DeleteIcon)`
  color: #212121;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    color: #313030;
  }
`

export default DeleteComponent