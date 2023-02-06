import React from "react";
import styled from "styled-components";

const ButtonUI = styled("button")`
  font-weight: 600;
  font-size: 24px;
  color: #FFFFFF;
  border: 0;
  width: 384px;
  height: 63px;
  min-width: 213px;
  cursor: pointer;

  background: linear-gradient(132.34deg, #2323B3 -16.21%, #0A0D46 87.11%, #010620 123.86%);
  border-radius: 21px;
  &:disabled {
    background: gray;
  }
`;

export default React.memo(ButtonUI);
