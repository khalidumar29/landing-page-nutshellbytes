import Image from "next/image";
import { useRef, useEffect } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";

const ServiceDetailsService = ({ data }) => {
  const charAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  if (!data) return null;

  return (
    <>
      <section className='service__detail'>
        <div className='container g-0 line pb-140'>
          <div className='line-3'></div>
          <div className='row'>
            <div className='col-xxl-12'>
              <div className='sec-title-wrapper'>
                <h2 className='sec-title title-anim' ref={charAnim}>
                  {data.title}
                </h2>
              </div>
            </div>
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>
              <div className='service__detail-circle'>
                <span></span>
              </div>
            </div>
            <div className='col-xxl-9 col-xl-9 col-lg-9 col-md-9'>
              <div className='service__detail-img'>
                <Image
                  priority
                  width={960}
                  height={640}
                  style={{ height: "auto" }}
                  src={data.image || ""}
                  alt={`${data.title} detail`}
                />
                <Image
                  priority
                  width={51}
                  height={51}
                  style={{ height: "auto" }}
                  src={data.images?.shape || "/assets/imgs/icon/shape-6.png"}
                  alt='Shape'
                  className='sd-shape'
                />
              </div>
              <div className='service__detail-content'>
                {Array.isArray(data.description) ? (
                  data.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{data.description}</p>
                )}
                <p>{data.description2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsService;
