import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial31 from "../../../public/assets/imgs/testimonial/3/1.jpg";
import Testimonial32 from "../../../public/assets/imgs/testimonial/3/2.jpg";
import Testimonial33 from "../../../public/assets/imgs/testimonial/3/3.jpg";
import Testimonial34 from "../../../public/assets/imgs/testimonial/3/4.jpg";
import Testimonial35 from "../../../public/assets/imgs/testimonial/3/5.jpg";
import Testimonial36 from "../../../public/assets/imgs/testimonial/3/6.jpg";
import T170 from "../../../public/assets/imgs/testimonial/3/1a.png";
import T90 from "../../../public/assets/imgs/testimonial/3/2a.png";
import T110 from "../../../public/assets/imgs/testimonial/3/3a.png";
import T330 from "../../../public/assets/imgs/testimonial/3/4a.png";
import T245 from "../../../public/assets/imgs/testimonial/3/5a.png";
import T140 from "../../../public/assets/imgs/testimonial/3/6a.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";
let testimonials = [
  {
    review: "Skvělý zákaznický servis. Oceňuji především poměr ceny a výkonu. Pan Zaplatílek nám stále pomáhá když potřebujeme něco upravit.",
    name: "Michaela Humešová",
    role: "spolumajitelka Polystyren sypaný"
  },
  {
    review: "Skvělý zákaznický servis. Oceňuji především poměr ceny a výkonu. Pan Zaplatílek nám stále pomáhá když potřebujeme něco upravit.",
    name: "Michaela Humešová",
    role: "spolumajitelka Polystyren sypaný"
  }
]
gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingTestimonial = ({recenze}) => {
  const testimonialArea = useRef();
console.log(recenze);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

        gsap.to(".animation_image_zoom img", {
          scrollTrigger: {
            trigger: ".testimonial__area-3",
            start: "top center+=200",
            markers: false,
          },
          opacity: 1,
          scale: 1,
          x: 20,
          ease: "power2.out",
          duration: 2.5,
          stagger: {
            each: 0.3,
          },
        });
        function imageMoving(wrapper, image_list) {
          let container = wrapper;
          try {
            if (container) {
              container.addEventListener("mousemove", (e) => {
                var x = e.clientX;
                var y = e.clientY;
                let viewportWidth = window.innerWidth;
                let viewportHeight = window.innerHeight;
                let center = viewportWidth / 2;
                let centerHeight = innerHeight / 2;

                if (x > center) {
                  gsap.to(image_list, {
                    x: 15,
                    duration: 5,
                    ease: "power4.out",
                  });
                } else {
                  gsap.to(image_list, {
                    x: -15,
                    duration: 5,
                    ease: "power4.out",
                  });
                }
                if (y > centerHeight) {
                  gsap.to(image_list, {
                    y: 15,
                    duration: 5,
                    ease: "power4.out",
                  });
                } else {
                  gsap.to(image_list, {
                    y: -15,
                    duration: 5,
                    ease: "power4.out",
                  });
                }
              });
            }
          } catch (err) {
            console.log(err);
          }
        }
        imageMoving(testimonialArea.current, ".testimonial__area-3 img");
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="testimonial__area-3" ref={testimonialArea}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div>
                <Swiper
                  modules={[Navigation, FreeMode]}
                  spaceBetween={0}
                  slidesPerView={1}
                  freeMode={true}
                  loop={true}
                  speed={2000}
                  navigation={{
                    prevEl: ".prev-button",
                    nextEl: ".next-button",
                  }}
                  className="testimonial__slider-3"
                >
                  <div className="swiper-wrapper">
                  {recenze?.map((review)=> {
                    let {recenze, jmeno, prijmeni, job} = review.attributes

                    return(
                      <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                          {recenze}
                        </p>
                        <h2 className="client__name-3">{jmeno +" "+prijmeni}</h2>
                        <h3 className="client__role-3">{job}</h3>
                      </div>
                    </SwiperSlide>
                    )
                  })}
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="next-button swipper-btn"
                  >
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="prev-button swipper-btn"
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__images-3 animation_image_zoom">
          <Image
            priority
            width={170}
            height={200}
            src={T170}
            alt="testimonial Image"
            className="testimonial3__img"
          />
          <Image
            priority
            width={90}
            height={100}
            src={T90}
            alt="testimonial Image"
            className="testimonial3__img-2"
          />
          <Image
            priority
            width={110}
            height={130}
            src={T110}
            alt="testimonial Image"
            className="testimonial3__img-3"
          />
          <Image
            priority
            width={430}
            height={430}
            src={T330}
            alt="testimonial Image"
            className="testimonial3__img-4"
          />
          <Image
            priority
            width={250}
            height={250}
            src={T245}
            alt="testimonial Image"
            className="testimonial3__img-5"
          />
          <Image
            priority
            width={140}
            height={160}
            src={T140}
            alt="testimonial Image"
            className="testimonial3__img-6"
          />
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingTestimonial;
