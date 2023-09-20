import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Blog1 from "../../../public/assets/imgs/blog/1.jpg";
import Blog2 from "../../../public/assets/imgs/blog/2.jpg";
import Blog3 from "../../../public/assets/imgs/blog/3.jpg";
import Image from "next/image";
import Blog32 from "../../../public/assets/imgs/blog/3/2a.png";
gsap.registerPlugin(ScrollTrigger);

const BlogRelated = ({data, id}) => {
  
  useEffect(() => {
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
      <section className="blog__related blog__animation">
        <div className="container g-0 line pt-130 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">Další články</h2>
              </div>
            </div>
          </div>

          <div className="row reset-grid">
          {data?.filter(item => {return item.id !== id}).map((article, idx) => (
              <div key={article.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <article className="blog__item">
                  <div className="blog__img-wrapper">
                    <Link href={"/blog/" + article.id}>
                      <div className="img-box">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          className="image-box__item"
                          src={article?.attributes?.preview390x450?.data?.attributes?.url ? "http://38.242.151.80:1666" + article?.attributes?.preview390x450?.data?.attributes?.url : Blog32} // předpokládám, že 'image' je klíč pro obrázek v 'attributes'
                          alt="Blog Thumbnail"
                          width={390}
                          height={450}
                        />
                      </div>
                    </Link>
                  </div>
                  <h4 className="blog__meta sub-title-anim">
                    <Link href="/category">{article.attributes.Kategorie}</Link> . {new Date(article.attributes.createdAt).toLocaleDateString()}
                  </h4>
                  <h5>
                    <Link href={"/blog/" + article.id} className="blog__title sub-title-anim">
                      {article.attributes.Heading}
                    </Link>
                  </h5>
                  <Link href={"/blog/" + article.id} className="blog__btn">
                   Číst více{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </article>
              </div>
            ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default BlogRelated;
