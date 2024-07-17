/* eslint-disable react/prop-types */
// src/EmployeeCard.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const EmployeeCard = ({ employee, onDelete, onDetails }) => (
  <div className="card m-2">
    <div className="card-body">
      <h5 className="card-title">{employee.name} {employee.surname}</h5>
      <p className="card-text">Email: {employee.email}</p>
      <p className="card-text">Phone: {employee.phoneNumber}</p>
      <p className="card-text">Knowledge Level: {employee.levelOfKnowledge}</p>
      <Button variant="primary" onClick={() => onDetails(employee)}>Detaylar</Button>
      <Button variant="danger" onClick={() => onDelete(employee.id)} className="ml-2">Sil</Button>
    </div>
  </div>
);

export default EmployeeCard;
