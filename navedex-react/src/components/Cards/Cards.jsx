import React from 'react'
import Text from '../Texts'
import DeleteIcon from '../../assets/Images/delete-icon.png'
import EditIcon from '../../assets/Images/edit-icon.png'
import Icons from '../Icons'
import DefaultAvatar from '../../assets/Images/default-avatar.png'
import { Link } from 'react-router-dom'

function NaverCard(){

    return (
    <React.Fragment>        
        <Icons avatarnaver src={DefaultAvatar}></Icons>
        <Text naversname>Default Name</Text>
        <Text naversjobtitle>Default Job Title</Text>
        <Icons deletebutton src={DeleteIcon}></Icons>
        <Link to='/editarnaver' style={{ textDecoration: 'none' }}>
            <Icons editbutton src={EditIcon} ></Icons>
        </Link>
    </React.Fragment>
    )
}

export default NaverCard