import React from "react";
import CartIcon from "../cartIcon-component/cartIcon-component";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Navbarr = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="icon">
          <CartIcon />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home </Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navbarr;
