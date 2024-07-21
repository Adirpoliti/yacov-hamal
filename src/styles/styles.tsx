import { Box, styled, Typography } from "@mui/material";

export const WhatsappBox = styled(Box)({
  position: "fixed",
  bottom: 20,
  left: 30,
});

export const FirstSection = styled(Box)({
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: "url('assets/images/sectionA.jpg')",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "30px",
  "@media (max-width:600px)": {
    backgroundSize: "cover",
    backgroundPosition: "60% 50%",
  },
});

export const LogoBox = styled(Box)({
  alignSelf: "end",
  marginRight: "3rem",
  marginTop: "2rem",
});

export const TextBox = styled(Box)({
  direction: "rtl",
  color: "white",
  alignSelf: "start",
  justifySelf: "center",
  marginLeft: "20rem",
  "@media (max-width:600px)": {
    marginLeft: "0",
    marginRight: "1rem"
  },
});

export const Title = styled(Typography)({
  fontSize: "3.75rem",
  fontFamily: "Heebo",
  fontWeight: "bold",
  textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
  "@media (max-width:600px)": {
    fontSize: "2.5rem",
  },
});

export const SubTitle = styled(Typography)({
  fontSize: "2.125rem",
  fontFamily: "Heebo",
  fontWeight: "bold",
  textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
  "@media (max-width:600px)": {
    fontSize: "1.5rem",
  },
});

export const ArrowBox = styled(Box)({
  alignSelf: "center",
  marginBottom: "2rem",
  transformOrigin: "50% 50%",
  animation: "downarrow 0.7s infinite alternate ease-in-out",
  "@keyframes downarrow": {
    "0%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(0.4em)",
    },
  },
});

export const SecondSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "5rem 12.5rem 5rem 12.5rem",
  gap: "7rem",
  flexWrap: "wrap",
  "@media (max-width:600px)": {
    flexDirection: "column",
    gap: "0",
    margin: "0",
  },
});

export const FlexBoxItem = styled(Box)({
  width: "21.875rem",
  height: "25rem",
  boxSizing: "border-box",
  textAlign: "center",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0.5rem",
});

export const FlexboxTitle = styled(Typography)({
  fontSize: "2rem",
  fontFamily: "heebo",
  fontWeight: "bold",
});

export const FlexboxText = styled("p")({
  fontFamily: "heebo",
  direction: "rtl",
  fontSize: "1.1rem",
  width: "17rem"
});

export const ThirdSection = styled(Box)({
display: "flex",
justifyContent: "center",
alignItems: "center",
flexWrap: "wrap",
textAlign: "center",
flexDirection: "column",
margin: "5rem 0",
"@media (max-width:600px)": {
  marginTop: "5rem"
}
});

export const ClientsTitle = styled(Typography)({
  fontSize: "2rem",
  fontFamily: "heebo",
  fontWeight: "bold",
})

export const ClientReviewBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "15rem",
})

export const ClientReviewAuthor = styled(Typography)({
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: "1.2rem",
  direction: "rtl"
})
export const ClientReviewText = styled(Typography)({
  direction: "rtl",
  fontFamily: "inherit",
})