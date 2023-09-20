import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import Team1 from "../../../public/assets/imgs/team/1.jpg";
import Team2 from "../../../public/assets/imgs/team/2.jpg";
import Team3 from "../../../public/assets/imgs/team/3.jpg";
import Team4 from "../../../public/assets/imgs/team/4.jpg";
import {BsFillPersonFill} from "react-icons/bs";
import Ondrej from "../../../public/assets/imgs/team/ondrej.png";
import Sedlacek from "../../../public/assets/imgs/team/sedlacek.png";
import Sysel from "../../../public/assets/imgs/team/sysel.png";
import Humes from "../../../public/assets/imgs/team/humes.png";
import Bauer from "../../../public/assets/imgs/team/bauer.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";
import Placeholder from "../../../public/assets/imgs/team/placeholder.jpg";

const AboutTeam = ({team}) => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", mousemoveHandler);
  }
  function mousemoveHandler(e) {
    let team_cursor = document.getElementById("team_cursor");
    try {
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
    } catch (error) {
      
    }
  }

  
  return (
    <>
      <section className="team__area pt-140 pb-140">
        <div className="sec-title-wrapper">
          <h2 className="sec-sub-title title-anim">Náš tým</h2>
          <h3 className="sec-title title-anim">S kým spolupracujeme</h3>
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
   {team.map((member, index) => {
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
          <h4 className="team__member-name">{jmeno + " " + prijmeni}</h4>
          <h5 className="team__member-role">{pozice}</h5>
        </div>
      </Link>
    </div>
  </SwiperSlide>
)
   })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
