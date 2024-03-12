import { useState, useEffect } from 'react';
import './endpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const EndPage = ({ closeModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleConfirm = () => {
    // Validate the date and time here if needed
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    // Close the modal or trigger further actions
    closeModal();
  };

  return (
    <>
      <div className="wrapper" onClick={closeModal}></div>
      <div className="containersss">
        <div className="content">
          <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
          <h2>Appointment Reschedule</h2>
          <p>Please select a new date and time for your appointment:</p>
          <div className="form-group">
            <label>Date: </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Time: </label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />
          </div>
          <button className="buttonys" onClick={handleConfirm}>Confirm</button>
          <button className="buttonys" onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default EndPage;
