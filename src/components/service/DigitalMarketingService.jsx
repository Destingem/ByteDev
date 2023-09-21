import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  const serviceList = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      imageAnimation(serviceList.current.children);
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const imageAnimation = (data) => {
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, data[i]), 1000);
      });
    }
  };
  const services = [
    {
      title: "Zakázkový vývoj webů",
      content: "Vytváříme webovou stránku v Next.js zcela na míru. Celý proces probíhá v těsné spolupráci se zákazníkem a odborníky, od designéra po SEO experta.",
      items: ["Designové podklady", "Prototyp stránky", "Optimalizovaný kód", "Dedikovaný hosting přímo u nás", "SEO Optimalizace & Marketing"],
      link: "/service/web",
      backgroundImage: "assets/imgs/service/3/nextLogo.png",
    },
    {
      title: "Zakázkový vývoj React aplikací",
      content: "Tvoříme aplikaci určenou především pro použití, při kterém záleží na rychlosti vývoje a nikoli na SEO. Klasickým příkladem může být administrace, nebo aplikace pro vnitřní použití.",
      items: ["Rychlost vývoje", "Prototyp aplikace", "Dedikovaný hosting přímo u nás", "Jednoduchý převod na Next.js či Electron"],
      link: "/service/web",
      backgroundImage: "assets/imgs/service/3/reactLogo.png",
    },
    {
      title: "Tvorba Wordpress webů a template stránek",
      content: "Tvoříme jednoduchou a dobře vypadající webovou stránku pro ty, kteří nepotřebují svůj unikátní design a funkcionality. Víme, že mnoho podniků preferuje přehlednou, rychlou a cenově dostupnou stránku oproti zakázkovému vývoji.",
      items: ["Cena", "Upravitelnost svépomocí", "Rychlý vývoj", "Nejlepší poměr cena / výkon"],
      link: "/service/web",
      backgroundImage: "assets/imgs/service/3/wpLogo.png",
    },
    {
      title: "Zakázkový vývoj Electron aplikací",
      content: "Vyvijíme electron aplikací pro všechny platformy. Vývoj probíhá v Next.js a Electronu. Výsledná aplikace je tedy webová aplikace, která je spustitelná na všech platformách. Vývoj je násobně rychlejší a levnější než vývoj nativních aplikací.",
      items: ["Rychlý vývoj", "Mnohem nižší cena oproti nativnímu vývoji", "Podpora všech platforem", "Jednoduchý převod na Next.js, React či React Native"],
      link: "/service/desktop",
      backgroundImage: "assets/imgs/service/3/electronLogo.png",
    },
    {
      title: "Tvorba eshopů",
      content: "Tvoříme eshop na míru s ohledem na vaše potřeby a požadavky. Optimalizovaný pro rychlou odezvu, SEO a uživatelskou přívětivost.",
      items: ["Designové podklady", "Optimalizovaný kód", "Bezpečnostní protokoly", "SEO Optimalizace & Marketing", "Kompletní administrace eshopu"],
      link: "/service/eshop",
      backgroundImage: "assets/imgs/service/3/eshops.png",
    },
    {
      title: "Zakázkový vývoj dalších řešení",
      content: "Poskytujeme kompletní vývojové služby pro různé platformy a technologie dle vašich potřeb a specifikací.",
      items: ["Individualizovaný přístup", "Integrace s existujícími systémy", "Optimalizovaný kód", "Scalable řešení", "Podpora a údržba po vývoji"],
      link: "/service/custom",
      backgroundImage: "assets/imgs/service/3/zakazkoveReseni.png",
    },
  ];
  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Služby</h2>
                <h3 className="sec-title title-anim">
                  Naše <br /> Služby
                </h3>
                <p>
                  Avšak vždy se snažíme o co nejlepší poměr cena-výkon. Avšak
                  nikdy nesmí být cena na úkor kvality. Proto se naše služby
                  pohybují v střední až vyšší cenové relaci.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
              {services.map((service, index) => (
                <div key={index} className="service__item-3 service_animation">
                  <h3>
                    <Link href={service.link} className="service__title-3">
                      {service.title}
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>{service.content}</p>
                    <ul className="">
                      {service.items.map((item, i) => (
                        <li key={i}>+ {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service__btn-3">
                    <div className="btn_wrapper">
                      <Link
                        href={service.link}
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span> Více informací
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: `url(${service.backgroundImage})`,
                    }}
                  ></div>
                </div>
              ))}
              </div>   
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
