import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import {createPortal} from "react-dom";
import ModalUI from "../../UI/ModalUI/ModalUI";
import { about } from "../../lib/mock/aboutMock";

type ModalState = "contacts" | "requisites" | ""

const Header = () => {
  const [modal, setModal] = useState<ModalState>("")

  const handleModalClose = (data: ModalState) => {
    return () => {
      setModal(data)
    }
  }

  return (
    <HeaderSC>
      <SectionSC className="container">
        <LogoContainerSC>
          <Logo/>
        </LogoContainerSC>
        <NavSC>
          <UlSC>
            {/* <LiSC style={{marginRight: "30px"}}> */}
              {/* <ButtontSC onClick={handleModalClose("requisites")} type="button">Реквизиты</ButtontSC> */}
            {/* </LiSC> */}
            <LiSC>
              <ButtontSC onClick={handleModalClose("contacts")} type="button">
                Контакты
              </ButtontSC>
            </LiSC>
          </UlSC>
        </NavSC>
        <ModalUI isOpen={modal !== ""} handleClose={handleModalClose("")}>
          {modal === "contacts" && (
            <>
              Email: {about.Email}{"\n"}
              Телефон: {about.phone}
            </>
          )}
          {/* {modal === "requisites" && (
            <>
              -ИП Артёмова Ксения Андреевна{"\n"}
              -E-mail: artmova.ksenya@mail.ru{"\n"}
              -Телефон +7 (912) 308-46-80{"\n"}
              -ИНН 743006085219{"\n"}
            </>
          )} */}
        </ModalUI>
      </SectionSC>
    </HeaderSC>
  );
};

const HeaderSC = styled("header")`
  position: sticky;
  top: 0;
  z-index: 1;
  background: linear-gradient(310.59deg, #F2F3F6 3.8%, #E5E6EC 119.99%);
  box-shadow: 3px 3px 20px rgba(36, 65, 93, 0.302);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 79px;
`

const LogoContainerSC = styled("div")`
  margin-right: 15px;
  @media(max-width: 600px) {
    & > svg {
      width: 150px;
      height: 50px
    }
  }
  @media(max-width: 375px) {
    & > svg {
      width: 120px;
      height: 50px
    }
  }
  @media(max-width: 330px) {
    & > svg {
      width: 100px;
      height: 50px
    }
  }
`;

const SectionSC = styled("section")`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavSC = styled("nav")`
`;

const UlSC = styled("ul")`
  display: flex;
`;


const LiSC = styled("li")`
  color: #646776;
  @media(max-width: 400px) {
    font-size: 14px;
  }
  //list-style-type: none;
`;

const ButtontSC = styled("button")`
  padding: 0;
  color: inherit;
  border: 0;
`;


export default React.memo(Header);
