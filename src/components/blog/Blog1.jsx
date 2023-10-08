import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import Blog11 from "../../../public/assets/imgs/blog/1.jpg";
import Blog22 from "../../../public/assets/imgs/blog/2.jpg";
import Blog33 from "../../../public/assets/imgs/blog/3.jpg";
import Blog44 from "../../../public/assets/imgs/blog/4.jpg";
import Blog55 from "../../../public/assets/imgs/blog/5.jpg";
import Blog66 from "../../../public/assets/imgs/blog/6.jpg";
import animationCharCome from "@/lib/utils/animationCharCome";
import Blog32 from "../../../public/assets/imgs/blog/3/2a.png";
gsap.registerPlugin(ScrollTrigger);

const Blog1 = ({ blogPosts }) => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
 
  return (
    <>
      <section className="blog__area-6 blog__animation">
        <div className="container g-0 line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="row pb-130">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Co je
                  <br />
                  nového
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                  Zde se sdílíme nejnovější poznatky v oblasti webového a
                  desktopového vývoje, grafického designu a kybernetické
                  bezpečnosti. Prozkoumejte naše články a získejte užitečné
                  tipy, jak oživit a chránit váš digitální svět.
                </p>
              </div>
            </div>
          </div>
          <div className="row reset-grid">
        {blogPosts.map((posto, index) => {
        
          const post = posto?.attributes
          return(
          <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
            <article className="blog__item">
              <div className="blog__img-wrapper">
                <Link href={posto?.attributes?.Heading ? "/blog/" + posto?.attributes?.Heading.replace(" ", "").replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("?", "") :"#"}>
                  <div className="img-box">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      className="image-box__item"
                      src={ post?.preview390x450?.data?.attributes?.url ? "http://38.242.151.80:1666" +post?.preview390x450?.data?.attributes?.url : Blog32}
                      alt="Blog Thumbnail"
                      width={390}
                      height={450}
                    />
                  </div>
                </Link>
              </div>
              <h4 className="blog__meta">
                <Link href="/blog">{post.Kategorie}</Link> . {new Date(post.createdAt).toLocaleDateString()}
              </h4>
              <h5>
                <Link href={posto?.attributes?.Heading ? "/blog/" + posto?.attributes?.Heading.replace(" ", "").replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("?", "") :"#"} className="blog__title">
                  {post.Heading}
                </Link>
              </h5>
              <Link href={posto?.attributes?.Heading ? "/blog/" + posto?.attributes?.Heading.replace(" ", "").replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("?", "") :"#"} className="blog__btn">
                Číst dále{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </article>
          </div>
        )
        })}
      </div>
        </div>
      </section>
    </>
  );
};

export default Blog1;
