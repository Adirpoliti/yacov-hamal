import { Box, styled, Typography } from "@mui/material";

export const FirstSection = styled(Box)({
  position: "relative",
  height: "100vh",
  backgroundSize: "cover",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('assets/images/sectionA.png')",
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  gap: "30px",
  "@media (max-width:600px)": {
    backgroundSize: "cover",
    display: "block",
    backgroundPosition: "40% 50%",
  },
});

export const LogoBox = styled(Box)({
  marginTop: "auto",
  position: "absolute",
  top: 30,
  right: 30,
});

// export const ContentContainer = styled(Box)({
//   display: "flex",
//   gap: "2rem",
//   marginRight: "6rem",
// });

export const TextBox = styled(Box)({
  direction: "rtl",
  color: "white",
  marginRight: "10rem",
  "@media (max-width:600px)": {
    position: "absolute",
    top: 200,
    right: -130
  },
});

export const Title = styled(Typography)({
  fontSize: "3.75rem",
  fontFamily: "Heebo",
  "@media (max-width:600px)": {
    fontSize: "2.5rem",
  },
});

export const SubTitle = styled(Typography)({
  fontSize: "2.125rem",
  fontFamily: "Heebo",
  fontWeight: "bold",
  "@media (max-width:600px)": {
    fontSize: "1.5rem",
  },
});
