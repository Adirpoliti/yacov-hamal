import { styled, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)({
  width: "75rem",
  height: "15rem",
  ".swiper-button-next, .swiper-button-prev": {
    color: "black",
    "@media (max-width:1220px)": {
      display: "none",
    },
  },
  ".swiper-pagination-bullet-active": {
    background: "black",
  },
  "@media (max-width:1220px)": {
    width: "20rem",
    height: "22rem",
    ".swiper-pagination": {
      bottom: 0,
    },
  },
});

export const StyledSwiperSlide = styled(SwiperSlide)({
  width: "35rem",
  height: "15rem",
  textAlign: "center",
  fontSize: "18px",
  background: "#fff",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "5rem",
  "@media (max-width:1220px)": {
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
});

export const ClientReviewBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "15rem",
  "@media (max-width:1220px)": {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const ClientReviewAuthor = styled(Typography)({
  fontWeight: "bold",
  fontFamily: "inherit",
  fontSize: "1.2rem",
  direction: "rtl",
});

export const ClientReviewText = styled(Typography)({
  direction: "rtl",
  fontFamily: "inherit",
});
