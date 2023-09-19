import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import JobDetailsModal1 from "./JobDetailsModal1";
import JobDetailsModal2 from "./JobDetailsModal2";
import parseMarkdown from "@/hooks/markdownHtml";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const JobDetails1 = ({data}) => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 767) {
          gsap.to(".job__detail-sidebar", {
            scrollTrigger: {
              trigger: ".job__detail",
              pin: ".job__detail-sidebar",
              pinSpacing: false,
              start: "top top",
              end: "bottom center",
              markers: false,
              delay: 1,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  const jobApply = () => {
    setModal1(true);
  };
  const { metadata, htmlContent } = parseMarkdown(data.text);
  return (
    <>
      <section className="job__detail">
        <div className="container g-0 line pb-110">
          <span className="line-3"></span>

          <div className="row">
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8">
              <div className="job__detail-wrapper">
                <h2 className="sec-title">{data.name}</h2>
                <ul className="job__detail-meta">
                  <li>
                    <span>Lokace</span> {data.misto}
                  </li>
                  <li>
                    <span>Datum</span> {data.datum}
                  </li>
                  <li>
                    <span>Typ práce</span> {data.typ_prace}
                  </li>
                </ul>
                <div className="job__detail-content">
                <p dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
                </div>

                <div className="job__apply btn_wrapper">
                 <Link href={"/contact"}>
                 <button
                    onClick={jobApply}
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span> Přidejte se <br />
                    k nám <i className="fa-solid fa-arrow-right"></i>
                  </button>
                 </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
              <div className="job__detail-sidebar">
                <ul>
                  <li>
                    <span>Požadované zkušenosti</span> {data.experience}
                  </li>
                  <li>
                    <span>Pracovní doba</span> {data.hours}
                  </li>
                  <li>
                    <span>Pracovní dny</span> {data.work_days}
                  </li>
                  <li>
                    <span>Mzda</span> {data.salary}
                  </li>
                  <li>
                    <span>Místa</span> {data.pocet + " volná místa"}
                  </li>
                  <li>
                    <span>Uzávěrka</span> {data.deadline}
                  </li>
                  {data.dalsi_atributy && Object.entries(data.dalsi_atributy).map(([key, value]) => (
          <li key={key}>
            <span>{key}</span> {value}
          </li>
        ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        
      </div>
    </>
  );
};

export default JobDetails1;
