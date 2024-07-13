import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DataList() {
  //
  const { dataCha, getNameCha, dataList, dataFilter, filterFollowCondition, setCart, cart } =
    useContext(DataContext);

  //
  const filteredData = dataList.filter((data) => {
    const userFilter =
      dataFilter.length === 0 || dataFilter.includes(data.department.toString());
    const completedFilter = true; //filterFollowCondition === "" || data.completed === (filterFollowCondition === "true");
    return userFilter && completedFilter;
  });


  return (
    <div>
      <h1 style={{ textAlign: "center" }}> List</h1>
      <Link to="projects/add"><Button variant="success">Create new Project</Button></Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Project name</th>
            <th>Descriptions</th>
            <th>Start Date</th>
            <th>Type</th>
            <th>Departments</th>
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
                <td><Link to={`/departments/${todo.department}/employees`}>{getNameCha(todo.department).name}</Link></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DataList;

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
