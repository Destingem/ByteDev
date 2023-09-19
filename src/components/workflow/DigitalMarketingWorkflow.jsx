import { useEffect, useRef } from "react";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import Counter3 from "../../../public/assets/imgs/thumb/counter-3.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingWorkflow = () => {
  const workflowWrapper = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          var workflow_section_3 = workflowWrapper.current;
          if (workflow_section_3) {
            let duration = 1,
              sections = gsap.utils.toArray(".wf_panel"),
              sectionIncrement = duration / (sections.length - 1),
              tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".workflow__wrapper-3",
                  pin: true,
                  scrub: 1,
                  start: "top top",
                  end: "+=5000",
                },
              });

            tl.to(sections, {
              xPercent: -100 * (sections.length - 1),
              duration: duration,
              ease: "none",
            });

            sections.forEach((section, index) => {
              let tween = gsap.from(section, {
                opacity: 0,
                scale: 0.6,
                duration: 0.5,
                force3D: true,
                paused: true,
              });
              addSectionCallbacks(tl, {
                start: sectionIncrement * (index - 0.99),
                end: sectionIncrement * (index + 0.99),
                onEnter: () => tween.play(),
                onLeave: () => tween.reverse(),
                onEnterBack: () => tween.play(),
                onLeaveBack: () => tween.reverse(),
              });
              index || tween.progress(1);
            });

            function addSectionCallbacks(
              timeline,
              { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
            ) {
              let trackDirection = (animation) => {
                  let onUpdate = animation.eventCallback("onUpdate"),
                    prevTime = animation.time();
                  animation.direction = animation.reversed() ? -1 : 1;
                  animation.eventCallback("onUpdate", () => {
                    let time = animation.time();
                    if (prevTime !== time) {
                      animation.direction = time < prevTime ? -1 : 1;
                      prevTime = time;
                    }
                    onUpdate && onUpdate.call(animation);
                  });
                },
                empty = (v) => v;
              timeline.direction || trackDirection(timeline);
              start >= 0 &&
                timeline.add(
                  () =>
                    ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(
                      param
                    ),
                  start
                );
              end <= timeline.duration() &&
                timeline.add(
                  () =>
                    ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(
                      param
                    ),
                  end
                );
            }
          }
          for (let i = 1; i < 5; i++) {
            gsap.from(gsap.utils.toArray(`.count${i}`), {
              textContent: 0,
              duration: 1,
              delay: 3,
              ease: Power1.easeIn,
              snap: { textContent: 1 },
              stagger: 1,
              scrollTrigger: {
                trigger: ".counter__number",
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area-3">
        <div className="workflow__wrapper-3" ref={workflowWrapper}>
          <div className="choose-wrapper wf_panel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="choose-title-wrapper">
                    <h2 className="choose-title title-anim">
                      Proč <br /> využít naše služby
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="research__area wf_panel pt-150">
            <div className="container inner_content">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-sub-title">
                      Jak <br />
                      tvoříme
                    </h2>
                    <h3 className="sec-title">
                      Bezpečnost, Design, Funkcionalita, Optimalizace
                    </h3>
                    <p>
                      Spolupracuji s experty na každý obor. O bezpečnost webů se starám společně se studenty a magistrem kybernetické bezpečnosti, již sám studuji.
                      
                    </p>
                  </div>
                  <ul className="research__tools">
                    <li>
                      <a href="https://www.linkedin.com/in/ond%C5%99ej-zaplat%C3%ADlek-7aa2b31bb/">LinkedIn</a>
                    </li>
                    <li>
                      <a href="https://github.com/Destingem/">Github</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                  </ul>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="research__list">
                    <div className="research__item">
                      <div className="research__number">
                        <span>35%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Plánování a prototypování</h4>
                        <p>
                          Nejprve si společně určíme požadavky, které má projekt splňovat, časové okno a cenovou relaci.
                          Na základě toho pro vás vybereme ideální technologické řešení.
                        </p>
                      </div>
                    </div>

                    <div className="research__item">
                      <div className="research__number">
                        <span>50%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Vývoj, testování a nasazení</h4>
                        <p style={{width: "100%"}}>
                        Základem úspěšného webu je komunikace a to v každé fázi. Během vývoje a testování již tvoříme stránku na základě podkladů z fáze Plánování a prototypování, stále je  však možné projekt upravit k vašim přáním.
                        </p>
                      </div>
                    </div>

                    <div className="research__item">
                      <div className="research__number">
                        <span>15%</span>
                      </div>
                      <div className="research__info">
                        <h4 className="research__title">Provoz, podpora a marketing</h4>
                        <p>
                        Nabízíme hosting přímo u nás, výhodou je nejen nižší provozní cena, ale především možnost monitoringu a úprav.
                        Rádi vám bezplatně poradíme či se můžeme domluvit na jeho úpravě. Také nabízíme možnost placené propagace webu ve vyhledávání a na sociálních platformách.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="counter__area-3 wf_panel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="sec-title-wrapper">
                    <h2 className="sec-sub-title">
                      Byte <br />
                     v číslech
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="counter__wrapper-3">
                    <div className="counter__item-3">
                      <h2 className="counter__number count1">20+</h2>
                      <p>
                        Hotových <br />
                        projektů
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count2">8</h2>
                      <p>
                       Expertů <br />
                        v oborech
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count3">4</h2>
                      <p>
                        Obchodní<br />
                       zástupci
                      </p>
                    </div>
                    <div className="counter__item-3">
                      <h2 className="counter__number count4">10</h2>
                      <p>
                        webů <br />
                       které spravujeme
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="counter__img-3">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Counter3}
                      alt="Counter Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA area start */}
          <div className="cta__area-3 wf_panel">
            <div className="container pt-150 pb-150">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="cta__content-3">
                    <p className="cta__sub-title-2">
                     Máte nápad na svůj projekt?
                    </p>
                    <h2 className="cta__title-2">
                      Vytvořme ho společně!
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-black btn-hover btn-item"
                      >
                        <span></span>Kontaktujte <br />
                       nás <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CTA area end */}
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingWorkflow;
