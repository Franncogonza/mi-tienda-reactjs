import React from "react";
import { Card, Button } from "react-bootstrap";

const Home = ({ greeting }) => {

  const Style = {
    color: "yellow",
    margin: "20px auto",
    background: "blue",
    padding: "18px",
  };

  return (
    <div>
      <Card style={{ width: "18rem", margin: "20px auto" }}>
        <Card.Body>
          <Card.Title>
            {" "}
            <h2 style={Style}> {greeting} </h2>
            <br />
            <br />
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
