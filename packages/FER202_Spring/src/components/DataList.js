import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DataList() {
  //
  
  const {
    dataCha,
    dataList,
    getNameCha,
    dataFilter,
    filterFollowCondition,
    deleteData,
    setCart,
    cart,
  } = useContext(DataContext);

  //
  const filteredData = dataList.filter((data) => {
    const userFilter =
      dataFilter.length === 0 ||
      dataFilter.includes(data.department.toString());
    const completedFilter = true; //filterFollowCondition === "" || data.completed === (filterFollowCondition === "true");
    return userFilter && completedFilter;
  });

  return (
    <>
      <div>
        <Link to={"/projects/add"}>
          <Button variant="success">Create new Projects </Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Project name</th>
              <th>Description</th>
              <th>Start date</th>
              <th>Type</th>
              <th>Departments</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.startDate}</td>
                  <td>{todo.type}</td>
                  <td>
                    <Link to={`/departments/${todo.department}/employees`}>
                      {getNameCha(todo.department).name}
                    </Link>
                  </td>
                  {/* <Button variant="danger" onClick={() => deleteData(todo.id)}>Delete</Button> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default DataList;
