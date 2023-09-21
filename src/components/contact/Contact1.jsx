import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

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
                <form
                  onSubmit={(params) => {
                    params.preventDefault();
                    const mailtoLink = `mailto:ondrejz@bytedev.cz?subject=${encodeURIComponent(subjectRef.current.value)}&body=${encodeURIComponent(
      `Name: ${nameRef.current.value}\nEmail: ${emailRef.current.value}\nPhone: ${phoneRef.current.value}\n\nMessage: ${messageRef.current.value}`
    )}`;
    router.push(mailtoLink);
                  }}
                  method="POST"
                >
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Jméno *"
                        ref={nameRef}
                      />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        ref={emailRef}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon"
                        ref={phoneRef}
                      />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Predmět *"
                        ref={subjectRef}
                      />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Zpráva *"
                        ref={messageRef}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button className="wc-btn-primary btn-hover btn-item">
                          <span></span> Odeslat <br />
                          zprávu<i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
