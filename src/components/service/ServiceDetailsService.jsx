import ServiceDetail from "../../../public/assets/imgs/thumb/service-detail.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

const ServiceDetailsService = (serviceDetailData) => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  {serviceDetailData?.title}
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <Image
                  priority
                  width={960}
                  style={{ height: "auto" }}
                  src={serviceDetailData?.image1?.src ? serviceDetailData?.image1?.src : ServiceDetail}
                  alt={serviceDetailData?.image1?.alt}
                />
                <Image
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={serviceDetailData?.image2?.src ? serviceDetailData?.image2?.src : Shape6}
                  alt={serviceDetailData?.image2?.alt}
                  className={"sd-shape"}
                />
              </div>
              <div className="service__detail-content">
                <p>
                  {serviceDetailData?.description1}
                </p>
                <p>
                  {serviceDetailData?.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsService;
