import React, {useState} from "react";
import styled from "styled-components";
import {InputUI} from "../../UI/InputUI/InputUI";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";
import {useController, useForm} from "react-hook-form";
import SuccessIcon from "../../assets/icons/Success/SuccessIcon";
import {EMAIL_JS} from "../../lib/constants/constants";
import emailJs from "@emailjs/browser"
import ModalUI from "../../UI/ModalUI/ModalUI";


const Main = () => {
  const {control, handleSubmit, reset} = useForm<{theme: string, FIO: string, email: string, agree: boolean}>({defaultValues: {
    agree: true, FIO: "", email: "", theme: "",
    }});
  const [modal, setModal] = useState<"success" | "error" | "" | "loading">("");

  const themeController = useController({control, name: "theme", rules: {required: true}})
  const fioController = useController({control, name: "FIO", rules: {required: true}})
  const emailController = useController({control, name: "email", rules: {required: true}})
  const agreeController = useController({control, name: "agree", rules: {required: true}})


  const onSubmit = handleSubmit((data) => {
    setModal("loading");
    emailJs
      .send(
        EMAIL_JS.serviceID + "1",
        EMAIL_JS.templateID,
        {...data, agree: data.agree ? "Да" : "Нет"},
        EMAIL_JS.publicKey,
      )
      .then(() => {
        setModal("success")
        reset({agree: true, FIO: "", email: "", theme: ""});
      })
      .catch(() => {
        setModal("error")
        reset({agree: true, FIO: "", theme: "", email: ""});
      });
  })

  return (
    <SectionSC>
      <InnerContainerSC className="container">
        <FormSC onSubmit={onSubmit}>
          <FormContainerSC>
            <InputUI
              placeholder="Тема запроса"
              value={themeController.field.value}
              onChange={(e) => themeController.field.onChange(e.target.value)}
              required={true}
            />
            <InputUI
              placeholder="ФИО"
              name="name"
              value={fioController.field.value}
              onChange={(e) => fioController.field.onChange(e.target.value)}
              required={true}
            />
            <InputUI
              placeholder="E-mail"
              name="email"
              value={emailController.field.value}
              onChange={(e) => emailController.field.onChange(e.target.value)}
              type="email"
              required={true}
            />
            <ButtonUI disabled={!agreeController.field.value}>Оставить заявку</ButtonUI>
          </FormContainerSC>
          <AgreeContainerSC onClick={() => agreeController.field.onChange(!agreeController.field.value)}>
            <Checkbox type="button" onClick={() => agreeController.field.onChange(!agreeController.field.value)}>
              {agreeController.field.value ? <SuccessIcon/> : null}
            </Checkbox>
            <ParagraphSC>
              Я ознакомлен с политикой конфиденциальности, а также даю согласие на обработку своих персональных данных
            </ParagraphSC>
          </AgreeContainerSC>
        </FormSC>
      </InnerContainerSC>
      <ModalUI isOpen={!!modal} handleClose={() => setModal("")} className="modalCenter">
        {modal === "success" && "Заявка успешно отправленна"}
        {modal === "error" && `Ошибка при отправке заявки.\n Свяжитесь через контакты.\n\nE-mail: artmova.ksenya@mail.ru\nТелефон +7 (912) 308-46-80`}
        {modal === "loading" && "Отправка заявки..."}
      </ModalUI>
    </SectionSC>
  );
};

const SectionSC = styled("section")`
  height: calc(100vh - 85px);
  background-repeat: no-repeat;
  background-image: url("/bg.jpg");
  background-position: center;
  background-size: cover;
`;

const InnerContainerSC = styled("div")`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 42px;
`;

const FormSC = styled("form")`
  width: 100%;
  max-width: 1638px;
  margin: 0 auto;
`;

const FormContainerSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin-right: 32px;
    margin-bottom: 22px;
  }
  & > *:last-child {
    margin-right: 0;
  }
  @media(max-width: 800px) {
    & > * {
      margin-right: 0;
    }
  }
`;

const AgreeContainerSC = styled("div")`
  display: flex;
  align-items: center;
`;

const ParagraphSC = styled("p")`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  padding-left: 12px;
`;

const Checkbox = styled("button")`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: 2px solid white;
  border-radius: 5px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default React.memo(Main);
