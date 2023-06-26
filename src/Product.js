import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const Product = () => {
  const baseUrl = process.env.REACT_APP_BASEURL;
  const apikey = process.env.REACT_APP_APIKEY;

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const dataProduct = await response.json();
    setProducts(dataProduct);
  };

  useEffect(() => {
    getProducts();
  });
  return (
    <div className="container">
      <h1>My Product</h1>
      <div className="row">
        {products.map(function (product) {
          return (
            <div className="col-4">
              <CardProduct
                key={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
