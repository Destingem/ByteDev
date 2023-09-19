import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link.js";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingPrice = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });
        let pricing_timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".price__table",
            start: "top center",
          },
        });

        gsap.set(".animation_from_bottom", { yPercent: 50 });

        pricing_timeline.to(".animation_from_bottom", {
          yPercent: 0,
          duration: 2,
          ease: "power4.out",
        });

        gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 });
        pricing_timeline.to(
          ".animation_from_top",
          {
            yPercent: 0,
            duration: 2,
            opacity: 1,
            ease: "power4.out",
          },
          "-=2"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="price__area pt-130 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Náš hosting</h2>
                <h3 className="sec-title title-anim">
                 Digitální projekt <br />
                  na klíč
                </h3>
              </div>
              <div className="faq__list-3">
                <Accordion defaultActiveKey="0" className="accordion">
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header>Máme to pod kontrolou</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          S naším hostigem vám zajistíme kompletní řešení.
                          Nemusíte tedy řešit žádnou konfiguraci, instalaci,
                          aktualizaci, zálohy, nebo bezpečnost. A můžete se
                          soustředit na to nejdůležitější, váš bussiness.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header>
                      Emaily a DNS na jednom místě
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          K našemu hostingu máte zdarma i emailové schránky a
                          rychlý přístup k nastavení DNS.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header>Ušetříme vám nejen čas</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          Hlavní nevýhodou Next.js jsou vyšší provozní náklady
                          oproti Wordpressu, či statickému webu. My vám ale
                          nabízíme hosting, který vám ihned ušetří 30% nákladů a
                          ještě vám nabídne nadstandartní služby.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header>
                     Uživatelsky přívětivý management
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                          Využíváme Platformu Plesk, která vám umožní spravovat
                          všechny vaše služby na jednom místě. Je velmi
                          uživatelsky přívětivá a nemusíte se bát, že byste
                          museli něco řešit přes příkazovou řádku jako u VPS hostingu.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header>
                    Rychlost až na prvním místě
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <p>
                         Náš server je v Německém datacentru. To vám zajištuje bezproblémové načítání pro všechny zákazníky v Česku i jinde v Evropě.
                        </p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="price__table">
                <div className="price__item animation_from_bottom">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h2 className="price__type">2 leté</h2>
                    <h3 className="price__title">2 roky klidu</h3>
                    <p>
                    Získáte 4 měsíce zdarma a po dvou letech se vám ozveme s nabídkou prodloužení. 
                    </p>
                  </div>
                  <div className="price__amount">
                    <h4 className="best-value">Nejlepší cena</h4>
                    <p>
                      349<span>  / měsíc</span>
                    </p>
                  </div>
                </div>

                <div className="price__item animation_from_top">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h2 className="price__type">Roční</h2>
                    <h3 className="price__title">Střední cesta</h3>
                    <p>
                    Pokud vám hosting bude vyhovovat, můžete si ho prodloužit o rok a získáte měsíc zdarma.
                      
                    </p>
                  </div>
                  <div className="price__amount">
                    <p>
                      399<span>  / měsíc</span>
                    </p>
                  </div>
                </div>
                <div className="price__item animation_from_top">
                  <div className="price__icon">
                    <span>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="price__info">
                    <h2 className="price__type">Měsíční</h2>
                    <h3 className="price__title">Na zkoušku</h3>
                    <p>
                      Měsíc po dokončení projektu máte zcela zdarma. Otestujte si náš hosting a uvidíte, že se vám bude líbit.
                      
                    </p>
                  </div>
                  <div className="price__amount">
                    <p>
                      439<span> / měsíc</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="price__btn btn_wrapper">
                <Link
                  href="/service"
                  className="wc-btn-black btn-hover btn-item"
                >
                  <span></span> Více <br />
                 o službách <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingPrice;
