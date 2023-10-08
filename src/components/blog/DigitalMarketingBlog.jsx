import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Image from "next/image.js";
import Blog32 from "../../../public/assets/imgs/blog/3/2a.png";
gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingBlog = ({ blogs }) => {
  console.log(blogs);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item-3");
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
          gsap.to(".blog__animation .blog__item-3", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item-3",
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
      <section className="blog__area-3 pb-140 blog__animation">
        <div className="container">
          <div className="row ">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim pt-130">
                <h2 className="sec-sub-title">Náš blog</h2>
                <h3 className="sec-title title-anim">
                  Užitečné informace <br />
                  pro vás
                </h3>
                <p>
                  Na našem blogu vás informujeme nejen o novinkách v oblasti
                  webů, designu a marketingu. Též vám nabízíme návody a
                  tutoriály, jak upravit svůj web a zlepšit jeho výkon.
                </p>
              </div>
            </div>
          </div>

          <div className="row" >
            {blogs.slice(0, 2).map((blog, index) => {
            console.log(blog)
              return(
              <div key={blog.id} style={{display: "flex", flexDirection: "column"}} className="col-xxl-6 col-xl-6 col-lg-6">
                <article className="blog__item-3" style={{display: "flex", flexDirection: "column", minWidth: "fit-content", minHeight: "25vh"}}>
                  <div className="blog__img-wrapper-3">
                    <Link href={blog?.attributes?.Heading ? "/blog/" + blog?.attributes?.Heading.replace(" ", "").replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("?", "") :"#"}>
                      <div className="img-box">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          className="image-box__item"
                          src={blog?.attributes?.preview390x450?.data?.attributes?.url ? "http://38.242.151.80:1666" + blog.attributes.preview390x450.data.attributes.url : Blog32}
                          alt="Blog Thumbnail"
                          width={390}
                          height={450}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="blog__info-3">
                    <h4 className="blog__meta">
                      <Link href="/blog">{blog.attributes.Kategorie}</Link> . {new Date(blog.attributes.createdAt).toLocaleDateString()}
                    </h4>
                    <h5>
                      <Link href={blog?.attributes?.Heading ? "/blog/" + blog?.attributes?.Heading.replace(" ", "").replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("?", "") :"#"} className="blog__title-3">
                        {blog.attributes.Heading}
                      </Link>
                    </h5>
                    <Link href={blog?.attributes?.Heading ? "/blog/" + blog?.attributes?.Heading.replace(" ", "").replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("?", "") :"#"} className="blog__btn">
                      Číst dále{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
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

export default DigitalMarketingBlog;
