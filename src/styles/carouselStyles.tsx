import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)({
  width: "75rem",
  height: "15rem",
  marginBottom: "5rem",
  ".swiper-button-next, .swiper-button-prev": {
    color: "black",
    "@media (max-width:600px)": {
      display: "none",
    },
  },
  ".swiper-pagination-bullet-active": {
    background: "black",
  },
  "@media (max-width:600px)": {
    width: "30rem",
    height: "20rem",
  },
  ".swiper-pagination-bullet": {
    "@media (max-width:600px)": {
        
    }
  }
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
});
