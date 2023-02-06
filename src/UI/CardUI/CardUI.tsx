import React from "react";
import styled from "styled-components";

interface ICardUIProps {
  title: string
  description: string;
}

const CardUI = ({title, description}: ICardUIProps) => {
  return (
    <ContainerSC>
      <TitleSC>
        {title}
      </TitleSC>
      <DescriptionSC>
        {description}
      </DescriptionSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  max-width: 259px;
  border-radius: 40px;
  filter: drop-shadow(-4px -4px 30px #FFFFFF);
  background: linear-gradient(310.59deg, #F2F3F6 3.8%, #E5E6EC 119.99%);
  padding: 62px 25px 34px;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`
const TitleSC = styled("h4")`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #001A72;
  margin-bottom: 28px !important;
`
const DescriptionSC = styled("p")`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #646776;
`

export default React.memo(CardUI);
