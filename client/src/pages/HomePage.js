import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <br />
      <h1>Latest Products</h1>
      <br />
      <Row>
        {products.map((product) => (
          <Col
            key={product.id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            style={{ marginBottom: "30px" }}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;