// src/components/AdddataForm.js
import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { DataContext } from "../context/DataContext";

const AddData = () => {
  const { dataCha, dataList, addData } = useContext(DataContext);

  const [data, setData] = useState({
    name: '',
    date: '',
    description: '',
    deviceId: '',
    status: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in data){
      if(!data[key]){
        window.alert("Please input the field")
        return;
      }
    }
    addEmployee(data);
    setData({ name: '', dob: '', gender: '', position: '', department: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>

       {/* NAME */}
       <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      
      {/* DATA */}
      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Description */}
      <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={data.description}
            onChange={handleChange}
            // required
          />
        </Form.Group>

      {/* STATUS */}
      <Form.Group>
        <Form.Label>status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={data.status}
          onChange={handleChange}
          required
        >
          <option value="">Select status</option>
          <option selected={data.status == 'completed'} value="completed">completed</option>
          <option selected={data.status == 'uncompleted'} value="uncompleted">uncompleted</option>          
        </Form.Control>
      </Form.Group>

      {/*  */}
      <Form.Group>
        <Form.Label>description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* DATA CHA */}
      <Form.Group>
        <Form.Label>deviceId</Form.Label>
        <Form.Control
          as="select"
          name="deviceId"     
          value={data.deviceId}         
          onChange={handleChange}
          required
        >
          <option value="">Select deviceId</option>
          {departments.map(department => (
            <option key={department.id} value={department.id}>{department.name}</option>
          ))}
        </Form.Control>
      </Form.Group>

      {/*  */}
      <Button variant="primary" type="submit">Save Changes</Button>
    </Form>
  );
};

export default AddData;
