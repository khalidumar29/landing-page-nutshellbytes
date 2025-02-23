import { useEffect, useRef } from "react";
import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsDevelopment = ({ data }) => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  if (!data) return null;

  const {
    title,
    subtitle,
    description,
    features,
    images = {
      main: "/assets/imgs/thumb/dev-1.jpg",
      secondary: "/assets/imgs/thumb/dev-2.jpg",
    },
  } = data;

  return (
    <>
      <section className='development__area'>
        <div className='container g-0 line pt-130 pb-150'>
          <div className='line-3'></div>
          <div className='row'>
            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-5'>
              <div className='sec-title-wrapper'>
                <h2 className='sec-title animation__char_come' ref={charAnim}>
                  {title}
                </h2>
                {subtitle && <h3 className='sec-subtitle'>{subtitle}</h3>}
              </div>
            </div>
            <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7'>
              <div className='development__wrapper'>
                <div className='development__content'>
                  <p>{description}</p>
                </div>
                {features && features.length > 0 && (
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>+ {feature.title || feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8'>
              <div className='development__img'>
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={images.main}
                  alt={`${title} Main Image`}
                  width={800}
                  height={600}
                  data-speed='auto'
                />
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4'>
              <div className='development__img'>
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={images.secondary}
                  alt={`${title} Secondary Image`}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsDevelopment;
