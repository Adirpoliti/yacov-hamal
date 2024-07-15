import React from "react";
import { FirstSection, TextBox, LogoBox, Title, SubTitle } from "./styles/styles";
import { Typography } from "@mui/material";

function App() {
  return (
    <FirstSection>
      <LogoBox>
        <img src="assets/images/Untitled-2.png" width={100} />
      </LogoBox>
      {/* <ContentContainer> */}
      <TextBox>
        <Title>
          יעקב חמאל
        </Title>
        <SubTitle>
          יועץ משכנתאות, מחזור ואיחוד הלוואות
        </SubTitle>
      </TextBox>
      {/* <Box sx={{marginTop: "auto"}}>
          <img src="assets/images/Untitled-2.png" width={100} />
        </Box> */}
      {/* </ContentContainer> */}
    </FirstSection>
  );
}

export default App;
