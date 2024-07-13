import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DataProvider from "./context/DataContext";
import "bootstrap/dist/css/bootstrap.min.css";
import DataCha from "./components/DataCha";
import DataList from "./components/DataList";
import DataDetail from "./components/DataDetail";
import Cart from "./components/Cart";

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
                  {/*  */}
                  <Col md={3}>
                    <DataCha />
                  </Col>
                  {/*  */}
                  <Col md={9}>
                    <DataList />
                  </Col>
                </Row>
              }
            />
            {/* route */}
            {/* route */}
            <Route
              path="/product/:id"
              element={
                <Row>
                  <Col md={12}>
                    <DataDetail />
                  </Col>
                </Row>
              }
            />
            {/* route */}
            {/* route */}
            <Route
              path="/cart"
              element={
                <Row>
                  <Col md={12}>
                    <Cart />
                  </Col>
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
