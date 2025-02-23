import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/faq.jpg";
import Image from "next/image";

const ServiceDetailsFaq = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <section className='faq__area'>
        <div className='container g-0 line pb-140'>
          <div className='line-3'></div>
          <div className='row'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
              <div className='faq__img'>
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={data.image || ThumbFaq}
                  alt='FAQ Image'
                  data-speed='auto'
                />
              </div>
            </div>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
              <div className='faq__content'>
                <h2 className='faq__title title-anim'>
                  {data.title || "Product making for friendly users"}
                </h2>

                <div className='faq__list'>
                  <Accordion
                    defaultActiveKey='0'
                    className='accordion'
                    id='accordionExample'
                  >
                    {data.map((faq, index) => (
                      <Accordion.Item
                        key={index}
                        eventKey={index.toString()}
                        className='accordion-item'
                      >
                        <Accordion.Header
                          className='accordion-header'
                          id={`heading${index}`}
                        >
                          {faq.question}
                        </Accordion.Header>
                        <Accordion.Body className='accordion-body'>
                          <p>{faq.answer}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
