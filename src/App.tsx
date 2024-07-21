import React from "react";
import {
  FirstSection,
  TextBox,
  LogoBox,
  Title,
  SubTitle,
  ArrowBox,
  SecondSection,
  FlexBoxItem,
  WhatsappBox,
  FlexboxTitle,
  FlexboxText,
  ThirdSection,
  ClientsTitle,
} from "./styles/styles";
import { Box, Divider } from "@mui/material";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <WhatsappBox>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=9720506723621"
        >
          <img src="assets/images/whatsapp.png" alt="contact" width={60} />
        </a>
      </WhatsappBox>
      <FirstSection>
        <LogoBox>
          <img src="assets/images/logo.png" alt="logo" width={100} />
        </LogoBox>
        <TextBox>
          <Title>יעקב חמאל</Title>
          <SubTitle>יועץ משכנתאות, מחזור ואיחוד הלוואות</SubTitle>
        </TextBox>
        <ArrowBox>
          <a href="#secondSection">
            <img src="assets/images/arrow.png" alt="arrow" width={100} />
          </a>
        </ArrowBox>
      </FirstSection>

      <SecondSection id="secondSection">
        <FlexBoxItem>
          <img src="assets/images/discount-bag.gif" alt="loan" width={100} />
          <Box>
            <FlexboxTitle>איחוד הלוואת</FlexboxTitle>
            <FlexboxText>
              מחפשים להקל על נטל ההלוואות שלכם ולפשט את ניהולן?
              <br />
              עם המומחיות שלי באיחוד הלוואות, אוכל ליצור עבורכם תוכנית מותאמת
              אישית שתפחית את התשלומים החודשיים ותשפר את תנאי ההלוואות שלכם. פנו
              אליי היום ונעשה יחד את הצעד הראשון לעבר חופש כלכלי וביטחון פיננסי!
            </FlexboxText>
          </Box>
        </FlexBoxItem>
        <FlexBoxItem>
          <img src="assets/images/lease.gif" alt="mortgage" width={100} />
          <FlexboxTitle>מחזור משכנתאות</FlexboxTitle>
          <FlexboxText>
            מעוניינים לחסוך בהוצאות המשכנתה ולשפר את התנאים הכלכליים שלכם?
            <br />
            אוכל להציע לכם פתרונות מותאמים אישית שיבטיחו לכם תהליך חלק ויעיל.
            פנו אליי היום ונראה יחד איך ניתן לחסוך אלפי שקלים ולשפר את העתיד
            הכלכלי שלכם!
          </FlexboxText>
        </FlexBoxItem>
        <FlexBoxItem>
          <img src="assets/images/property.gif" alt="advice" width={100} />
          <FlexboxTitle>יועץ משכנתאות</FlexboxTitle>
          <FlexboxText>
            מחפשים יועץ משכנתאות שמבין לעומק את עולם ההלוואות והמשכנתאות, ויכול
            להוביל אתכם בביטחון ובמקצועיות לעבר הבית שתמיד חלמתם עליו?
            <br />
            אני אעשה הכל כדי שתזכו בתנאים הטובים ביותר ובתהליך חלק ונוח. פנו
            אליי היום ונתחיל במסע להגשמת החלום שלכם!
          </FlexboxText>
        </FlexBoxItem>
      </SecondSection>
      <ThirdSection>
        <ClientsTitle>ההמלצות שלכם</ClientsTitle>
        <Carousel />
      </ThirdSection>
    </>
  );
}

export default App;
