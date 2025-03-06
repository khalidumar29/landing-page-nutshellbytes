import Image from "next/image";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape3 from "../../../public/assets/imgs/home-7/shape-3.png";

const ServiceV6Hero = () => {
  return (
    <>
      <section className='hero__area-7'>
        <div className='container'>
          <div className='row'>
            <div className='col-xxl-12'>
              <div className='hero__title-wrap-7'>
                <h1 className='hero__title-7'>
                  Digital Solutions{" "}
                  <Image
                    priority
                    width={135}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt='shape'
                  />
                  Crafted with Purpose
                  <Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={Shape2}
                    alt='shape'
                  />
                </h1>
              </div>
              <div className='hero__text-7'>
                <h2 className='about'>service</h2>
                <p>
                  We approach every challenge with a fresh perspective and
                  analytical mindset. Our passion drives us to create solutions
                  that embody universal values and unlock new possibilities for
                  our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={320}
          style={{ height: "auto" }}
          src={Shape3}
          alt='shape'
          className='shape-1'
        />
      </section>
    </>
  );
};

export default ServiceV6Hero;
