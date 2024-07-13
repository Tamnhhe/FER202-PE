import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import DataProvider from "./context/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import DataCha from "./components/DataCha";
import DataList from "./components/DataList";
import DataDetail from "./components/DataDetail";

function App() {
  return (
    <DataProvider>
      <Router>
        <Container>
          <Routes>
            {/* route */}
            <Route
              path="/"
              element={
                <Row>
                  <h1 style={{ textAlign: "center" }}>ABC SHOP</h1>
                  <Col md={3}>
                    <DataCha />
                  </Col>
                  <Col md={9}>
                    <DataList></DataList>
                  </Col>
                </Row>
              }
            />
            {/* route */}
            <Route
              path="/product/:id"
              element={
                <Row>
                  <h1 style={{ textAlign: "center" }}>Product Detail</h1>
                  <DataDetail></DataDetail>
                </Row>
              }
            />
            {/* route */}
            <Route
              path="/cart"
              element={
                <Row>
                  <h1 style={{ textAlign: "center" }}>Product Detail</h1>
                  <Card></Card>
                </Row>
              }
            />
            {/* route */}
          </Routes>
        </Container>
      </Router>
    </DataProvider>
  );
}

export default App;
