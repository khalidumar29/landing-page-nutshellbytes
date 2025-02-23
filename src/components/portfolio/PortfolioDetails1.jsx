import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";

const PortfolioDetails1 = ({ data }) => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  if (!data) return null;

  return (
    <>
      <section className='portfolio__detail'>
        <div className='portfolio__detail-top'>
          <div className='container g-0 line pt-110 pb-130'>
            <span className='line-3'></span>
            <div className='row'>
              <div className='col-xxl-8 col-xl-8 col-lg-7 col-md-7'>
                <div className='sec-title-wrapper'>
                  <h2 className='sec-title animation__char_come' ref={charAnim}>
                    {data.title}
                  </h2>
                </div>
              </div>

              <div className='col-xxl-4 col-xl-4 col-lg-5 col-md-5'>
                <div className='portfolio__detail-info'>
                  <ul>
                    <li>
                      Category{" "}
                      <Link href={data.headerInfo.category.link}>
                        {data.headerInfo.category.name}
                      </Link>
                    </li>
                    <li>
                      Client <span>{data.headerInfo.client}</span>
                    </li>
                    <li>
                      Start Date <span>{data.headerInfo.startDate}</span>
                    </li>
                    <li>
                      Handover <span>{data.headerInfo.handover}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='portfolio__detail-thumb'>
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={data.mainImage}
            alt='Portfolio Thumbnail'
            data-speed='auto'
            width={1200}
            height={800}
          />
        </div>

        <div className='portfolio__detail-content'>
          <div className='container g-0 line pt-140'>
            <span className='line-3'></span>

            {data.sections.map((section, index) => (
              <div key={index} className='block-content'>
                <div className='row'>
                  <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
                    <h2 className='portfolio__detail-title title-anim'>
                      {section.title}
                    </h2>
                  </div>

                  <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
                    <div className='portfolio__detail-text'>
                      <p>{section.description}</p>
                      {section.features && (
                        <ul>
                          {section.features.map((feature, idx) => (
                            <li key={idx}>+ {feature}</li>
                          ))}
                        </ul>
                      )}
                      {section.typography && (
                        <div className='fonts'>
                          <Image
                            priority
                            style={{ width: "253px", height: "auto" }}
                            src={section.typography.fontImage}
                            alt='Font Style'
                            width={253}
                            height={100}
                          />
                          <ul>
                            {section.typography.styles.map((style, idx) => (
                              <li key={idx} className={style.type}>
                                <span>{style.type}</span> {style.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className='block-gallery'>
              {data.gallery.split.map((item, index) => (
                <Image
                  key={index}
                  priority
                  style={{ width: "50%", height: "auto" }}
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                />
              ))}
            </div>

            <div className='block-thumb'>
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={data.gallery.fullWidth.image}
                alt={data.gallery.fullWidth.alt}
                data-speed='0.5'
                width={1200}
                height={800}
              />
            </div>

            <div className='block-img-text'>
              {data.gallery.conclusion.images.map((item, index) => (
                <Image
                  key={index}
                  priority
                  width={375}
                  style={{ height: "auto" }}
                  src={item.image}
                  alt={item.alt}
                  height={250}
                />
              ))}
              <p>{data.gallery.conclusion.text}</p>
            </div>

            <div className='row'>
              <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12'>
                <div className='portfolio__detail-btns pt-150 pb-150'>
                  <Link
                    href={data.navigation.prev.link}
                    className='wc-btn-primary btn-hover'
                  >
                    <span></span> {data.navigation.prev.text}
                  </Link>
                  <Link
                    href={data.navigation.next.link}
                    className='wc-btn-primary btn-hover'
                  >
                    <span></span> {data.navigation.next.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails1;
