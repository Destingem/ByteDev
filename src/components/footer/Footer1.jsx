"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, chroma } from "@/plugins";
import Link from "next/link.js";
import SiteLogoWhite from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

export default function Footer1() {
  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let endTl = gsap.timeline({
          repeat: -1,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
          },
        });
        gsap.set(".end", {
          opacity: 0,
        });
        gsap.to(".end", {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
            once: true,
          },
        });
      try{
        let mySplitText = new SplitText(".end", { type: "words,chars" });
      } catch(error) {
        console.warn("Failed to split text using GSAP's SplitText. Displaying text normally.", error);
        var mySplitText = ""

      }
        let chars = mySplitText?.chars || [];
        let endGradient = chroma.scale([
          "#F9D371",
          "#F47340",
          "#EF2F88",
          "#8843F2",
        ]);
        endTl.to(chars, {
          duration: 0.5,
          scaleY: 0.6,
          ease: "power3.out",
          stagger: 0.04,
          transformOrigin: "center bottom",
        });
        endTl.to(
          chars,
          {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            stagger: 0.03,
            duration: 1.5,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            color: (i, el, arr) => {
              return endGradient(i / arr.length).hex();
            },
            ease: "power2.out",
            stagger: 0.03,
            duration: 0.3,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8,
          },
          0.7
        );
        endTl.to(chars, {
          color: "#c9f31d",
          duration: 1.4,
          stagger: 0.05,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <footer className="footer__area-3">
        <div className="footer__top-3">
          <div className="footer__top-wrapper-3">
            <div className="footer__logo-3 pt-120">
              <Image
                priority
                style={{ width: "50%", height: "auto" }}
                src={SiteLogoWhite}
                alt="Footer Logo"
              />
              <p>
                S naším týmem poskytujeme profesionální vývoj webových a desktop
                aplikací, grafický návrh a kybernetickou bezpečnost.
                Prozkoumejte naše projekty a objevte, jak můžeme oživit váš
                digitální svět.
              </p>
            </div>
            <div className="footer__social-3">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/bytedevcz">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Destingem">Github</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bytedevcz">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/bytedev.cz/">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__contact-3">
              <Link className="end" href="/contact">
                Pojďme tvořit.
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__btm-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="footer__copyright-3">
                  <p>
                    © 2023 | Vytvořil <br />{" "}
                    <a href="#" target="_blank">
                      tým Byte development
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="footer__nav-2">
                  <ul className="footer-menu-2 menu-anim" ref={menuAnim}>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
