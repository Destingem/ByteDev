import Link from "next/link";
import ThumbFooter from "../../../public/assets/imgs/thumb/blck.png";
import FooterLogoWhite from "../../../public/assets/imgs/logo/footer-logo-white.png";
import Image from "next/image";
import SiteLogoWhite from "../../../public/assets/imgs/logo/site-logo-white-2.png";

export default function Footer3() {
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={ThumbFooter}
            alt="Footer Image"
            data-speed="0.75"
          />
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      style={{
                        width: "50%",
                        height: "auto",
                        marginBottom: "2vh",
                      }}
                      src={SiteLogoWhite}
                      alt="Footer Logo"
                    />
                    <p>
                      S naším týmem poskytujeme profesionální vývoj webových a
                      desktop aplikací, grafický návrh a kybernetickou
                      bezpečnost. Prozkoumejte naše projekty a objevte, jak
                      můžeme oživit váš digitální svět.
                    </p>
                    <ul className="footer__social">
                      <li>
                        <a href="https://www.linkedin.com/in/ond%C5%99ej-zaplat%C3%ADlek-7aa2b31bb/">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a href="https://github.com/Destingem">
                          <span>
                            <i className="fa-brands fa-github"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/ondrejzaplatilek">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/ondrej.zaplatilek/">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Informace</h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="/about">O nás</Link>
                      </li>
                      <li>
                        <Link href="/portfolio">Případové studie</Link>
                      </li>
                      <li>
                        <Link href="/career">Spolupráce</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">Kontakt</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Kontaktujte nás</h2>
                    <ul className="footer__contact">
                      <li>Moravské Bránice 119, 664 64 Dolní Kounice</li>
                      <li>
                        <a href="tel:420608270754" className="phone">
                          (+420) 608 - 270 - 754{" "}
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@buildyexample.com">
                          info@ondrejzaplatilek.cz
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Máte nápad na svůj projekt?
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Pojďme se domluvit{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h3 className="contact-time"> 10 : 00 - 20 : 30 </h3>
                    <h4 className="contact-day">Pondělí - Něděle</h4>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © 2023 | Vytvořil <br />{" "}
                      <a href="#" target="_blank">
                        tým Byte development
                      </a>
                    </p>
                  </div>

                  <div className="footer__subscribe">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Stačí nám napsat váš email"
                      />
                      <button type="submit" className="subs-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
