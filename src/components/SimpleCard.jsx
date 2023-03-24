import React, { Component } from "react";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";
import Logo from "../assets/react.svg";

class SimpleCard extends React.Component {
  render() {
    return (
      <div className="flex">
        <Image img={Logo} />
        <div>
          <Title title="This is a Title" />
          <Description description="This is a Description.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, earum." />
        </div>
      </div>
    );
  }
}

export default SimpleCard;
