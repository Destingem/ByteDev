import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio31 from "../../../public/assets/imgs/portfolio/3/1.jpg";
import Portfilio32 from "../../../public/assets/imgs/portfolio/3/2.jpg";
import Portfilio33 from "../../../public/assets/imgs/portfolio/3/3.jpg";
import Portfilio34 from "../../../public/assets/imgs/portfolio/3/4.jpg";
import VinarstviBadin from "../../../public/assets/imgs/portfolio/3/vinarstviBadin.png";
import PolystyrenSypany from "../../../public/assets/imgs/portfolio/3/polystyrenSypany.png";
import JirkovaTesla from "../../../public/assets/imgs/portfolio/3/jirkovaTesla.png";
import ArtileaCounter from "../../../public/assets/imgs/portfolio/3/artileaCounter.png";
import EshopArtilea from "../../../public/assets/imgs/portfolio/3/eshopArtilea.png";
import Blockchainari from "../../../public/assets/imgs/portfolio/3/blockchainari.png";
import CRM from "../../../public/assets/imgs/portfolio/3/CRM.png";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const transformPortfolioData = (dataArray) => {
  return dataArray.map(data => ({
      link: "/portfolio/" + data.attributes.name.toLowerCase().replace(" ", "-") || "/service-details",
      name: (
          <>
              <h3 className="portfolio__title-3" style={{ fontSize: "2rem" }}>{data.attributes.name}</h3>
              <span>{data.attributes.type} {data.attributes.year}</span>
          </>
      ),
      image: data.attributes.preview770x938.data ? data.attributes.preview770x938.data.attributes.url : null
  }));
};
const DigitalMarketingProtfolio = ({portfolio}) => {
   
    const ourSites = transformPortfolioData(portfolio);
  return (
    <>
      <section className="portfolio__area-3">
        <div className="container pt-100 pb-150">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">
                  Naše<br />
                  stránky
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12 portfolio__slider-3">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effectfade="true"
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".pp-prev",
                  nextEl: ".pp-next",
                }}
                pagination={{ el: ".swiper-pagination", type: "fraction" }}
              >
                <div className="swiper-wrapper">
               {ourSites?.map(site => {

                return(
                  <SwiperSlide>
                    <div className="portfolio__slide-3">
                      <Link href={site?.link}>
                        
                         {site?.name}
                       
                        <Image
                       height={600}
                          priority
                          width={550}
                          style={{ height: "auto" }}
                          src={"http://38.242.151.80:1666" + site.image}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                )
               })}
                
                </div>

                <div className="swiper-pagination"></div>

                <div className="swiper-btn">
                  <div style={{ cursor: "pointer" }} className="pp-prev">
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div style={{ cursor: "pointer" }} className="pp-next">
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingProtfolio;
