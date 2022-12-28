import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Product = ({ product }) => {
  return (
    <div className="my-3 p-3 rounded bs">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          data-aos="flip-right"
          data-aos-duration="2500"
          src={product.image}
          variant="top"
        />
      </Link>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong style={{ color: "white" }}>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>
      <Card.Text>
        <Rating
          value={product.rating}
          text={`${product.numReviews} reviews`}

          //   color="red"
        />
      </Card.Text>
      <Card.Text style={{ color: "white" }} as="h3">
        ₹{product.price}
      </Card.Text>
    </div>
  );
};

export default Product;
