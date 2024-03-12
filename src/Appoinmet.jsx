import React, { Profiler, useState } from 'react'
import './Appoinment.css'
import pdf1 from '../src/imagess/Hibernate_Version1.pdf'
import Datetime from 'react-datetime';
import EndPage from './EndPage';

const Appoinmet = () => {

    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedButton, setSelectedButton] = useState('first');
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [referal, setreferal] = useState(false);

  const closeModal = () => setShowModal(false);

    const handleViewDetails = (rowId) => {
        if (selectedRow === rowId) {
            setSelectedRow(null);
        } else {
            setSelectedRow(rowId);
        }
    }

    const downloadPdf = (pdf) => {
        const link = document.createElement('a');
        link.href = pdf;
        link.download = pdf.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const Profile = () => {
        setSelectedButton('first');
    }

    const FileDetails = () => {
        setSelectedButton('filedetails');
    }

    const ReferalDoc = () => {
        setSelectedButton('referal');
    }

    const handleReschedule = () => {
        setShowCalendar(true);
      };
    
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
      const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
      };

    const renderContent = () => {
        if (selectedButton === 'first') {
            return (
                // <div>Akshay</div>
                <></>
            )
        } else if (selectedButton === 'filedetails') {
            return (
                <>
                <div className='allinonepdf allthebest'>
                    <div className='pdfclass1'>1. PDF Name 1 <br/>
                        <button className='pdfgen' onClick={() => downloadPdf(pdf1)}>Download</button>
                    </div >
                    <div className='pdfclass1'>2. PDF Name 2 <br/>
                        <button className='pdfgen' onClick={() => downloadPdf(pdf1)}>Download</button>
                    </div >
                    <div className='pdfclass1'>3. PDF Name 3 <br/>
                        <button className='pdfgen' onClick={() => downloadPdf(pdf1)}>Download</button>
                    </div >
                 </div>
                </>
            )

        } else if (selectedButton === 'referal') {
            return (
                <>
              <input type='text' className='referdoc' placeholder='Enter the Referance Doctor Name'/>
              <button className='pdfgen'>Search</button>
                </>
            )

        }
    }

    const handleRescheduleConfirm = () => {
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
        setShowCalendar(false); 
      };

    return (
        <>
            <div className='scheduleslist'>Schedule List</div>

            <div className='maindiv'>
                <table className="appointments-table" cellSpacing={0} >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Appointment Type</th>
                            <th>Schedule Date</th>
                            <th>Action</th>
                            <th>info</th>
                            <th>Wan't Rescheduling?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>1</td>
                            <td>John Cena</td>
                            <td>Online</td>
                            <td>08 March,2024,<br /> 10:30AM</td>
                            <td><button className='joinbtn'>Join</button>
                                {/* <button className='cancelbtn'>Cancel</button> */}

                            </td>
                            <td><button className='toggle-btn' onClick={() => handleViewDetails(1)}>
                                {selectedRow === 1 ? 'Collapse' : 'View Details'}
                            </button>
                            </td>
                            <td> <button className='joinbtn'onClick={() => setShowModal(true)}>Reschedule</button></td>
                            {showModal && <EndPage closeModal={closeModal} />}
                        
            
                        </tr>
                        {selectedRow === 1 && (
                            <tr className='details-row'>
                                <td colSpan="7">
                                    <div>
                                        <div className='btnflex'>
                                            {/* <button
                                                className={selectedButton === 'first' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={Profile}

                                            >
                                                Patient Info
                                            </button> */}
                                            <button
                                                className={selectedButton === 'filedetails' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={FileDetails}

                                            >
                                               Patient File Info
                                            </button>
                                            <button
                                                className={selectedButton === 'filedetails' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={FileDetails}

                                            >
                                               AI Generated File 
                                            </button>
                                            <button
                                                className={selectedButton === 'filedetails' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={FileDetails}

                                            >
                                                Medical Prescription
                                            </button>
                                            <button
                                                className={selectedButton === 'referal' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={ReferalDoc}

                                            >
                                               Refer Someone
                                            </button>
                                        </div>
                                       
                                        <div className="content">
                                            {renderContent()}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                        <tr>

                            <td>2</td>
                            <td>Elvish Bhai</td>
                            <td>Online</td>
                            <td>08 March,2024,<br /> 11:30AM</td>
                            <td><button className='joinbtn'>Join</button>
                                {/* <button className='cancelbtn'>Cancel</button> */}

                            </td>
                            <td><button className='toggle-btn' onClick={() => handleViewDetails(2)}>
                                {selectedRow === 2 ? 'Collapse' : 'View Details'}
                            </button>
                            </td>
                            <td> <button className='joinbtn'>Reschedule</button></td>
                        </tr>
                        {selectedRow === 2 && (
                            <tr className='details-row'>
                                <td colSpan="7">
                                <div>
                                        <div className='btnflex'>
                                            {/* <button
                                                className={selectedButton === 'first' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={Profile}

                                            >
                                                Patient Info
                                            </button> */}
                                            <button
                                                className={selectedButton === 'filedetails' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={FileDetails}

                                            >
                                               Patient File Info
                                            </button>
                                            <button
                                                className={selectedButton === 'filedetails' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={FileDetails}

                                            >
                                               AI Generated File 
                                            </button>
                                            <button
                                                className={selectedButton === 'filedetails' ? 'userstylebtn selected  ' : 'userstylebtn '}
                                                onClick={FileDetails}

                                            >
                                                Medical Prescription
                                            </button>
                                        </div>
                                       
                                        <div className="content">
                                            {renderContent()}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Appoinmet