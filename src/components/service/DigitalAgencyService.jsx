import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1/1.jpg";
import Service12 from "../../../public/assets/imgs/service/1/2.png";
import Service13 from "../../../public/assets/imgs/service/1/3.png";
import Service14 from "../../../public/assets/imgs/service/1/4.png";
import Image from "next/image";
import { getDigitalAgencyData } from "@/data/sevice";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyService = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef();

  const digitalAgencyData = getDigitalAgencyData();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList.current.children;
      console.log(listItem);
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.context(() => {
        let home1_services = gsap.utils.toArray(".animation_home1_service");
        let service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        let service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        let service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        let service__link = gsap.utils.toArray(
          ".animation_home1_service .service__link p"
        );

        home1_services.forEach((service, i) => {
          gsap.set(
            [
              service__number[i],
              service__title[i],
              service__text[i],
              service__link[i],
            ],
            { opacity: 0, x: -50 }
          );

          let home1ServiceTl = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center+=300",
              end: "bottom bottom",
              markers: false,
            },
          });

          home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2,
          });
          home1ServiceTl.to(
            service__title[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className='service__area pt-110 pb-150'>
        <div className='container'>
          <div className='row'>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
              <div className='sec-title-wrapper wrap'>
                <h2 className='sec-sub-title title-anim'>service</h2>
                <h3 className='sec-title title-anim'>
                  Solution we <br />
                  provide
                </h3>
              </div>
            </div>
            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
              <div className='service__top-text text-anim'>
                <p>
                  With every single one of our clients we bring forth a deep
                  passion for <span>creative problem solving innovations</span>{" "}
                  forward thinking brands boundaries
                </p>
              </div>
            </div>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>
              <div className='service__top-btn'>
                <div className='btn_wrapper'>
                  <Link
                    href='/service'
                    className='btn-item wc-btn-secondary btn-hover'
                  >
                    <span></span> View <br />
                    all services <i className='fa-solid fa-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='service__list-wrapper'>
            <div className='row'>
              <div className='col-xxl-4 col-xl-4 col-lg-0 col-md-0'>
                <div className='service__img-wrapper'>
                  {digitalAgencyData.map((service, index) => (
                    <Image
                      index={index}
                      priority
                      width={280}
                      height={380}
                      style={{ height: "auto" }}
                      src={service.image}
                      alt='Service Image'
                      className={`service__img img-${service.id} ${
                        activeImg === service.id ? "active" : ""
                      }`}
                    />
                  ))}

                  {digitalAgencyData.map((service) => (
                    <span
                      key={service.id}
                      className={`shapes shape-box-${service.id} ${
                        activeShape === service.id ? "current" : ""
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
              <div className='col-xxl-8 col-xl-8 col-lg-12 col-md-12'>
                <div className='service__list' ref={serviceList}>
                  {digitalAgencyData.map((service) => (
                    <Link
                      key={service.id}
                      href={`/service/${service.slug}`}
                      className={activeList == service.id ? "active" : ""}
                      data-service={service.id}
                    >
                      <div className='service__item animation_home1_service'>
                        <div className='service__number'>
                          <span>{service.number}</span>
                        </div>
                        <div className='service__title-wrapper'>
                          <h4 className='service__title'>{service.title}</h4>
                        </div>
                        <div className='service__text'>
                          <p>{service.description}</p>
                        </div>
                        <div className='service__link'>
                          <p>
                            <i className='fa-solid fa-arrow-right'></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyService;
