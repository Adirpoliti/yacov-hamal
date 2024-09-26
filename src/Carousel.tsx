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
} from "./styles/carouselStyles";

export default function Carousel() {
  return (
    <>
      <StyledSwiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          1220: {
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
            <ClientReviewAuthor>גיא רובין</ClientReviewAuthor>
            <ClientReviewText>
              הסתבכתי עם מספר הלוואות  ההוצאות עלו על ההכנסות ולא הצלחתי לגמור את החודש    פניתי ליעקב שיעשה לי סדר בבלאגן יעקב נלחם עליי בבנקים עד שהצליח לעשות לי איחוד הלוואות   מהחזר הלוואות של 14 אלף בחודש הוא הצליח להוריד ל 8200 אודות ליעקב אני מצליח לנהל את משק הבית
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
        <StyledSwiperSlide>
          <img src="assets/images/hand.gif" alt="review" width={100} />
          <ClientReviewBox>
            <ClientReviewAuthor>איציק תורגמן</ClientReviewAuthor>
            <ClientReviewText>
              הייתי צריך למחזר משכנתה ההוצאות הכבידו עלינו פניתי ליעקב  שיעזור לנו.
              יעקב נלחם בבנקים והצליח להוריד את ההחזר אנחנו מאוד מרוצים מהשרות שיעקב נתן הוא יסודי ואיכפתי
            </ClientReviewText>
          </ClientReviewBox>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <img src="assets/images/hand.gif" alt="review" width={100} />
          <ClientReviewBox>
            <ClientReviewAuthor>אתי אור יהודה</ClientReviewAuthor>
            <ClientReviewText>
              פניתי ליעקב כדי שיעזור לי עם המשכנתא בתקופה שהריבית עלתה והשתוללה.
              הוא הרכיב תמהיל שהתאים ליכולת והצרכים שלי. לאורך כל הדרך היה זמין
              עבורי לכל שאלה והתלבטות, הראה איכפתיות ומקצועיות.  מומלץ.
            </ClientReviewText>
          </ClientReviewBox>
        </StyledSwiperSlide>
      </StyledSwiper>
    </>
  );
}
