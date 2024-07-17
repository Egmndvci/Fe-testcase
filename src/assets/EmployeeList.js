/* eslint-disable react/prop-types */
// src/EmployeeList.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import EmployeeCard from './EmployeeCard';

// eslint-disable-next-line react/prop-types
const EmployeeList = ({ employees, onDelete, onDetails }) => (
  <div className="d-flex flex-wrap">
    {employees.map(employee => (
      <EmployeeCard
        key={employee.id}
        employee={employee}
        onDelete={onDelete}
        onDetails={onDetails}
      />
    ))}
  </div>
);

export default EmployeeList;
