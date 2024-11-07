import {
  Container,
  HeaderImage,
  IndexNumber,
  Number,
  Logo,
  FormProgress,
} from "./Styles";
import { useLocation } from "react-router-dom";
import { pageFormIndex } from "../../utils/pageFormIndex";
import CsLogo from "/assets/images/cs-logo.svg";
import headerImage from "/assets/images/mobile-header.svg";

export const HeaderMobile = () => {
  const location = useLocation();

  const currentStep = pageFormIndex(location.pathname);

  return (
    <Container>
      <HeaderImage headerImage={headerImage}>
        <Logo CsLogo={CsLogo} />
        <FormProgress>
          <IndexNumber>{`0${currentStep} |`}</IndexNumber>
          <Number> &nbsp;06</Number>
        </FormProgress>
      </HeaderImage>
    </Container>
  );
};
