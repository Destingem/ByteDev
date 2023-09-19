import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand2 from "../../../public/assets/imgs/brand/2.png";
import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";
import Artilea from "../../../public/assets/imgs/brand/artilea.png";
import JirkovaTesla from "../../../public/assets/imgs/brand/jirkovaTesla.png";
import PolystyrenSypany from "../../../public/assets/imgs/brand/polystyrensypany.webp";
import VinarstviBadin from "../../../public/assets/imgs/brand/vinarstvibadin.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServiceBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="brand__area">
        <div
          className="container line pt-140 pb-100"
          style={{ paddingBottom: "100px" }}
        >
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim">
               Spolupracujeme s našimi klienty
              </h2>
              <div className="brand__list brand-gap" style={{display: "flex", justifyContent: "space-between"}}>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={"100%"}
                    height={67}
                    src={Artilea}
                    alt="Artilea Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={"100%"}
                    height={67}
                    src={VinarstviBadin}
                    alt="Vinarstvi Badin Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={"100%"}
                    height={64}
                    src={PolystyrenSypany}
                    alt="Polystyren Sypany Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={"100%"}
                    height={70}
                    src={JirkovaTesla}
                    alt="Jirkova Tesla Logo"
                  />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBrand;
