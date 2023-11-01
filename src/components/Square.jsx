import { useEffect, useState } from "react";
import styled from "styled-components";

const Square = styled.div`
border: 1px solid #e2dcdc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s; /* Add a transition for a smooth effect */
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 255, 0.5); /* Customize shadow values as needed */
  }
`;

export default ({ children, id ,bgcolor,onTouch}) => {
  return (
    <Square id={id} style={{ backgroundColor: bgcolor} } onClick={onTouch}>
      {children}
    </Square>
  );
};
