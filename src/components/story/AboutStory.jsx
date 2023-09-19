import Story1 from "../../../public/assets/imgs/story/1a.png";
import Story2 from "../../../public/assets/imgs/story/2a.png";
import Story3 from "../../../public/assets/imgs/story/3a.png";
import Story4 from "../../../public/assets/imgs/story/4a.png";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              od roku<span>2021</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Vývojový tým</h2>
                <h3 className="sec-title title-anim">Náš příběh</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    Vstoupili jsme do světa vývoje aplikací s jednoduchým cílem:
                    spojit naše individuální dovednosti a zkušenosti do jednoho
                    silného kolektivu, schopného realizovat nejambicióznější
                    projekty. Každý z nás přináší do týmu svůj jedinečný pohled,
                    znalosti a vášeň pro technologii, což nám umožňuje
                    překonávat běžné hranice a vytvářet aplikace, které jsou
                    nejen funkční, ale i inovativní a uživatelsky přívětivé.
                  </p>
                  <p>
                    Naše spolupráce není jen o kódu a designu. Je to o
                    sestavování správného týmu pro každý projekt, o sdílení
                    našich vizí a o hledání nových, kreativních řešení. Každý
                    člen našeho týmu je pečlivě vybrán, protože věříme, že
                    úspěch projektu závisí na lidech za ním. Ať už se jedná o
                    mobilní aplikaci, webové řešení nebo složité backendové
                    systémy, naše společné úsilí je vždy zaměřeno na dosažení
                    výjimečných výsledků pro naše klienty.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Story3}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
