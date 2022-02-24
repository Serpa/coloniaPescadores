import React, { useState, useEffect } from 'react'
import './Edit.css'
import Axios from "axios";
import { useParams } from 'react-router-dom'
import moment from 'moment';

export default function Edit() {
    const { id } = useParams();
    const [values, setValues] = useState();
    const [listPescardor, setListPescador] = useState([]);

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const convertDate = (brDate) =>{
        return moment(brDate,"DD/MM/YYYY").format("YYYY-MM-DD")
    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/getPescador/${id}`).then((response) => {
            setListPescador(...response.data)
        });
    }, [id])

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/update", {
            ficha: values.ficha,
            nome: values.nome,
            endereco: values.localidade,
            numero: values.numero,
            bairro: values.bairro,
            cidade: values.cidade,
            estado: values.estado,
            cep: values.cep,
            celular: values.celular,
            telefone: values.telfone,
            tel_recado: values.tel_recado,
            cpf: values.cpf,
            rg: values.rg,
            orgao_emissor: values.orgao_emissor,
            rgp: values.rgp,
            pis: values.pis,
            cei: values.cei,
            cnh: values.cnh,
            emissao_cnh: values.emissao_cnh,
            email: values.email,
            vencimento: values.vencimento,
            filiacao: values.filiacao,
            nascimento: values.nascimento,
            local_nascimento: values.local_nascimento,
            pai: values.pai,
            mae: values.mae,
            data_rgp: values.data_rgp,
            titulo_eleitor: values.titulo_eleitor,
            carteira_trabalho: values.carteira_trabalho,
            profissao: values.profissao,
            estado_civil: values.estado_civil,
            senha_caepf: values.senha,
            emissao_rg: values.emissao_rg,
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className='Edit'>
            <div>
                <fieldset>
                    <legend>Dados de Pescador</legend>
                    <label htmlFor="filiacao">Filiação:</label>
                    <input type="date" name='filiacao' value={ convertDate(listPescardor.filiacao) || ''} onChange={handleChangeValues} />
                    <label htmlFor="vencimento">Vencimento:</label>
                    <input type="date" name="vencimento" value={ convertDate(listPescardor.vencimento) || ''} onChange={handleChangeValues} />
                    <label htmlFor="ficha">Ficha:</label>
                    <input type="number" name="ficha" value={listPescardor.ficha || ''} onChange={handleChangeValues} />
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name="senha" onChange={handleChangeValues} />
                    <label htmlFor="senha2">Digite novamente a Senha:</label>
                    <input type="password" name="senha2" onChange={handleChangeValues} />
                </fieldset>

                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name='nome' value={listPescardor.nome || ''} onChange={handleChangeValues} />
                    <label htmlFor="pai">Nome do Pai:</label>
                    <input type="text" name="pai" value={listPescardor.pai || ''} onChange={handleChangeValues} />
                    <label htmlFor="mae">Nome da Mãe:</label>
                    <input type="text" name="mae" value={listPescardor.mae || ''} onChange={handleChangeValues} />
                    <label htmlFor="estado_civil">Estado Civil:</label>
                    <select name="estado_civil" value={listPescardor.estado_civil || ''} onChange={handleChangeValues}>
                        <option>Selecione uma opção</option>
                        <option value="Solteiro">Solteiro</option>
                        <option value="Casado">Casado</option>
                        <option value="Divorciado">Divorciado</option>
                    </select>
                    <label htmlFor="nascimento">Data de Nascimento:</label>
                    <input type="date" name="nascimento" value={ convertDate(listPescardor.nascimento) || ''} onChange={handleChangeValues} />
                    <label htmlFor="local_nascimento">Naturalidade:</label>
                    <input type="text" name='local_nascimento' value={listPescardor.local_nascimento || ''} onChange={handleChangeValues} />
                    <label htmlFor="profissao">Profissão:</label>
                    <input type="text" name='profissao'  value={listPescardor.profissao || ''}onChange={handleChangeValues} />
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>
                    <label htmlFor="localidade">Localidade:</label>
                    <input type="text" name='localidade' value={listPescardor.endereco || ''} onChange={handleChangeValues} />
                    <label htmlFor="bairro">Bairro:</label>
                    <input type="text" name="bairro" value={listPescardor.bairro || ''} onChange={handleChangeValues} />
                    <label htmlFor="cep">Cep:</label>
                    <input type="text" name='cep' value={listPescardor.cep || ''} onChange={handleChangeValues} />
                    <label htmlFor="numero">Número:</label>
                    <input type="text" name='numero' value={listPescardor.numero || ''} onChange={handleChangeValues} />
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name='cidade' value={listPescardor.cidade || ''} onChange={handleChangeValues} />
                    <label htmlFor="estado">Estado:</label>
                    <input type="text" name='estado' value={listPescardor.estado || ''} onChange={handleChangeValues} />
                </fieldset>

                <fieldset>
                    <legend>Documentos</legend>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" name="cpf" value={listPescardor.cpf || ''} onChange={handleChangeValues} />
                    <label htmlFor="titulo_eleitor">Título de eleitor:</label>
                    <input type="text" name='titulo_eleitor' value={listPescardor.titulo_eleitor || ''} onChange={handleChangeValues} />
                    <label htmlFor="cnh">CNH:</label>
                    <input type="text" name="cnh" value={listPescardor.cnh || ''} onChange={handleChangeValues} />
                    <label htmlFor="emissao_cnh">Emissão da CNH:</label>
                    <input type="date" name="emissao_cnh"  value={ convertDate(listPescardor.emissao_cnh) || ''} onChange={handleChangeValues} />
                    <label htmlFor="rgp">RGP:</label>
                    <input type="text" name="rgp" value={listPescardor.rgp || ''} onChange={handleChangeValues} />
                    <label htmlFor="data_rgp">Data da RGP:</label>
                    <input type="date" name="data_rgp" value={ convertDate(listPescardor.data_rgp) || ''} onChange={handleChangeValues} />
                    <label htmlFor="carteira_trabalho">Carteira de Trabalho:</label>
                    <input type="text" name='carteira_trabalho' value={listPescardor.carteira_trabalho || ''} onChange={handleChangeValues} />
                    <label htmlFor="pis">PIS:</label>
                    <input type="text" name="pis" value={listPescardor.pis || ''} onChange={handleChangeValues} />
                    <label htmlFor="cei">CEI:</label>
                    <input type="text" name="cei" value={listPescardor.cei || ''} onChange={handleChangeValues} />
                    <label htmlFor="rg">RG:</label>
                    <input type="text" name="rg" value={listPescardor.rg || ''} onChange={handleChangeValues} />
                    <label htmlFor="orgao_emissor">Orgão Emissor:</label>
                    <input type="text" name="orgao_emissor" value={listPescardor.orgao_emissor || ''} onChange={handleChangeValues} />
                    <label htmlFor="emissao_rg">Data do RG:</label>
                    <input type="date" name="emissao_rg" value={ convertDate(listPescardor.emissao_rg) || ''} onChange={handleChangeValues} />
                </fieldset>

                <fieldset>
                    <legend>Contatos</legend>
                    <label htmlFor="celular">Celular:</label>
                    <input type="tel" name="celular" value={listPescardor.celular || ''} onChange={handleChangeValues} />
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" name="telefone" value={listPescardor.telefone || ''} onChange={handleChangeValues} />
                    <label htmlFor="tel_recado">Telefone para Recado:</label>
                    <input type="tel" name="tel_recado" value={listPescardor.tel_recado || ''} onChange={handleChangeValues} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={listPescardor.email || ''} onChange={handleChangeValues} />
                    <hr />
                    <div className='buttonsCadastro'>
                        <button onClick={handleClickButton}>Alterar</button>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}
