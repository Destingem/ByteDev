import { useEffect, useRef } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Team11 from "../../../public/assets/imgs/team/1.jpg";
import Team12 from "../../../public/assets/imgs/team/2.jpg";
import Team13 from "../../../public/assets/imgs/team/3.jpg";
import Team14 from "../../../public/assets/imgs/team/4.jpg";
import Ondrej from "../../../public/assets/imgs/team/ondrej.png";
import Sedlacek from "../../../public/assets/imgs/team/sedlacek.png";
import Sysel from "../../../public/assets/imgs/team/sysel.png";
import Humes from "../../../public/assets/imgs/team/humes.png";
import Bauer from "../../../public/assets/imgs/team/bauer.png";
import { BsFillPersonFill } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link.js";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";
import Placeholder from "../../../public/assets/imgs/team/placeholder.jpg";

const Team1 = ({people: data}) => {
  
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    const target = e.target;
    let tHero = gsap.context(() => {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(
          team_cursor,
          {
            opacity: 1,
            ease: "power4.out",
          },
          "-=0.3"
        );
      } else {
        t2.to(
          team_cursor,
          {
            opacity: 0,
            ease: "power4.out",
          },
          "-=0.3"
        );
      }
    });
    return () => tHero.revert();
  }
  
  return (
    <>
      <section className="team__area-6">
        <div className="container line pt-120">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 offset-xxl-4 offset-xl-4">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Náš <br /> tým
                </h2>
                <p>
                  Spolupracujeme s velmi různorodým týmem odborníků. Naši
                  obchodní zástupci budou s vámi vždy v kontaktu, zatímco na
                  druhé straně stojí naši vývojáři a další externisté. Všichni
                  jsou odborníci ve svém oboru a společně tvoříme tým, který je
                  schopen vytvořit nejlepší řešení pro vaše podnikání.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="team__slider">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
         {data.map((member, index) => {
         
    let {jmeno, prijmeni, pozice} = member.attributes
    var slug = "";
    if (jmeno.length <= 3) {
      slug = jmeno.toLowerCase();
    } else {
      slug = `${jmeno.toLowerCase()}-${prijmeni.toLowerCase()}`;
    }
   
    return(
  <SwiperSlide key={index}>
    <div className="team__slide">
      <Link href={"/team/" + slug}>
    <Image
          priority
          style={{ width: "100%", height: "auto", minHeight: "500px" }}
          src={member?.attributes?.preview432x550?.data?.attributes?.url ? "http://38.242.151.80:1666" + member?.attributes?.preview432x550?.data?.attributes?.url : Placeholder}
          alt="Team Member"
          width={432}
          height={550}
        />
        <div className="team__info">
          <h4 style={{color: "#545454"}} className="team__member-name">{jmeno + " " + prijmeni}</h4>
          <h5 className="team__member-role">{pozice}</h5>
        </div>
      </Link>
    </div>
  </SwiperSlide>
)
   })}
          </Swiper>
        </div>

        <div className="container line pt-150">
          <div className="line-3"></div>
        </div>

        <div className="team__join-btn">
          <div className="btn_wrapper">
            <Link href="/career" className="wc-btn-primary btn-item btn-hover">
              <span></span> Přidej <br />
              se k nám
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="team__btm">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 pb-140 text-anim">
                <h2
                  className="sec-title title-anim"
                  style={{ lineHeight: "125%" }}
                >
                  Vaše digitální projekty a služby zajištuje tým expertů z
                  celého světa.
                </h2>
                <p>
                  Snažíme se společně vytvořit nejlepší řešení pro vaše
                  podnikání za rozumnou cenu. Proto jsou naši externisté
                  odborníky z celého světa. Pečlivě vybírám své spolupracovníky
                  na základě referencí, zkušeností a oveřením jejich
                  teoretických, ale především praktických znalostí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team1;
