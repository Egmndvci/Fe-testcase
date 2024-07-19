/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { employeeData } from './assets/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function App() {
  const [employees, setEmployees] = useState(employeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Detaylar butonu işlevi
  const handleDetails = (employee) => {
    console.log(employee);
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  // Modal'ı kapatma işlevi
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEmployee(null);
  };

  // Silme işlemi
  const handleDelete = (employeeId) => {
    const confirmed = window.confirm('Bu çalışanı silmek istediğinizden emin misiniz?');
    if (confirmed) {
      setEmployees(employees.filter(employee => employee.id !== employeeId));
    }
  };

  return (
    <div className='table_container'>
      {employees.map((employee) => (
        <div key={employee.id} className='employee_card'>
          <div className='employee_info'>
            <div className='employee_card_name'>
              {`${employee.name} ${employee.surname}`}
            </div>
            <div className='employee_card_number'>
              {employee.phoneNumber}
            </div>
            <div className='employee_card_email'>
              {employee.email}
            </div>
          </div>
          <div className='employee_buttons'>
            <button onClick={() => handleDetails(employee)}>Detaylar</button>
            <button onClick={() => handleDelete(employee.id)}>Sil</button>
          </div>
        </div>
      ))}

      {selectedEmployee && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Çalışan Detayları</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>İsim: {selectedEmployee.name} {selectedEmployee.surname}</p>
            <p>Email: {selectedEmployee.email}</p>
            <p>Telefon: {selectedEmployee.phoneNumber}</p>
            <p>Bilgi Seviyesi: {selectedEmployee.levelOfKnowledge}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default App;
