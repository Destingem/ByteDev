import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Web1 from "../../../public/assets/imgs/thumb/web1.png";
import Web2 from "../../../public/assets/imgs/thumb/web2.png";
import DesignFigma from "../../../public/assets/imgs/thumb/designFigma.png";
import WebFAQ from "../../../public/assets/imgs/thumb/webFaq.png";
import Custom3D from "../../../public/assets/imgs/thumb/custom3D.png";
let development = {
  nadpis: "Zakázkový vývoj řešení",
  text1: "Našer služby nejsou omezeny pouze na webové technologie a aplikace. Pokud potřebujete řešení na míru, jsme tu pro vás.",
  text2: "Rádi vám poskytneme optimální řešení pro vaše potřeby a cíle. Naším cílem je vytvořit efektivní, elegantní a uživatelsky přívětivé řešení, které přiláká vaše zákazníky a usnadní správu vašeho byznysu.",
  body: [
    "Mobilní aplikace",
    "Skripty a nástroje",
    "QA testování",
    "Kybernetická bezpečnost",
    "Design a UX/UI",
    "Product management",
    "Blockchain a kryptoměny",
    "AI, strojové učení a datová analytika",
    "Product design",
    "Ilustrace a animace",
    "Copywriting",
    "a další..",
  ],
  Img1: Web2, // Cesta k obrázku 1
  Img2: Web1  // Cesta k obrázku 2
};
const serviceDetailsWorkflow = {
  sections: [
    {
      title: "Analýza a konzultace",
      description: "Prozkoumáme vaše potřeby a cíle, abychom pochopili hloubku vašeho projektu a definovali optimální cestu vpřed."
    },
    {
      title: "Plánování a strategie",
      description: "Vytvoříme komplexní plán, který zahrnuje klíčové milníky, technologie, nástroje a postupy nezbytné pro úspěch vašeho projektu."
    },
    {
      title: "Design a prototypování",
      description: "Na základě vašich specifikací a našich analýz vytvoříme prototypy a designy, které slouží jako základ pro další vývoj."
    },
    {
      title: "Realizace a vývoj",
      description: "Začneme přetvářet návrhy a plány v reálné produkty, řešení nebo služby, přičemž uplatňujeme nejlepší praxe a postupy."
    },
    {
      title: "Testování a optimalizace",
      description: "Ověříme funkcionalitu a výkon našich řešení, abychom zajistili, že splňují vaše požadavky a očekávání."
    },
    {
      title: "Implementace a nasazení",
      description: "Až bude vše připraveno, povedeme vás procesem spuštění a implementace, ať už se jedná o webové stránky, aplikaci nebo jakoukoliv jinou službu."
    },
    {
      title: "Podpora a další rozvoj",
      description: "Poskytneme vám podporu po spuštění a pomůžeme vám s případnými aktualizacemi, rozšířeními nebo dalšími potřebami."
    }
  ]
};


const serviceDetailData = {
  title: "Naše služby v oblasti IT jsou založeny na důkladném plánování, odbornosti a průběžné komunikaci s vámi.",
  image1: {
      src: Custom3D, // Ujistěte se, že tento obrázek je relevantní pro váš obsah.
      alt: "Detail služby"
  },
  image2: {
      src: "",  // Pokud nemáte obrázek, zvážte jeho doplnění pro lepší vizuální prezentaci.
      alt: "Ilustrační obrázek služby",
      className: "sd-shape"
  },
  description1: "Začínáme hloubkovým průzkumem vašich potřeb a očekávání. Společně s vámi definujeme požadavky a nabízíme technická a kreativní řešení. Během celého procesu máte nepřetržitý přístup k prototypům, konceptům a návrhům, což nám umožňuje průběžně se s vámi konzultovat a přizpůsobovat se vašim potřebám.",
  description2: "Po fázi návrhu a plánování následuje implementace. Během vývoje můžete sledovat pokrok v reálném čase a je stále možnost provádět úpravy. Po dokončení projektu s vámi probereme možnosti další podpory, údržby a další spolupráce v oblasti IT a digitálního marketingu."
};

const FAQdetails = {
  title: "Jaké IT služby vám můžeme nabídnout?",
  faqImage: WebFAQ,
  faqAlt: "Obrázek často kladených otázek",
  faqItems: [
    {
      header: "Mobilní aplikace",
      body: "Specializujeme se na vývoj mobilních aplikací pro iOS, Android a multiplatformní řešení. Naše aplikace jsou vytvořeny s důrazem na optimalizaci výkonu, uživatelský zážitek a bezpečnost."
    },
    {
      header: "Skripty a nástroje",
      body: "Nabízíme vytváření skriptů pro automatizaci rutinních úloh, nástrojů pro analýzu dat a výkonnostních nástrojů pro vaše podnikání. Vše s cílem zvýšit vaši produktivitu."
    },
    {
      header: "QA testování",
      body: "Kvalita je pro nás klíčová. Provádíme manuální i automatizované testování, abychom zajistili, že vaše produkty jsou bez chyb a plně funkční v různých prostředích."
    },
    {
      header: "Kybernetická bezpečnost",
      body: "Zajišťujeme, že vaše systémy jsou chráněny proti neoprávněnému přístupu a kybernetickým hrozbám. Nabízíme bezpečnostní audity, konzultace a implementaci nejnovějších bezpečnostních řešení."
    },
    {
      header: "Design a UX/UI",
      body: "Naše týmy UX a UI designérů vytvářejí intuitivní, moderní a vizuálně atraktivní designy. Prioritou je vytvořit zážitek, který je přizpůsoben potřebám uživatelů a zároveň reprezentuje vaši značku."
    },
    {
      header: "Product management",
      body: "Poskytujeme komplexní služby v oblasti řízení produktů, od definice produktu, plánování funkcí, správy backlogu po implementaci a spuštění na trh."
    },
    {
      header: "Blockchain a kryptoměny",
      body: "Nabízíme konzultace, vývoj a implementaci blockchainových řešení. Ať už jde o vytvoření vlastní krypto měny, smart kontraktů či integraci s existujícím blockchainem."
    },
    {
      header: "AI a datová analytika",
      body: "Pomáháme firmám využívat sílu umělé inteligence a datové analytiky pro lepší rozhodování, automatizaci procesů a poskytování personalizovaných zkušeností zákazníkům."
    },
    {
      header: "Ilustrace a animace",
      body: "Náš tým kreativních designérů vytvoří jedinečné ilustrace a animace pro vaše projekty, reklamní kampaně nebo prezentace."
    },
    {
      header: "Copywriting",
      body: "Nabízíme kvalitní tvorbu obsahu, která přiláká vaše cílové publikum a zároveň zlepší vaši online viditelnost. Naši copywriteři jsou schopni vytvořit obsah, který je informativní, přesvědčivý a optimalizovaný pro vyhledávače."
    },
    {
      header: "A mnohem více...",
      body: "Ať už máte jakékoli IT potřeby, naše široká škála služeb je zde, abychom vám pomohli je splnit. Společně určíme, jak nejlépe naplnit vaše podnikatelské cíle."
    },
  ]
};


const CTAtexts = {
  title: "Pojďme na to",
  description: "Rádi byste slyšeli více o vašem nápadu.",
  button: "Pojďme se domluvit"
}
const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Service Details</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <ServiceDetailsDevelopment {...development}/>
          <ServiceDetailsWorkflow {...serviceDetailsWorkflow}/>
          <ServiceDetailsService {...serviceDetailData}/>
          <ServiceDetailsFaq {...FAQdetails}/>
          <DigitalAgencyCTA {...CTAtexts}/>
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
