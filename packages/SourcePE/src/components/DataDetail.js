import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

function DataDetail() {
  const { getNameCha } = useContext(DataContext);
  //
  const { id } = useParams();
  const [data, setData] = useState();
  const [img, setIma] = useState("");

  console.log(id);
  useEffect(() => {
    const fetchApi = async () => {
      const dataDetail = await axios.get(
        `http://localhost:9999/products/${id}`
      );

      setData(dataDetail.data);
      setIma(dataDetail.data.images[0].name);
    };

    fetchApi();
  }, [id]);

  const handleMouseOver = (img) => {
    setIma(img)
  }

  return (
    <>
      <Link to={"/"}>
        {" "}
        <Button variant="success">Go to home</Button>
      </Link>
      {data && (
        <Row>
          <Col md={6}>
            <h2>{data.name}</h2>
            <img src={img} />
            <hr style={{ backgroundColor: "gray" }} />
            <div style={{ display: "flex" }}>
              {data.images.map((img) => (
                <div key={img.id} onMouseOver={() => handleMouseOver(img.name)}>
                  <img src={img.name} />
                </div>
              ))}
            </div>
            <hr style={{ backgroundColor: "gray" }} />
          </Col>
          <Col md={6}>
            <h4>Price: {data.price} VND</h4>
            <div>Brand: {getNameCha(data.brand).name}</div>
            <h4>
              Status:{" "}
              {data.status ? (
                <span style={{ color: "green" }}>In Stock</span>
              ) : (
                <span style={{ color: "red" }}>Out Stock</span>
              )}{" "}
              VND
            </h4>
          </Col>
        </Row>
      )}
    </>
  );
}

export default DataDetail;
