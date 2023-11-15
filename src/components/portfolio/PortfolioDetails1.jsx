import Link from "next/link";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/1a.png";
import Detail2 from "../../../public/assets/imgs/portfolio/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/portfolio/detail/3.jpg";
import Detail4 from "../../../public/assets/imgs/portfolio/detail/4.jpg";
import Detail5 from "../../../public/assets/imgs/portfolio/detail/5.jpg";
import Detail6 from "../../../public/assets/imgs/portfolio/detail/6.jpg";
import Detail7 from "../../../public/assets/imgs/portfolio/detail/7.jpg";
import DetailShape from "../../../public/assets/imgs/portfolio/detail/shape.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";
import parseMarkdown from "@/hooks/markdownHtml";

const PortfolioDetails1 = (a) => {
 
if(!a?.data) return null
const {
  name,
  type,
  year,
  client,
  start_date,
  end_date,
  link,
  createdAt,
  updatedAt,
  publishedAt,
  main1820x900,
  preview770x938,
  Porfolio,
  gallery,
  prilohy,
  team_members} = a?.data;
   
    let nextItem = a.allData.data.find(item => item.id === a.id + 1)
    let prevItem = a.allData.data.find(item => item.id === a.id - 1)
    
    let nextHref = nextItem ? nextItem.attributes?.name.toLowerCase().replace(" ", "-") : "/portfolio"
    let prevHref = prevItem ? prevItem.attributes?.name.toLowerCase().replace(" ", "-") : "/portfolio"
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);

  return (
    <>
      <section className="portfolio__detail">
        <div className="portfolio__detail-top">
          <div className="container g-0 line pt-110 pb-130">
            <span className="line-3"></span>

            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title animation__char_come" ref={charAnim}>
                    {name}
                  </h2>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                <div className="portfolio__detail-info">
                  <ul>
                    <li>
                      Kategorie<Link href="/category">{type}</Link>
                    </li>
                    <li>
                      Klient <span>{client}</span>
                    </li>
                    <li>
                      Záčátek <span>{new Date(start_date).toLocaleDateString()}</span>
                    </li>
                    <li>
                     Hotovo <span>{new Date(end_date).toLocaleDateString()}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__detail-thumb">
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={a?.data?.main1820x900?.data?.attributes?.url  ? "http://38.242.151.80:1666" + a.data.main1820x900.data.attributes.url  :Detail1}
            alt="Portfolio Thumbnail"
            data-speed="auto"
            width={1820}
            height={900}
            quality={100}
          />
        </div>

        <div className="portfolio__detail-content">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>

            <div className="block-content">
           {Porfolio.map(item => {
            const { metadata, htmlContent } = parseMarkdown(item.text ? item.text : "");
            return(
              <>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                   {item.heading}
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }}>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-thumb">
              {item.sectionImg1820x900?.data?.attributes?.url && <><Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={item.sectionImg1820x900?.data?.attributes?.url ? "http://38.242.151.80:1666" + item.sectionImg1820x900?.data?.attributes?.url : Detail2}
                alt="Portfolio Image"
                width={1820}
                height={900}
                data-speed="0.5"
               
              /></>}
            </div>
              </>
            )
           })}
            </div>

          

           

            {gallery?.data && <>
              <div className="block-gallery">
              <Image
                priority
                style={{ width: "50%", height: "auto" }}
                src={gallery?.data[0] ? gallery.data[0] : Detail3}
                alt="Portfolio Image"
              />
              <Image
                priority
                style={{ width: "50%", height: "auto" }}
                src={gallery?.data[1] ? gallery.data[1] : Detail4}
                alt="Portfolio Image"
              />
            </div>

            <div className="block-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={gallery?.data[2] ? gallery.data[2] : Detail5}
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>
            </>}

           

            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__detail-btns pt-150 pb-150">
                  <Link
                    href={prevHref}
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Prev Work
                  </Link>
                  <Link
                    href={nextHref}
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Next Work
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
