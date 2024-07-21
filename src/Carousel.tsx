import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { StyledSwiper, StyledSwiperSlide } from "./styles/carouselStyles";
import {
  ClientReviewAuthor,
  ClientReviewBox,
  ClientReviewText,
} from "./styles/styles";

export default function Carousel() {
  return (
    <>
      <StyledSwiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
      >
        <StyledSwiperSlide>
          <img src="assets/images/hand.gif" alt="review" width={100} />
            <ClientReviewBox>
              <ClientReviewAuthor>מוטי מאיר</ClientReviewAuthor>
              <ClientReviewText>
                ממליץ מאוד. בחור אמין, ישר ועושה את העבודה בדיקנות רבה
              </ClientReviewText>
            </ClientReviewBox>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <img src="assets/images/hand.gif" alt="review" width={100} />
          <ClientReviewBox>
            <ClientReviewAuthor>מוטי מאיר</ClientReviewAuthor>
            <ClientReviewText>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
              דולור סיט אמט, קונסקטורר אדיפיסינג אלית.
            </ClientReviewText>
          </ClientReviewBox>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <img src="assets/images/hand.gif" alt="review" width={100} />
          <ClientReviewBox>
            <ClientReviewAuthor>מוטי מאיר</ClientReviewAuthor>
            <ClientReviewText>
              ממליץ מאוד בחור אמין וישר ועושה את העבודה בדיקנות רבה🙏🏽🙏🏽🙏🏽
            </ClientReviewText>
          </ClientReviewBox>
        </StyledSwiperSlide>
      </StyledSwiper>
    </>
  );
}
