import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";

const FAQ = [
  {
    question: "Co znamená vývoj webových aplikací v Next.js?",
    answer: "Next.js představuje revoluci v tvorbě webových aplikací díky své integraci server-side renderingu a statického generování stránek. Je ideální pro vytváření vysoce optimalizovaných webových aplikací, které nabízejí rychlý náhled a výbornou uživatelskou zkušenost."
  },
  {
    question: "Proč bych měl zvolit React pro vývoj webové aplikace?",
    answer: "React je přední JavaScriptová knihovna pro tvorbu dynamických uživatelských rozhraní. Díky jeho komponentnímu přístupu umožňuje vývojářům rychle a efektivně vytvářet interaktivní webové stránky a aplikace."
  },
  {
    question: "Jaké výhody přináší Electron pro vývoj desktopových aplikací?",
    answer: "Electron je framework, který umožňuje vytváření nativních desktopových aplikací pomocí webových technologií. Aplikace vytvořené v Electronu mohou běžet na různých platformách a nabízejí bohaté možnosti integrace."
  },
  {
    question: "Proč bych měl zvolit WordPress pro tvorbu webových stránek?",
    answer: "WordPress je nejpopulárnější platforma pro tvorbu webových stránek na světě. Nabízí flexibilitu a snadnou správu obsahu pro weby všeho druhu, od blogů po obchodní stránky."
  },
  {
    question: "Jaké platformy doporučujete pro vytváření eshopů?",
    answer: "Ať už si vyberete Shoptet nebo Shopify, obě platformy nabízejí kompletní řešení pro tvorbu eshopů. S nástroji pro snadné nastavení, řízení zásob a zpracování objednávek můžete rychle spustit svůj online obchod."
  },
  {
    question: "Kdy byla vaše společnost založena?",
    answer: "Naše cesta začala v roce 2013 a od té doby se snažíme vytvořit nezapomenutelné projekty kombinováním designu a technologie."
  },
  {
    question: "Jaký je hlavní cíl vašeho týmu při vývoji aplikací?",
    answer: "Vstoupili jsme do světa vývoje aplikací s jednoduchým cílem: spojit naše individuální dovednosti a zkušenosti do jednoho silného kolektivu, schopného realizovat nejambicióznější projekty."
  },
  {
    question: "Jaká je vaše filozofie při výběru týmových členů?",
    answer: "Věříme, že úspěch projektu závisí na lidech za ním. Proto pečlivě vybíráme každého člena týmu."
  },
  {
    question: "Jaké služby nabízíte?",
    answer: "Poskytujeme profesionální vývoj webových a desktop aplikací, grafický návrh a kybernetickou bezpečnost."
  },
  {
    question: "Kde sídlíte?",
    answer: "Nacházíme se v Moravských Bránicích 119, 664 64 Dolní Kounice."
  },
  {
    question: "Jaký je váš pracovní čas?",
    answer: "Jsme otevřeni od 10:00 do 20:30 od pondělí do neděle."
  },
  {
    question: "Jak se mohu s vámi spojit?",
    answer: "Můžete nás kontaktovat na telefonním čísle +420 608 270 754 nebo napsat na info@ondrejzaplatilek.cz."
  },
  {
    question: "Kdo jsou vaši hlavní klienti?",
    answer: "Tvoříme projekty pro společnosti z různých oblastí. Naše portfolio zahrnuje řadu uznávaných značek."
  },
  {
    question: "Co si o vás říkají vaši zákazníci?",
    answer: "Naši zákazníci oceňují naši práci a zákaznický servis. Můžete si přečíst jejich recenze na našem webu."
  }
];

const FAQItems = FAQ.map((item, index) => {
  return (
    <Accordion.Item key={index} eventKey={index.toString()} className="accordion-item">
      <Accordion.Header className="accordion-header" id={`heading${index}`}>
        {item.question}
      </Accordion.Header>
      <Accordion.Body className="accordion-body">
        <p>
          {item.answer}
        </p>
      </Accordion.Body>
    </Accordion.Item>
  );
});

const Faq1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  FAQ
                </h2>
                <p className="">
                  Čsto kladené dotazy <br /> na které vám odpovídáme.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
              {FAQItems}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq1;
