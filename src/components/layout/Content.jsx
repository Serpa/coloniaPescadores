/* eslint-disable import/no-anonymous-default-export */
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import React from 'react';
import Docx from '../docxGenerate/Docx'

export default Content => {
    const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

    const FilterComponent = ({ filterText, onFilter }) => (
        <>
            <TextField
                id="search"
                type="text"
                placeholder="Pesquisa por nome"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
            />
        </>
    );
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
            name: 'Documento',
            selector: row => <Docx dados={row}></Docx>
        },
    ];

    const data = [
        {
            id: 1,
            nome: 'Carlos',
            rgp: '00000000000',
            cpf: '000.000.000-00',
            cidade: 'Frutal,Minas Gerais',
        },
        {
            id: 2,
            nome: 'João',
            rgp: '00000000000',
            cpf: '000.000.000-00',
            cidade: 'Frutal,Minas Gerais',
        },
        {
            id: 3,
            nome: 'Alberto',
            rgp: '00000000000',
            cpf: '000.000.000-00',
            cidade: 'Frutal,Minas Gerais',
        },
        {
            id: 4,
            nome: 'Jonas',
            rgp: '00000000000',
            cpf: '000.000.000-00',
            cidade: 'Frutal,Minas Gerais',
        },
        {
            id: 5,
            nome: 'Moacir',
            rgp: '00000000000',
            cpf: '000.000.000-00',
            cidade: 'Frutal,Minas Gerais',
        },
    ]
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = data.filter(
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