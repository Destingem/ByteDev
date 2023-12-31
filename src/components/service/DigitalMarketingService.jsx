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
      content: "Specializujeme se na vývoj na míru postavených webových stránek, které nejen vypadají skvěle, ale jsou také optimalizovány pro vyhledávače. Naše řešení nabízejí design, prototypování, kód optimalizovaný pro rychlé načítání a skvělou uživatelskou zkušenost, hosting a komplexní SEO & marketingové služby.",
      items: ["Designové podklady", "Prototyp stránky", "Optimalizovaný kód", "Dedikovaný hosting přímo u nás", "SEO Optimalizace & Marketing"],
      link: "/service/web",
      backgroundImage: "assets/imgs/service/3/nextLogo.png",
      price: "od 40 000 Kč"
    },
    {
      title: "Zakázkový vývoj React aplikací",
      content: "Vytváříme aplikace v Reactu, které nabízejí rychlý vývoj a vysokou flexibilitu. Naše služby zahrnují prototypování, dedikovaný hosting a možnost snadného převodu na Next.js či Electron.",
      items: ["Rychlost vývoje", "Prototyp aplikace", "Dedikovaný hosting přímo u nás", "Jednoduchý převod na Next.js či Electron"],
      link: "/service/web",
      backgroundImage: "assets/imgs/service/3/reactLogo.png",
      price: "od 12 000 Kč"
    },
    {
      title: "Tvorba Wordpress webů a template stránek",
      content: "Naše služby v oblasti WordPress se zaměřují na rychlý vývoj webů, které jsou snadno upravitelné. Nabízíme nejlepší poměr cena / výkon pro vaše projekty.",
      items: ["Cena", "Upravitelnost svépomocí", "Rychlý vývoj", "Nejlepší poměr cena / výkon"],
      link: "/service/web",
      backgroundImage: "assets/imgs/service/3/wpLogo.png",
      price: "od 20 000 Kč"
    },
    {
      title: "Zakázkový vývoj Electron aplikací",
      content: "Specializujeme se na vývoj aplikací v Electronu, které poskytují rychlý vývoj s cenovými výhodami oproti nativním aplikacím. Naše řešení podporují všechny platformy a nabízejí možnost snadného převodu mezi technologiemi.",
      items: ["Rychlý vývoj", "Mnohem nižší cena oproti nativnímu vývoji", "Podpora všech platforem", "Jednoduchý převod na Next.js, React či React Native"],
      link: "/service/desktop",
      backgroundImage: "assets/imgs/service/3/electronLogo.png",
      price: "od 10 000 Kč"
    },
    {
      title: "Tvorba eshopů",
      content: "Navrhujeme a vyvíjíme e-shopy, které nejen vypadají atraktivně, ale jsou také zabezpečeny a optimalizovány pro vyhledávače. Naše řešení zahrnují kompletní administraci, design a SEO optimalizaci pro maximalizaci vašich prodejů.",
      items: ["Designové podklady", "Optimalizovaný kód", "Bezpečnostní protokoly", "SEO Optimalizace & Marketing", "Kompletní administrace eshopu"],
      link: "/service/eshop",
      backgroundImage: "assets/imgs/service/3/eshops.png",
      price: "od 40 000 Kč"
    },
    {
      title: "Zakázkový vývoj dalších řešení",
      content: "Pro ty, kteří hledají specifická a individualizovaná řešení, nabízíme služby na míru, které zahrnují integraci s existujícími systémy, optimalizovaný kód a dlouhodobou podporu po vývoji.",
      items: ["Individualizovaný přístup", "Integrace s existujícími systémy", "Optimalizovaný kód", "Scalable řešení", "Podpora a údržba po vývoji"],
      link: "/service/custom",
      backgroundImage: "assets/imgs/service/3/zakazkoveReseni.png",
      price: "od 5 000 Kč"
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
                  Jsme přesvědčeni, že kvalita má svou cenu. Proto se snažíme
                  poskytovat služby na nejvyšší úrovni. Nabízíme vám
                  individuální přístup a vytvoření řešení na míru. 
                  Naše služby se pohybují ve vyšší střední cenové relaci,
                  protože veříme, že investice do vývoje se vám vrátí.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
              {services.map((service, index) => (
                <div key={index} className="service__item-3 service_animation">
                 <div>
                 <h3>
                    <Link href={service.link} className="service__title-3">
                      {service.title}
                    </Link>
                  </h3>
                  <p style={{marginBottom: "2vh"}}>{service.price}</p>
                 </div>
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
