/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Login.css'
import { FaLock,FaUserAlt } from "react-icons/fa";

export default Login => {
    return (
        <div className="LoginForm">

            <form className="Form">

                <div className="UserInput">
                <label>Usuário <FaUserAlt/></label>
                <input type="text" />
                </div>

                <div className="PassInput">
                <label>Senha <FaLock/></label>
                <input type="password" />
                </div>

                <div className="LoginButton">
                    <button>Entrar</button>
                </div>
            </form>

        </div>
    );
}