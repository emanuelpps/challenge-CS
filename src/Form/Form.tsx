import { FormContainer, StyledForm, FinishButton, CsLogoContainer, CsLogoImage } from "./Styles/Styles";
import { Outlet, useLocation } from "react-router-dom";
import { ButtonFoward } from "../components/Buttons/ButtonFoward";
import { Resend } from "resend";
import ReactDOMServer from "react-dom/server";
import { EmailTemplate } from "../email/EmailTemplate";
import { log } from "console";
import useFormProgress from "../Store/FormProgress";
import CsLogo from "/assets/images/cs-logo.svg";

//const resend = new Resend("re_KWnXVUjp_AQSdsmmudb8hf5uREftM76Tx");
export const Form: React.FC = () => {
  const { progress } = useFormProgress();
  const { pathname } = useLocation();

  // const sendEmail = async (event: React.MouseEvent) => {
  //   event.preventDefault();
  //   const emailContent = ReactDOMServer.renderToString(<EmailTemplate />);
  //   try {
  //     const { data, error } = await resend.emails.send({
  //       from: "Acme <onboarding@resend.dev>",
  //       to: ["emanuelpages.ps@gmail.com"],
  //       subject: "Formulario enviado",
  //       html: emailContent,
  //     });

  //     if (error) {
  //       console.error("Error al enviar el correo:", error);
  //       alert("Hubo un error al enviar el correo");
  //     } else {
  //       console.log("Correo enviado con éxito:", data);
  //       alert("Correo enviado correctamente!");
  //       window.location.replace("https://www.customerscoops.com/");
  //     }
  //   } catch (error) {
  //     console.error("Error al intentar enviar el correo:", error);
  //     alert("Hubo un error al el correo");
  //   }
  // };

  console.log("progress" , progress);
  
  return (
    <FormContainer>
      <StyledForm>
        <CsLogoContainer>
          <CsLogoImage src={CsLogo} />
        </CsLogoContainer>
        <Outlet />
        {pathname === "/step-6" && (
          <FinishButton>
            <ButtonFoward text="Finalizar" type="button" /* onClick={sendEmail} */ />
          </FinishButton>
        )}
      </StyledForm>
    </FormContainer>
  );
};
