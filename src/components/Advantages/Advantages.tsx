import React from "react";
import {TitleSC} from "../../UI/TitleSC";
import {WrapperSC} from "../../UI/WrapperSC";
import CardUI from "../../UI/CardUI/CardUI";
import styled from "styled-components";

const cardArr = [
  {title: "Ответственный подход", description: "Наш ответственный подход распространяется на всё, что мы делаем"},
  {title: "Лучшие цены на рынке", description: "У нас самые лучшие цены, квартальные акции и скидки постоянным клиентам"},
  {title: "Качественные услуги", description: "Качество услуг и индивидуальный подход делают нашу компанию уникальной "},
  {title: "Бессрочная гарантия", description: "Мы предлагаем вам пожизненную гарантию на нашу продукцию"},
]

const Advantages = () => {
  return (
    <WrapperSC className="container-two">
      <TitleSC><span style={{color: "#000000"}}>Почему именно</span> Мы?</TitleSC>
      <CardContainerSC>
        {cardArr.map((cardItem) => (
          <CardUI key={cardItem.title} {...cardItem}/>
        ))}
      </CardContainerSC>
    </WrapperSC>
  );
};

const CardContainerSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > * {
    margin-right: 15px;
    margin-bottom: 15px;
  }
`;

export default React.memo(Advantages);
