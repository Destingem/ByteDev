import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/faq.jpg";
import Image from "next/image";



const ServiceDetailsFaq = (CONTENT) => {
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={CONTENT?.faqImage ? CONTENT?.faqImage : ThumbFaq}
                  alt={CONTENT?.faqAlt ? CONTENT?.faqAlt : "Service detail image"}
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  {CONTENT.title}
                </h2>
                <div className="faq__list">
                  <Accordion defaultActiveKey="0" id="accordionExample">
                    {CONTENT?.faqItems?.map((item, index) => (
                      <Accordion.Item
                        key={index}
                        eventKey={index}
                      >
                        <Accordion.Header id={`heading${index}`}>
                          {item.header}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>{item.body}</p>
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
