import React from 'react';   
import Modal from 'react-bootstrap/Modal';

import './PlanetModal.css';

const PlanetModal = ({ handleClose, show, planet }) => {
    const camelCase = (str) => { 
        if(str != null)
        {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
        else
            return str;
    } 

    return (
        <Modal show={show} onHide={handleClose} className={"my-modal"}>
            <Modal.Header closeButton>
                <Modal.Title>Planet Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Name: <b>{camelCase(planet.name)}</b></p>
                <p>Climate: <b>{camelCase(planet.climate)}</b></p>
                <p>Diameter: <b>{parseInt(planet.diameter).toLocaleString('en')} Km</b></p>
                <p>Gravity: <b>{camelCase(planet.gravity)}</b></p>
                <p>Orbital Period: <b>{camelCase(planet.orbital_period)}</b></p>
                <p>Population: <b>{isNaN(planet.population) ? planet.population : parseInt(planet.population).toLocaleString('en')}</b></p>
                <p>Rotation Period: <b>{camelCase(planet.rotation_period)}</b></p>
                <p>Surface Water: <b>{camelCase(planet.surface_water)}</b></p>
                <p>Terrain: <b>{camelCase(planet.terrain)}</b></p>
            </Modal.Body>
        </Modal>
    );
  }
  
  
  export default PlanetModal;