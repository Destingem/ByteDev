import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useViewportSize } from "@mantine/hooks";
import { useRouter } from "next/router";
import { use, useEffect, useRef } from "react";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const router = useRouter();
  const { height, width } = useViewportSize();
  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Pojďme se domluvit
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  {
                    "Neváhejte nám zavolat či napsat. Dle vašich preferencí s vámi rádi zkonzultujeme váš projekt online či osobně."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {"Ozvěte se nám"}
                </h3>
                <ul>
                <li>
                    <span><strong>Ondřej Zaplatílek</strong></span>
                </li>
                <li>
                  <span>IČ: 17538408</span>
                </li>
                  <li>
                    <a href="tel:+(2)578365379">+420 608 270 754</a>
                  </li>
                  <li>
                    <a href="mailto:hello@example.com">
                    info@bytedev.cz
                    </a>
                  </li>
                  <li>
                    <span>
                      Moravské Bránice 119, <br /> 664 64 Dolní Kounice
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
             
              </div>
            </div>
          </div>
        </div>
        <iframe src="https://forms.monday.com/forms/embed/44a39fe837b8ba9a678c536aa5ed4df4?r=euc1" width="100%" height={"100%"} style={{border: 0, boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)", display: "flex", flexDirection: "column", height: "fit-content", minHeight: "2200px", backgroundColor: "#fefeff"}}></iframe>
      </section>
    </>
  );
};

export default Contact1;
