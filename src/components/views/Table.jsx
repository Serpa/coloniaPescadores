/* eslint-disable import/no-anonymous-default-export */
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import Docx from '../docxGenerate/Docx'
import TextField from '../inputs/Filter'
import Axios from "axios";
import EditButton from '../layout/EditButton';

export default Content => {

    const [listPescardores, setListPescadores] = useState([]);

    const FilterComponent = ({ filterText, onFilter }) => (
        <>
            <TextField
                name="search"
                type="text"
                autoFocus="autoFocus"
                placeholder="Pesquisa por nome"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
            />
        </>
    );

    useEffect(() => {
        Axios.get("http://localhost:3001/getPescadores").then((response) => {
            setListPescadores([...response.data])

        });
    }, [])
    const columns = [
        {
            name: 'Nome',
            selector: row => row.nome,
        },
        {
            name: 'RGP',
            selector: row => row.rgp,
        },
        {
            name: 'CPF',
            selector: row => row.cpf,
        },
        {
            name: 'Cidade',
            selector: row => row.cidade,
        },
        {
            name: 'Gerenciar',
            selector: row => <EditButton pescador={row.id}/>
        },
        {
            name: 'Documento',
            selector: row => <Docx dados={row}></Docx>
        },
    ];


    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = listPescardores.filter(
        item => item.nome && item.nome.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />

        );
    }, [filterText, resetPaginationToggle]);
    return (
        <DataTable
            title="Pescadores"
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
        />
    );
}