// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { employeeData } from './assets/data';

function App() {
  const [employees, setEmployees] = useState(employeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Bu çalışanı silmek istediğinizden emin misiniz?');
    if (confirmDelete) {
      setEmployees(employees.filter(employee => employee.id !== id));
    }
  };

  const handleDetails = (employee) => {
    console.log(employee);
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

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
            <Modal.Title>Employee Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Name: {selectedEmployee.name} {selectedEmployee.surname}</p>
            <p>Email: {selectedEmployee.email}</p>
            <p>Phone: {selectedEmployee.phoneNumber}</p>
            <p>Knowledge Level: {selectedEmployee.levelOfKnowledge}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default App;
