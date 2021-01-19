import React from "react";
// import { Card } from "react-bootstrap";
import ItemCounter from "../itemCounter-component/itemCounter-component";


const Home = ({ greeting }) => {
  // const Style = {
  //   color: "yellow",
  //   margin: "20px auto",
  //   background: "blue",
  //   padding: "18px",
  // };

  return (
    <div>
      <ItemCounter
        init="0"
        min="0"
        max="20"
        onAdd={() => console.log("onAdd")} ></ItemCounter>
     </div>
  );
};

export default Home;
