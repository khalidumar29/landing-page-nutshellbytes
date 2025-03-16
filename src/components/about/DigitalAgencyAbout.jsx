import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DigitalAgencyAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className='about__area'>
        <div className='container line g-0 pt-140 pb-130'>
          <span className='line-3'></span>
          <div className='row'>
            <div className='col-xxl-12'>
              <div className='about__title-wrapper'>
                <h3 className='sec-title title-anim'>
                  We unlock the potential of your business with creative design
                  & solutions
                </h3>
              </div>

              <div className='about__content-wrapper'>
                <div className='about__img'>
                  <div className='img-anim about__img_left'>
                    <Image
                      priority
                      width={440}
                      height={550}
                      style={{ width: "auto", height: "auto" }}
                      src='/home/home1.jpg'
                      alt='About Image'
                      data-speed='0.3'
                    />
                  </div>

                  <div className='about__img-right'>
                    <Image
                      priority
                      width={220}
                      height={250}
                      style={{ height: "auto" }}
                      src='/home/home2.jpg'
                      alt='About Image Right'
                      data-speed='0.5'
                    />
                    <div className='shape'>
                      <div className='secondary' data-speed='0.9'></div>
                      <div className='primary'></div>
                    </div>
                  </div>
                </div>

                <div className='about__content text-anim'>
                  <p>
                    From cutting-edge software development and strategic digital
                    marketing to creative storytelling and social media
                    management, NutshellByte has you covered. We’re not just
                    another service provider—we’re your trusted technology and
                    marketing partner. Whether it’s building high-performing web
                    platforms, driving results through data-driven advertising,
                    or crafting compelling brand narratives, we deliver
                    solutions that make an impact.
                  </p>

                  <div className='cursor-btn btn_wrapper'>
                    <Link
                      className='btn-item wc-btn-primary btn-hover'
                      href='/about'
                    >
                      <span></span> Explore Us{" "}
                      <i className='fa-solid fa-arrow-right'></i>
                    </Link>
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

export default DigitalAgencyAbout;
