import React, { useState, useEffect } from 'react';   
import { AgGridColumn, AgGridReact } from 'ag-grid-react'; 
import Title from './title.png';
import PlanetModal from '../PlanetModal/PlanetModal';

import './PlanetGrid.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

const PlanetGrid = () => {    
    const [rowData, setRowData] = useState([]);
    const [planetData, setPlanetData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
         fetch('https://swapi.dev/api/planets/')
          .then(result => result.json())
          .then(rowData => setRowData(rowData.results))
    }, []);
 
    const showPlanetDetails = (event) => {
        fetch(event.data.url)
        .then(result => result.json())
        .then((planetData) => { setPlanetData(planetData); handleShow() });
    }

    const showModal = () => {
        this.setState({ show: true });
    };

    const hideModal = () => {
        this.setState({ show: false });
    };

    return ( 
        <div className={"grid-wrapper"}>
            <img src={Title} className={"img-center"} style={{ height : 75, width: 500}}></img>
            <div className="ag-theme-alpine-dark" style={{ padding: 20 }}>
                <AgGridReact rowData={rowData} domLayout={'autoHeight'} gridOptions = {{onRowDoubleClicked: showPlanetDetails}}>
                    <AgGridColumn field="name" sortable={true} filter={true}></AgGridColumn>
                    <AgGridColumn field="rotation_period" sortable={true} filter={true} headerName="Rotation Period"></AgGridColumn>
                    <AgGridColumn field="orbital_period" sortable={true} filter={true} headerName ="Orbital Period"></AgGridColumn>
                    <AgGridColumn field="diameter" sortable={true} filter={true}></AgGridColumn>
                    <AgGridColumn field="climate" sortable={true} filter={true}></AgGridColumn>
                    <AgGridColumn field="terrain" sortable={true} filter={true}></AgGridColumn>
                </AgGridReact>
            </div>
            <PlanetModal show={show} handleClose={handleClose} planet={planetData}></PlanetModal>
        </div>
      );    
     
}    
    
export default PlanetGrid;   