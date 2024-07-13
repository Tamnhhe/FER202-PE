import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function DataList2() {
  //
  const { dataCha, dataListV2, getNameCha, dataList, dataFilter, filterFollowCondition, setCart, cart } =
    useContext(DataContext);

    //
    const {id} = useParams();

    const newData = dataListV2.filter(it => it.department == id)


  return (
    <div>
      <h1 style={{ textAlign: "center" }}> List of Employees</h1>
      <Link to="/">Go home</Link>
      <h3> Departments: {getNameCha(id).name} </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee name</th>
            <th>Dob</th>
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
  );
}

export default DataList2;

{
  /* <div style={{ textAlign: "right", marginBottom: "30px" }}>
Cart: [<Link to="/cart">{cart.length}</Link>]
</div>
<Row>
{filteredData.map((it) => (
  <Col key={it.id} md={4}>
    <Card style={{ padding: "5px" }}>
      <Card.Img src={it.images[0].name} />
      <Card.Body>
        <Card.Title>{it.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {it.price}</ListGroup.Item>
        <ListGroup.Item>
          Brand: {getNameCha(it.brand).name}
        </ListGroup.Item>
        <ListGroup.Item>
          Status:{" "}
          {it.status ? (
            <span style={{ color: "green" }}>In Stock</span>
          ) : (
            <span style={{ color: "red" }}>Out Stock</span>
          )}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={`/product/${it.id}`}>
          <Button variant="danger" style={{ marginRight: "15px" }}>
            Detail
          </Button>
        </Link>
        <Button variant="success" onClick={() => handleCart(it)}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  </Col>
))}
</Row> */
}
