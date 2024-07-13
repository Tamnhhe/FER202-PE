// src/components/AdddataForm.js
import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

const AddData = () => {
  const { dataCha, dataList, addData } = useContext(DataContext);

  const [data, setData] = useState({
    name: "",
    description: "",
    startDate: "",
    type: "",
    department: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in data) {
      if (!data[key]) {
        window.alert("Please enter the form fields that are required");
        return;
      }
    }
    data.department = parseInt(data.department);
    data.id = dataList.length + 1;
    addData(data);
    setData({
      name: "",
      description: "",
      startDate: "",
      type: "",
      department: "",
    });
    window.alert("Create Success.");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Link style={{paddingLeft:'15px'}} to={"/"}>Home page</Link>
      {/* NAME */}
      <Form.Group>
        <Form.Label>Project name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          //required
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
          //required
        />
      </Form.Group>
      {/* DATA */}
      <Form.Group>
        <Form.Label>Start date</Form.Label>
        <Form.Control
          type="date"
          name="startDate"
          value={data.startDate}
          onChange={handleChange}
          //required
        />
      </Form.Group>

      {/*  */}
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          name="type"
          value={data.type}
          onChange={handleChange}
          //required
        />
      </Form.Group>

      {/* DATA CHA */}
      <Form.Group>
        <Form.Label>Department</Form.Label>
        <Form.Control
          as="select"
          name="department"
          value={data.department}
          onChange={handleChange}
          //required
        >
          <option value="">Select deviceId</option>
          {dataCha.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {/*  */}

      <Button style={{marginTop:'15px'}} variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default AddData;
