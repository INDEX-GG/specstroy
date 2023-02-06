import React, {ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";
import styled from "styled-components";

interface IModalUIProps {
  isOpen: boolean;
  children: ReactNode;
  handleClose: () => void;
  className?: string;
}

const ModalUI = ({isOpen, children, className = "", handleClose}: IModalUIProps) => {

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      window.addEventListener("keydown", onKey)
    } else {
      document.body.style.overflowY = "scroll";
      window.removeEventListener("keydown", onKey)
    }
    return () => {
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen]);

  return isOpen ? (
    <>
      <ModalContainerSC className={className}>
        <ModalTextSC>
          {children}
        </ModalTextSC>
      </ModalContainerSC>
      {createPortal(<ModalBackdoorSC onClick={handleClose}/>, document.querySelector("#root") as HTMLElement)}
    </>
  ) : null;
};

const ModalContainerSC = styled("div")`
  position: absolute;
  right: 22px;
  top: 120%;
  background: linear-gradient(309.34deg, #F2F3F6 -13.68%, #E5E6EC 171.92%);
  box-shadow: -4px -4px 20px rgba(255, 255, 255, 0.43);
  border-radius: 16px;
  padding: 22px 29px;
  z-index: 10;
  @media (max-width: 350px) {
    right: 5px;
  }
`;

const ModalTextSC = styled("p")`
  font-weight: 400;
  font-size: 16px;
  color: #001A72;
  margin-bottom: 2px;
  white-space: pre-line;
`;

const ModalBackdoorSC = styled("div")`
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default React.memo(ModalUI);
