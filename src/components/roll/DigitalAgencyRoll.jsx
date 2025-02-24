import { FreeMode, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const DigitalAgencyRoll = () => {
  const servicesRoll = [
    "Full-Stack Development",
    "E-commerce Development",
    "Backend",
    "SaaS",
    "Cloud & DevOps Solutions",
    "Digital Marketing",
    "AI-Powered Product Development",
    "Web Scraping",
    "Automation",
    "Branding & Graphic Design",
  ];
  return (
    <>
      <section className='roll__area'>
        <div className='roll__slider'>
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            centeredSlides={true}
            allowTouchMove={false}
            speed={2000}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
              1900: {
                slidesPerView: 8,
              },
            }}
          >
            {servicesRoll.map((service, index) => (
              <SwiperSlide
                style={{
                  // flex: "0 0 100%",
                  minWidth: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={index}
              >
                <div className='roll__slide'>
                  <h2>{service}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyRoll;
