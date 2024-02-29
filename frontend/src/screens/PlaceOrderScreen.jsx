import { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.shippingAddress.address, cart.paymentMethod, navigate]);

  return (
    <>
      <h1>Place Order</h1>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}></Col>
        <Col md={4}></Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;