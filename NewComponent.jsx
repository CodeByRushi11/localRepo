import React from "react";
import { Button } from "reactstrap";

const NewComponent = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <h1>I Created this components to check git hub is working or not </h1>
      <p>This is only study purpose of github account </p>
      <Button color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
};

export default NewComponent;
