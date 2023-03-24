import React, { Component } from "react";

class Description extends React.Component {
  render() {
    const description = this.props;
    return <div className="des">{this.props.description}</div>;
  }
}

export default Description;
