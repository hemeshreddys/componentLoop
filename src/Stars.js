import React from "react";
import styled from "styled-components";
const AnimComponent = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: white;
`;

const Stars = props => {
  let stars = [];
  for (let i = 1; i <= props.val; ++i) {
    stars.push(<AnimComponent {...props}>{i}</AnimComponent>);
  }
  return <div className="Stars">{stars}</div>;
};

export default Stars;
