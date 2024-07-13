import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Form } from "react-bootstrap";

function DataCha() {
  //
  const { dataCha, dataFilter, dataFilterV2, setDataFilter, setDataFilterV2 } =
    useContext(DataContext);
  //
  const [checkedUsers, setCheckedUsers] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value) {
      setDataFilter(value);
    } else {
      setDataFilter(dataFilterV2);
    }
  };

  return (
    <div>
      <h4>Departments</h4>
      <Form.Check
        type="radio"
        name="radio"
        label={"All"}
        value={""}
        onChange={(e) => handleChange(e)}
      />
      {dataCha.map((user) => (
        <Form.Check
          key={user.id}
          type="radio"
          name="radio"
          label={user.name}
          value={user.id}
          onChange={(e) => handleChange(e)}
        />
      ))}
    </div>
  );
}

export default DataCha;
