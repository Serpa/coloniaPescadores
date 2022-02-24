import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Table from '../views/Table'
import NotFound from '../views/NotFound'
import Home from '../views/Home'
import Cadastro from '../views/Cadastro'
import Edit from '../views/Edit'
import Login from '../views/Login'

export default function Content() {
    return (
        <main>
            <Routes>
                <Route path='/table' element={<Table />}></Route>
                <Route path='/cadastro' element={<Cadastro />}></Route>
                <Route path='/editar/:id' element={<Edit />}></Route>
                <Route path='*' element={<NotFound />}></Route>
                <Route path='/' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
            </Routes>
        </main>
    )
}
