import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { testimonialData } from "@/data/testimonial";

const AboutTestimonial = () => {
  const { videoUrl, testimonials, settings } = testimonialData;
  return (
    <>
      <section className='testimonial__area-2'>
        <div className='container g-0 line pb-140'>
          <span className='line-3'></span>

          <div className='row g-0'>
            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
              <div className='testimonial__video'>
                <video autoPlay muted loop>
                  <source src={videoUrl} type='video/mp4' />
                </video>
              </div>
            </div>

            <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
              <div className='testimonial__slider-wrapper-2'>
                <div className='testimonial__slider'>
                  <Swiper modules={[FreeMode, Navigation]} {...settings}>
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div className='testimonial__slide'>
                          <div className='testimonial__inner-2'>
                            <h2 className='testimonial__title-2'>
                              {testimonial.title}
                            </h2>
                            <p className='testimonial__text-2'>
                              {testimonial.text}
                            </p>
                            <h3 className='testimonial__author'>
                              {testimonial.author.name}
                            </h3>
                            <h4 className='testimonial__role'>
                              {testimonial.author.role}
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className='testimonial__pagination'>
                  <div style={{ cursor: "pointer" }} className='prev-button'>
                    <i className='fa-solid fa-arrow-right'></i>
                  </div>
                  <div style={{ cursor: "pointer" }} className='next-button'>
                    <i className='fa-solid fa-arrow-left'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonial;
