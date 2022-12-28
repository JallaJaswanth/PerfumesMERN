import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item >
        {step1 ? (
          <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>
            Sign In
          </Nav.Link>
        ) : (
          <Nav.Link disabled style={{ color: 'white' }}>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Nav.Link as={Link} to="/shipping" style={{ color: 'white' }}>
            Shipping
          </Nav.Link>
        ) : (
          <Nav.Link disabled style={{ color: 'white' }}>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Nav.Link as={Link} to="/payment" style={{ color: 'white' }}>
            Payment
          </Nav.Link>
        ) : (
          <Nav.Link disabled style={{ color: 'white' }}>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Nav.Link as={Link} to="/placeorder" style={{ color: 'white' }}>
            Place Order
          </Nav.Link>
        ) : (
          <Nav.Link disabled style={{ color: 'white' }}>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
