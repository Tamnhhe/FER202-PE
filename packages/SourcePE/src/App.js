import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DataProvider from "./context/DataContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataCha from "../../FER_SPRING/src/components/DataCha";

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
                  <Col md={3}>
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
