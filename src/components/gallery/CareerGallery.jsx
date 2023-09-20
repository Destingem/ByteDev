import Career2 from "../../../public/assets/imgs/career/2.jpg";
import Career3 from "../../../public/assets/imgs/career/3.jpg";
import Career4 from "../../../public/assets/imgs/career/4.jpg";
import Career5 from "../../../public/assets/imgs/career/5.jpg";
import C520x700 from "../../../public/assets/imgs/career/520x700.png";
import C300x450 from "../../../public/assets/imgs/career/300x450.png";
import C410x330 from "../../../public/assets/imgs/career/410x330.png";
import C230x140 from "../../../public/assets/imgs/career/230x140.png";
import Image from "next/image";

const CareerGallery = () => {
  return (
    <>
      <section className="career__gallery">
        <div className="container g-0 line pt-140 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <ul>
                <li>Budoucnost</li>
                <li>Flexibilita</li>
                <li>Potenciál</li>
              </ul>
              <p style={{textAlign: "left", lineHeight: "170%"}}>
        
              Co nás výrazně vymezuje na trhu a dělá jedinečnými, je naše důraz na svobodu a autonomii. Naše spolupráce je založena na projektovém přístupu, kde má každý člen týmu možnost uplatnit své nápady a představy. <br />

Jako moderní a dynamicky se rozvíjející kolektiv klade velký důraz na svobodné myšlení a kreativní přístup k řešení úkolů. Přivádíme k sobě zejména mladé talenty s velkými ambicemi a touhou učit se novým věcem a neustále se zdokonalovat. <br />

Chápeme, že mnoho z našich členů je stále v akademickém prostředí nebo se věnuje paralelním aktivitám, a proto je pro nás klíčová maximální flexibilita. Naší filozofií není odměňovat za strávený čas, nýbrž za kvalitu a výsledky práce. <br />

Ačkoliv věříme v sílu osobního setkání a spolupráce, nabízíme našim členům možnost práce z libovolného místa. V dnešní digitalizované době je pro nás důležité nabídnout takový druh flexibility a umožnit tím našim talentům dosahovat skvělých výsledků bez ohledu na fyzickou lokaci.

              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="career__gallery-img">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={C300x450}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="career__gallery-img img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={C520x700}
                  alt="Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="career__gallery-img">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={C230x140}
                  alt="Image"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={C410x330}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerGallery;
