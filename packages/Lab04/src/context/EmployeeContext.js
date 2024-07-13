// src/context/EmployeeContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState({ male: true, female: true });

  useEffect(() => {
    const fetchData = async () => {
      const deptResponse = await axios.get('http://localhost:9999/departments');
      setDepartments(deptResponse.data);
      const empResponse = await axios.get('http://localhost:9999/employees');
      setEmployees(empResponse.data);
    };
    fetchData();
  }, []);
  const addEmployee = async (employee) => {
    const response = await axios.post('http://localhost:9999/employees', {
      ...employee,
      id: employees.length + 1,
      department: Number(employee.department),
    });
    setEmployees([...employees, response.data]);
  };

  const getDepartmentName = (departmentId) => {
    const department = departments.find(dept => dept.id === departmentId);
    return department ? department.name : 'Unknown';
  };
  return (
    <EmployeeContext.Provider value={{ departments, employees, setEmployees, selectedDepartment, setSelectedDepartment, searchTerm, setSearchTerm, addEmployee, getDepartmentName, genderFilter, setGenderFilter }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
