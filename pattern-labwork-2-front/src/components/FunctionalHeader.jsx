import axios from 'axios';
import React from 'react';
import { Button, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const FunctionalHeader = (props) => {

    const { setShow } = props;

    function changeExportFormat(e) {
        const exportType = e.target.innerText.toLowerCase();

        axios
            .put(`task/export/${exportType}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function exportData() {
        axios
            .get("task/export")
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Col>
                <Button variant='primary' onClick={() => setShow(true)}>Добавить запись</Button>
            </Col>
            <Col className='d-flex justify-content-end'>
                <DropdownButton id="dropdown-basic-button" title="Экспортировать как">
                    <Dropdown.Item onClick={changeExportFormat}>CSV</Dropdown.Item>
                    <Dropdown.Item onClick={changeExportFormat}>JSON</Dropdown.Item>
                    <Dropdown.Item onClick={changeExportFormat}>XML</Dropdown.Item>
                </DropdownButton>
                <Button variant="primary" onClick={exportData} style={{marginLeft: 5}}>Экспортировать</Button>
            </Col>
        </>
    );
}

export default FunctionalHeader;
