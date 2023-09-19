import Link from "next/link";
import Thumb404 from "../../../public/assets/imgs/thumb/404.png";
import Image from "next/image";

const Error1 = () => {
  return (
    <>
      <section className="error__page">
        <div className="container line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="error__content">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Thumb404}
                  alt="Page not found"
                />
                <h2>Stránka nebyla nalezena</h2>
                <p>
                  {
                    "Mohlo dojít k chybě při zadání adresy nebo stránka, kterou hledáte, již neexistuje."
                  }
                </p>
                <div className="btn_wrapper">
                  <Link
                    href="/"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span> Zpět na <br />
                    Domovskou stránku <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error1;
