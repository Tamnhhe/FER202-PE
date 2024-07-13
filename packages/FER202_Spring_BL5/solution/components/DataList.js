import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Table,　Row, Col,  Button, Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'
function DataList() {
  //
  const {
    dataCha,
    dataList,
    dataFilter,
    filterFollowCondition,
    setCart,
    cart,
    getNameCha,
    deleteData
  } = useContext(DataContext);

  //
  const filteredData = dataList.filter((data) => {
    const userFilter =
      dataFilter.length === 0 || dataFilter.includes(data.brand.toString());
    const completedFilter = true; //filterFollowCondition === "" || data.completed === (filterFollowCondition === "true");
    return userFilter && completedFilter;
  });

  // cart
  const handleCart = (it) => {
    const itExist = cart.find((itCart) => it.id == itCart.id);

    if (itExist) {
      const newCart = cart.map((item) => {
        if (item.id == itExist.id) {
          item.quantity = item.quantity + 1;
        }

        return item;
      });

      setCart(newCart)

    } else {
      it.quantity = 1;
      setCart((prev) => [...prev, it]);
    }

    window.alert("Your product has been add to cart");
  };

  const handleDelete = (it) => {
    const confirm = window.confirm("Are you sure");

    if(confirm) {
      deleteData(it.id);
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> List</h1>
      {" "}
      <div style={{ textAlign: "right", marginBottom: "30px" }}>
        Cart: [<Link to="/cart">{cart.length}</Link>]
      </div>
      <Row>
        {filteredData.map((it) => (
          <Col key={it.id} md={4}>
            <Card style={{ padding: "5px", marginBottom: "20px" }}>
              <Card.Img style={{height: "200px"}} src={`/assets/images/${it.images[0].name}`} />
              <Card.Body>
                <Card.Title style={{maxWidth: "200px"}}>{it.name}</Card.Title>
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
                <Button variant="warning" onClick={() => handleDelete(it)}>
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DataList;
