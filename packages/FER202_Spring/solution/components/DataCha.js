import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Form, Table, Button } from "react-bootstrap";

function DataCha() {
  //
  const { dataCha, dataFilter, dataFilterV2, setDataFilter, setDataFilterV2 } =
    useContext(DataContext);
  //
  const [checkedUsers, setCheckedUsers] = useState([]);

  // const handleChange = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setCheckedUsers((prev) => [...prev, value]);
  //     const newCheckUser = [...checkedUsers, value];

  //     setDataFilter(newCheckUser);
  //   } else {
  //     setCheckedUsers((prev) => prev.filter((it) => it != value));
  //     const newCheckUser = checkedUsers.filter((it) => it != value);

  //     if (newCheckUser.length > 0) {
  //       setDataFilter(newCheckUser);
  //     } else {
  //       setDataFilter(dataFilterV2);
  //     }
  //   }
  // };

  const handleChange = (e) => {
    const { value } = e.target;

    if(value) {
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
        label={"All"}
        value={""}
        name="radio"
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

{
  /* <Table striped bordered hover>
<thead>
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
</thead>
<tbody>
  {filteredData.map((todo) => {
    return (
      <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{user ? user.name : "Unknown User"}</td>
        <td>
          {todo.completed ? (
            <td style={{ color: "blue" }}>Finished</td>
          ) : (
            <td style={{ color: "red" }}>UnFinished</td>
          )}
        </td>
        <td>
          <Button
            variant="success"
            // onClick={() => changeStatus(todo.id)}
          >
            Change
          </Button>
        </td>
      </tr>
    );
  })}
</tbody>
</Table> */
}

{
  /* <div>
  <h5>Work</h5>
  <Form.Check
    type="radio"
    label="All"
    name="fullTimeFilter"
    value=""
    onChange={(e) => setFilterFullTime(e.target.value)}
    checked={filterFullTime === ""}
  />
  <Form.Check
    type="radio"
    label="Full Time"
    name="fullTimeFilter"
    value="true"
    onChange={(e) => setFilterFullTime(e.target.value)}
    checked={filterFullTime === "true"}
  />
  <Form.Check
    type="radio"
    label="Part Time"
    name="fullTimeFilter"
    value="false"
    onChange={(e) => setFilterFullTime(e.target.value)}
    checked={filterFullTime === "false"}
  />
</div> */
}
