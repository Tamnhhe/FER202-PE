import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function DataList2() {
  //
  const {
    dataCha,
    dataList,
    dataListV2,
    getNameCha,
    dataFilter,
    filterFollowCondition,
    setCart,
    cart,
  } = useContext(DataContext);
  const { id } = useParams();
  const newData = dataListV2.filter((it) => it.department == id);

  return (
    <>
      <div>
        <Link to={"/"}>Home page</Link>
        <h3>Department: {getNameCha(id).name}</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Employee name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.dob}</td>
                  <td>{todo.gender}</td>
                  <td>{todo.position}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default DataList2;
