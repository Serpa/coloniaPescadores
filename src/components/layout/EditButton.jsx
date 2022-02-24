import React from 'react'
import { Link } from "react-router-dom";
import './EditButton.css'
import { FaEdit,FaRegTrashAlt } from "react-icons/fa";


export default function EditButton(props) {
    return (
        <>
            <Link className='Btn' to={`/editar/${props.pescador}`}><FaEdit className='edit'/></Link>
            <Link className='Btn' to={`/del/${props.pescador}`}><FaRegTrashAlt className='del'/></Link>
        </>
    )
}
