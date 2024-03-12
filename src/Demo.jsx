import React, { useState } from 'react'
import './Demo.css'
import images from '../src/imagess/healtcare-image-one.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHospital, faUserNurse,faFlask,faVial,faUserDoctor,faTablet } from '@fortawesome/free-solid-svg-icons'

const Demo = () => {
    const [selectedButton, setSelectedButton] = useState('second');
    const [zipCode, setZipCode] = useState('');
    const [locationNumber, setLocationNumber] = useState('');
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleAddToList = () => {
        if (searchText.trim() !== '') {
            setSearchList([...searchList, searchText]);
            setSearchText('');
        }
    }

    const handleRemoveFromList = (index) => {
        const updatedList = [...searchList];
        updatedList.splice(index, 1);
        setSearchList(updatedList);
    }

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    }

    const handleLocationNumberChange = (event) => {
        setLocationNumber(event.target.value);
    }

    const firstOpinion = () => {
        setSelectedButton('first');
    }

    const secondOpinion = () => {
        setSelectedButton('second');
    }

    const serviceProvider1 = () => {
        setSelectedButton('service1');
    }
    const serviceProvider2 = () => {
        setSelectedButton('service2');
    }
    const serviceProvider3 = () => {
        setSelectedButton('service3');
    }

    const renderContent = () => {
        if (selectedButton === 'first') {
            return (
                <>
                    <div className='radiooptions'>
                        <div className='flexy'></div>
                        <input
                            type="text"
                            placeholder="Search the Symptoms"
                            value={searchText}
                            className='inputtextfieldDisease'
                            onChange={handleInputChange}
                        />
                        <button className="searchBtn" onClick={handleAddToList}>Add</button>
                        <button className="searchBtn newbtn" onClick={handleAddToList}>Search</button>
                        <div className='searchList'>
                            {searchList.map((item, index) => (
                                <div key={index} className='searchListItem'>
                                    {item}
                                    <button onClick={() => handleRemoveFromList(index)} className="removeBtn">x</button>
                                </div>
                            ))}
                        </div>
                        

                    </div>
                </>
            );
        } else if (selectedButton === 'second') {
            return (
                <>
                    <div className='secondtop'>
                        <input
                            type="text"
                            placeholder="Search Your Expert"
                            value={zipCode}
                            className='inputtextfieldDisease'
                            onChange={handleZipCodeChange}
                        />
                        <button className="searchBtn">Search</button>
                        <div className='searchList'></div>
                    </div>
                </>
            );
        } 
        else if (selectedButton === 'service1') {
            return (
                <>
                    <div className='secondtop'>
                        <input
                            type="text"
                            placeholder="Zip Code"
                            value={locationNumber}
                            className='zipcodedemo'
                            onChange={handleLocationNumberChange}
                        />
                        <input
                            type="text"
                            placeholder="Search Pharmacy"
                            value={zipCode}
                            className='serviceprovider'
                            onChange={handleZipCodeChange}
                        />

                        <button className="searchBtn">Search</button>
                        <div className='searchList'></div>
                    </div>
                </>
            );
        }
        else if (selectedButton === 'service2') {
            return (
                <>
                    <div className='secondtop'>
                        <input
                            type="text"
                            placeholder="Zip Code"
                            value={locationNumber}
                            className='zipcodedemo'
                            onChange={handleLocationNumberChange}
                        />
                        <input
                            type="text"
                            placeholder="Search RadioLogy"
                            value={zipCode}
                            className='serviceprovider'
                            onChange={handleZipCodeChange}
                        />

                        <button className="searchBtn">Search</button>
                        <div className='searchList'></div>
                    </div>
                </>
            );
        }
        else if (selectedButton === 'service3') {
            return (
                <>
                    <div className='secondtop'>
                        <input
                            type="text"
                            placeholder="Zip Code"
                            value={locationNumber}
                            className='zipcodedemo'
                            onChange={handleLocationNumberChange}
                        />
                        <input
                            type="text"
                            placeholder="Search Lab"
                            value={zipCode}
                            className='serviceprovider'
                            onChange={handleZipCodeChange}
                        />

                        <button className="searchBtn">Search</button>
                        <div className='searchList'></div>
                    </div>
                </>
            );
        }
        
        else {
            return null;
        }
    }

    return (
        <>
            <div className='navbardemo'>
                <div className='navbarname'>MedicoDoc</div>
                {/* <div className='dropdownitesm'>
                    <select name="cars" className='selecticons' id="cars">
                        <option value="volvo">Patient</option>
                        <option value="saab">Doctor</option>
                        <option value="mercedes">Service Provider</option>
                    </select>
                </div> */}
                {/* <button className='signup'>DashBoard</button> */}
                <button className='signup'>Login/SignUp</button>
            </div>
            <div className='imgases'>
                <img src={images} className='imghw' />
            </div>

            <div className='all'>
                <div className='mainstyle'>
                    <div className='boxess'>
                {/* <div className='buttonstyle1'> */}
                <button
                        className={selectedButton === 'second' ? 'stylebtn selected first-curve' : 'stylebtn first-curve'}
                        onClick={secondOpinion}
                    >
                         <FontAwesomeIcon className='icon1' icon={faUserDoctor} /><br/>
                        Book<br/> Appointment
                    </button>
                
                <button
                        className={selectedButton === 'service1' ? 'stylebtn selected  ' : 'stylebtn '}
                        onClick={serviceProvider1}
                    >
                         <FontAwesomeIcon className='icon1' icon={faTablet} /><br/>
                        Pharmacy
                    </button>
                    {/* <button
                        className={selectedButton === 'first' ? 'stylebtn selected ' : 'stylebtn '}
                        onClick={firstOpinion}
                    >
                         <FontAwesomeIcon className='icon1' icon={faUserNurse} /><br/>
                        First<br/> Opinion
                    </button> */}
                        {/* faHospital, faUserNurse,faFlask,faVial,faUserDoctor,faTablet  */}
                  
                {/* </div> */}
                {/* <div className='buttonstyle'> */}
                    {/* <button
                        className={selectedButton === 'second' ? 'stylebtn selected' : 'stylebtn'}
                        onClick={secondOpinion}
                    >
                         <FontAwesomeIcon className='icon1' icon={faUserDoctor} /><br/>
                        Second<br/> Opinion
                    </button> */}
                   
                {/* </div> */}
                {/* <div className='buttonstyle'> */}
                   
                {/* </div> */}
                {/* <div className='buttonstyle'> */}
                    <button
                        className={selectedButton === 'service2' ? 'stylebtn selected' : 'stylebtn'}
                        onClick={serviceProvider2}
                    >
                         <FontAwesomeIcon className='icon1' icon={faFlask} /><br/>
                        RadioLogy
                    </button>
                {/* </div> */}
                {/* <div className='buttonstyle'> */}
                    <button
                        className={selectedButton === 'service3' ? 'stylebtn selected lab-test-curve' : 'stylebtn lab-test-curve'}
                        onClick={serviceProvider3}
                    >
                         <FontAwesomeIcon className='icon1' icon={faVial} /><br/>
                        Lab Test
                    </button>
                {/* </div> */}
                </div>
                <div className="content">
                    {renderContent()}
                </div>
            </div>
            <div className='itemsdisplay'>
                <div className='items1'>
                    <span className='subitem'>1k</span><br/>
                    <span className='subitem'>Doctors</span>
                </div>
                <div className='items1'>
                    <span className='subitem'>10k</span><br/>
                    <span className='subitem'>Patients</span>
                </div>
                <div className='items1'>
                    <span className='subitem'>1.5k</span><br/>
                    <span className='subitem'>Service Providers</span>
                </div>
            </div>
            </div>

        </>
    )
}

export default Demo
