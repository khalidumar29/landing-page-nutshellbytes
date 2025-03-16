import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";

const PortfolioElementV4 = ({ title, description, portfolio }) => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className='portfolio__area-3 portfolio-v4'>
        <div className='container pt-100 pb-150'>
          <div className='row pb-150'>
            <div className='col-xxl-8 col-xl-7 col-lg-6 col-md-6'>
              <div className='sec-title-wrapper'>
                <h2 className='sec-title-2 animation__char_come' ref={charAnim}>
                  {title}
                </h2>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-5 col-lg-6 col-md-6'>
              <div className='blog__text'>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xxl-12 portfolio__slider-3'>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effectfade='true'
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".pp-prev",
                  nextEl: ".pp-next",
                }}
                pagination={{ el: ".swiper-pagination", type: "fraction" }}
              >
                <div className='swiper-wrapper'>
                  {portfolio.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className='portfolio__slide-3'>
                        <Link href={`/portfolio/${slide.slug}`}>
                          <h3 className='portfolio__title-3'>
                            {slide.title} <span>{slide.type}</span> {slide.year}
                          </h3>
                          <Image
                            priority
                            width={550}
                            height={550}
                            style={{ height: "auto" }}
                            src={slide.image}
                            alt={`${slide.title} ${slide.type}`}
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>

                <div className='swiper-pagination'></div>

                <div className='swiper-btn'>
                  <div style={{ cursor: "pointer" }} className='pp-prev'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                  <div style={{ cursor: "pointer" }} className='pp-next'>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioElementV4;
