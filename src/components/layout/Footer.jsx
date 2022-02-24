/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

export default Footer => {
    return(
        <div className="Footer">
            <Link to="/cadastro">Registrar</Link>
        </div>
    );
}