import React, {useRef} from "react";
import {WrapperSC} from "../../UI/WrapperSC";
import {TitleSC} from "../../UI/TitleSC";
import styled from "styled-components";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";

const About = () => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  return (
    <WrapperSC style={{  paddingBottom: "113px"}} className="container-two">
      <TitleSC>Наша деятельность</TitleSC>
      <ParagraphSC>
        Компания МеталлТех зарекомендовала себя как солидный и надежный партнер для многих компаний работающих в области закупок, проектирования и производства деталей. У нас вы можете найти запчасти для любой спецтехники. Широкий ассортимент и приятные цены ждут вас! Мы гарантируем, что представленные товары прослужат долго. Покупайте у нас, ведь все наши запчасти оригинальные.
      </ParagraphSC>
      <PdfContainer>
        <PdfTextSC>
          Не можете определиться что Вам нужно? Тогда посмотрите наш каталог продукции
        </PdfTextSC>
        <CustomButtonSC onClick={() => linkRef.current?.click()}>
          Скачать каталог
        </CustomButtonSC>
        <a ref={linkRef} href="/Каталог.pdf" download style={{position: "absolute", visibility: "hidden", width: "0px", height: "0px"}}>123</a>
      </PdfContainer>
    </WrapperSC>
  );
};

const ParagraphSC = styled("p")`
  font-size: 20px;
  text-align: center;
  color: #646776;
  margin-bottom: 39px;
`;
const PdfContainer = styled("div")`
  background: #EDEEF2;
  box-shadow: 3px 3px 20px rgba(36, 65, 93, 0.302);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
`;

const PdfTextSC = styled("p")`
  padding: 21px 32px;
  font-weight: 400;
  font-size: 18px;
  color: #646776;
  @media(max-width: 768px) {
    font-size: 14px;
  }
`;

const CustomButtonSC = styled(ButtonUI)`
  padding: 0 10px;
  max-width: 281px;
  min-width: auto;
  background: #001A72;
  border-radius: 0 16px 16px 0;
  height: inherit;
`;

export default React.memo(About);
