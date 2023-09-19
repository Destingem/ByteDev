import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let rootParent = headerTitle.current.children;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className.includes("header_title")) {

              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] == " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);
  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href="/">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={logoWhite2}
                  alt="Offcanvas Logo"
                />
              </Link>
            </div>
            <div className="offcanvas__social">
              <h3 className="social-title">Follow Us</h3>
              <ul>
                <li>
                  <a href="#">Dribbble</a>
                </li>
                <li>
                  <a href="#">Behance</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="offcanvas__links">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <Link href="/career">Career</Link>
                </li>
                <li>
                  <Link href="/blog">blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                <li>
                    <div className="header_title">
                      <Link href={"/"}>Domů</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/about"}>O nás</Link>
                      <div className="accordian-btn">
                        {accordion === 2 ? (
                          <a onClick={() => openData(0)}>-</a>
                        ) : (
                          <a onClick={() => openData(2)}>+</a>
                        )}
                      </div>
                    </div>
                    <ul
                      className="sub_title"
                      style={
                        accordion === 2 ? { display: "" } : { display: "none" }
                      }
                    >
                      <li>
                        <Link href={"/portfolio"}>Portfolio</Link>
                      </li>
                        <li>
                        <Link href={"/team"}>Náš tým</Link>
                      </li>
                      <li>
                        <Link href={"/career"}>Kariéra</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/service"}>Naše služby</Link>
                      <div className="accordian-btn">
                        {accordion === 3 ? (
                          <a onClick={() => openData(0)}>-</a>
                        ) : (
                          <a onClick={() => openData(3)}>+</a>
                        )}
                      </div>
                    </div>
                    <ul
                      className="sub_title"
                      style={
                        accordion === 3 ? { display: "" } : { display: "none" }
                      }
                    >
                      <li>
                        <Link href={"/service/web"}>Webové stránky a aplikace</Link>
                      </li>
                      <li>
                        <Link href={"/service/desktop"}>Vývoj desktop aplikací</Link>
                      </li>
                      <li>
                        <Link href={"/service/eshop"}>Tvorba eshopů</Link>
                      </li>
                      <li>
                        <Link href={"/service/custom"}>Zakázkový vývoj dalších řešení</Link>
                      </li>
                     
                    </ul>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/blog"}>Blog</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/faq"}>FAQ</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/contact"}>Kontakt</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div className="offcanvas__search">
              <form action="#">
                <input type="text" name="search" placeholder="Search keyword" />
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
              </form>
            </div>
            <div className="offcanvas__contact">
              <h3>Kontaktujte nás</h3>
              <ul>
                <li>
                  <a href="tel:02094980547">+420 608 270 754</a>
                </li>
                <li>
                  <a href="mailto:info@extradesign.com">info@ondrejzaplatilek.cz</a>
                </li>
                <li>Moravské Bránice 119, <br /> 664 64 Dolní Kounice</li>
              </ul>
            </div>
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape11}
              alt="shape"
              className="shape-1"
            />
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape12}
              alt="shape"
              className="shape-2"
            />
          </div>
          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
