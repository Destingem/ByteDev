import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1a.png";
import Service12 from "../../../public/assets/imgs/service/2a.png";
import Service13 from "../../../public/assets/imgs/service/3a.png";
import Service14 from "../../../public/assets/imgs/service/4a.png";
import Service15 from "../../../public/assets/imgs/service/5a.png";
import Service16 from "../../../public/assets/imgs/service/6a.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service1 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 1200) {
          gsap.to(".service__list-6", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".service__list-6",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
            },
          });

          gsap.to(".service__image-wrap", {
            scrollTrigger: {
              trigger: ".service__area-6",
              pin: ".mid-content",
              pinSpacing: true,
              start: "top top",
              end: "bottom bottom",
              markers: false,
            },
          });

          let service_images = gsap.utils.toArray(".service__image");
          let service_imagess = gsap.utils.toArray(".service__image img");
          let service_items = gsap.utils.toArray(".service__item-6");

          if (service_items) {
            service_items.forEach((image, i) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: image,
                  scrub: 1,
                  start: "top top-=600",
                  markers: false,
                },
              });
              tl.to(service_images[i], {
                zIndex: "1",
              });
              tl.to(
                service_imagess[i],
                {
                  opacity: 0,
                  duration: 1,
                  scale: 1.2,
                  ease: "power4.out",
                },
                "-=1"
              );
            });
          }

          let navItems = gsap.utils.toArray(".service__list-6 li a");
          if (navItems) {
            navItems.forEach((nav) => {
              nav.addEventListener("click", (e) => {
                e.preventDefault();
                const ids = nav.getAttribute("href");
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: ids,
                  ease: "power4.out",
                });
              });
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-6">
        <div className="container">
          <div className="row inherit-row">
            <div className="col-xxl-12">
              <div className="content-wrapper">
                <div className="left-content">
                  <ul className="service__list-6">
                    <li>
                      <a href="#service_1">
                        Vývoj webových aplikací
                        <br />
                        Next
                      </a>
                    </li>
                    <li>
                      <a href="#service_2">
                        Vývoj webových aplikací <br />
                        React
                      </a>
                    </li>
                    <li>
                      <a href="#service_3">
                        Vývoj desktop aplikací <br />
                        Electron
                      </a>
                    </li>
                    <li>
                      <a href="#service_4">
                        Tvorba webových stránek <br /> Wordpress
                      </a>
                    </li>
                    <li>
                      <a href="#service_5">
                        Tvorba eshopů <br />
                        Shoptet / Shopify
                      </a>
                    </li>
                    <li>
                      <a href="#service_6">
                        Zakázkový vývoj <br /> dalších řešení
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mid-content">
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service11}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service12}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service13}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service14}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service15}
                      alt="Service Image"
                    />
                  </div>
                  <div className="service__image">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      src={Service16}
                      alt="Service Image"
                    />
                  </div>
                </div>

                <div className="right-content">
                  <div className="service__items-6">
                    <div
                      className="service__item-6 has__service_animation"
                      id="service_1"
                      data-secid="1"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service11}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Vývoj webových aplikací v Next.js
                        </h2>
                        <p>
                          Next.js představuje revoluci v tvorbě webových
                          aplikací díky své integraci server-side renderingu a
                          statického generování stránek. Je ideální pro
                          vytváření vysoce optimalizovaných webových aplikací,
                          které nabízejí rychlý náhled a výbornou uživatelskou
                          zkušenost.
                        </p>
                        <ul>
                          <li>+ Funkční prototyp stránky</li>
                          <li>+ Napojení CMS (redakčního systému)</li>
                          <li>+ Pokročilé funkcionality</li>
                          <li>+ Server side rendering</li>
                          <li>+ Propojení s databází</li>
                          <li>+ Dynamické stránky</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service/web"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Více
                            <br />
                            o službě <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_2"
                      data-secid="2"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service12}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Vývoj webových aplikací v React.js
                        </h2>
                        <p>
                          React je přední JavaScriptová knihovna pro tvorbu
                          dynamických uživatelských rozhraní. Díky jeho
                          komponentnímu přístupu umožňuje vývojářům rychle a
                          efektivně vytvářet interaktivní webové stránky a
                          aplikace.
                        </p>
                        <ul>
                          <li>
                            + Vytváření reaktivních uživatelských rozhraní
                          </li>
                          <li>+ Integrace se stávajícími systémy a API</li>
                          <li>+ Komponentní design a architektura</li>
                          <li>+ SPA (Single Page Applications)</li>
                          <li>+ Propojení s databází a backendem</li>
                          <li>+ Optimalizace pro mobilní zařízení</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service/web"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Více
                            <br />
                            o službě <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_3"
                      data-secid="3"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service13}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Vývoj desktop aplikací v Electron.js
                        </h2>
                        <p>
                          Electron je framework, který umožňuje vytváření
                          nativních desktopových aplikací pomocí webových
                          technologií. Aplikace vytvořené v Electronu mohou
                          běžet na různých platformách a nabízejí bohaté
                          možnosti integrace.
                        </p>
                        <ul>
                          <li>
                            + Vývoj multiplatformních desktopových aplikací
                          </li>
                          <li>+ Integrace s nativními funkcemi OS</li>
                          <li>+ Propojení s externími službami a API</li>
                          <li>+ Optimalizace výkonu aplikace</li>
                          <li>+ Aktualizace a správa distribuce aplikace</li>
                          <li>+ Vytváření uživatelského rozhraní</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service/desktop"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Více
                            <br />
                            o službě <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_4"
                      data-secid="4"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service14}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Tvorba webových stránek ve Wordpressu
                        </h2>
                        <p>
                          WordPress je nejpopulárnější platforma pro tvorbu
                          webových stránek na světě. Nabízí flexibilitu a
                          snadnou správu obsahu pro weby všeho druhu, od blogů
                          po obchodní stránky.
                        </p>
                        <ul>
                          <li>+ Návrh a vývoj šablon</li>
                          <li>+ Instalace a konfigurace pluginů</li>
                          <li>+ SEO optimalizace a integrace</li>
                          <li>+ Bezpečnostní audit a hardening</li>
                          <li>+ Napojení na sociální sítě a jiné platformy</li>
                          <li>+ Správa a údržba obsahu</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service/web"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Více
                            <br />
                            o službě <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_5"
                      data-secid="5"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service15}
                          alt="Service Image"
                        />
                      </div>

                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Tvorba eshopů v Shoptetu, Shopify a dalších
                          platformách
                        </h2>
                        <p>
                          Ať už si vyberete Shoptet nebo Shopify, obě platformy
                          nabízejí kompletní řešení pro tvorbu eshopů. S
                          nástroji pro snadné nastavení, řízení zásob a
                          zpracování objednávek můžete rychle spustit svůj
                          online obchod.
                        </p>
                        <ul>
                          <li>+ Návrh a implementace eshopového designu</li>
                          <li>+ Nastavení produktů a platebních metod</li>
                          <li>+ Integrace s logistickými partnery</li>
                          <li>+ SEO a marketingová optimalizace</li>
                          <li>+ Správa a monitoring provozu</li>
                          <li>+ Vytváření a správa reklamních kampaní</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service/eshop"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Více
                            <br />
                            o službě <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="service__item-6"
                      id="service_6"
                      data-secid="6"
                    >
                      <div className="image-tab">
                        <Image
                          priority
                          style={{ width: "auto", height: "auto" }}
                          src={Service16}
                          alt="Service Image"
                        />
                      </div>
                      <div className="animation__service_page">
                        <h2 className="service__title-6">
                          Zakázkový vývoj dalších řešení
                        </h2>
                        <p>
                          Každý projekt je jedinečný a vyžaduje specifický
                          přístup. Nabízíme zakázkové řešení pro vaše konkrétní
                          potřeby, od jednoduchých aplikací po složité
                          informační systémy.
                        </p>
                        <ul>
                          <li>+ Analýza a specifikace požadavků</li>
                          <li>+ Vývoj backendových a frontendových aplikací</li>
                          <li>+ Integrace s externími službami a systémy</li>
                          <li>+ Testování a QA</li>
                          <li>+ Dokumentace a školení</li>
                          <li>+ Podpora a údržba po dokončení projektu</li>
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service/custom"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Více
                            <br />
                            o službě <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
