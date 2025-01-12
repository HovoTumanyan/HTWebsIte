import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../AppProvider/ThemeProvider";
import { IsAnimation } from "../AppProvider/AnimationChecker";
export default function CareerTimeline({ slides }) {
  const { isAnimation } = useContext(IsAnimation);
  const { isDarkMode } = useContext(ThemeContext);

  const slideAnimation = {
    hidden: { x: 200 },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: 100 },
  };

  return (
    <div className="career-timeline" id="shortway-section">
      <div className="career-line">
        <Swiper
          className="swiper"
          spaceBetween={30}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={isAnimation ? slideAnimation : null}
                viewport={{ once: true }}
                className={`career-card ${index === 0 ? "highlight" : ""}`}
                style={{
                  backgroundColor: isDarkMode ? "#242424" : "#e8e8e8",
                  opacity: index === 7 ? "0" : "",
                }}
              >
                <div className="career-info">
                  {index === 0 && (
                    <div className="my-journey">
                      <h1>{slide.journey}</h1>
                      <h3 className="my-way">
                        {slide.way}
                        <FaLongArrowAltRight />
                      </h3>
                    </div>
                  )}
                  <div className="way-info">
                    <div className="lottie-animation">{slide.animate}</div>
                    <div className="text-info">
                      <pre>{slide.year}</pre>
                      <h3>{slide.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
