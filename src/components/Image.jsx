import React from "react";

const Image = ({ img }) => {
  return (
    <div>
      <img src={img} alt="img" width={150} />
    </div>
  );
};

export default Image;
