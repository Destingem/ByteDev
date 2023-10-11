import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import DesignFigma from "../../../public/assets/imgs/thumb/designFigma.png";
import Desktop2 from "../../../public/assets/imgs/thumb/desktop2.png";
import WebFAQ from "../../../public/assets/imgs/thumb/webFaq.png";
import Desktop1 from "../../../public/assets/imgs/thumb/desktop1.png";
import DesktopDev from "../../../public/assets/imgs/thumb/desktopDev.png";
let development = {
  nadpis: "Desktopové aplikace a nativní vývoj",
  text1: "Desktopové aplikace zůstávají základním kamenem produktivity a efektivity v mnoha odvětvích. Nativní aplikace přinášejí optimální výkon a vysokou účinnost.",
  text2: "Naším cílem je vytvořit výkonné, intuitivní a stabilní desktopové aplikace, které naplní vaše obchodní a technologické potřeby.",
  price: "od 10 000 Kč",
  body: [
    "Electron.js pro multiplatformní aplikace",
    "Optimalizace pro vysoký výkon a stabilitu",
    "C# a .NET pro Windows aplikace",
    "Swift pro macOS aplikace",
    "Qt pro platformně nezávislé aplikace",
    "Integrace s lokálními a cloudovými databázemi",
    "Integrace s API a externími službami",
    "Nativní vzhled a chování aplikace",
    "Zabezpečení a šifrování dat",
    "Automatické aktualizace a podpora."
  ],
  Img1: Desktop2,
  Img2: Desktop1,
};

const serviceDetailsWorkflow = {
  sections: [
    {
      title: "Analýza a návrh",
      description: "Pochopení vašich potřeb a očekávání je klíčem k úspěšnému projektu. Vytvoříme podrobnou specifikaci a návrh vaší aplikace."
    },
    {
      title: "Vývoj a iterace",
      description: "Během vývoje aplikace pravidelně iterujeme a testujeme, abychom zajistili kvalitu a splnění vašich požadavků."
    },
    {
      title: "Testování a optimalizace",
      description: "Provedeme důkladné testování aplikace, abychom zajistili její výkon, stabilitu a bezpečnost."
    },
    {
      title: "Nasazení a podpora",
      description: "Pomůžeme vám s nasazením aplikace, jejím údržbou a poskytneme podporu po dokončení projektu."
    }
  ]
};

const serviceDetailData = {
  title: "Zaměřujeme se na kvalitu, spolehlivost a dlouhodobou spolupráci.",
  image1: {
    src: DesktopDev,
    alt: "Service detail image"
  },
  image2: {
    src: "",
    alt: "Service shape image",
    className: "sd-shape"
  },
  description1: "Pracujeme pečlivě, abychom pochopili vaše potřeby a představy o aplikaci. Nabízíme technologická řešení a vytváříme první prototypy.",
  description2: "Po návrhové fázi následuje vývoj, testování a optimalizace. Pravidelně vás budeme informovat o průběhu a společně diskutovat o případných úpravách."
};

const FAQdetails = {
  title: "Co nabízíme?",
  faqImage: WebFAQ,
  faqAlt: "FAQ Image",
  faqItems: [
    {
      header: "Moderní technologie",
      body: "Primárně využíváme technologie jako Electron pro vývoj desktopových aplikací, který vám umožní mít jedinou kódovou základnu pro všechny platformy. Díky tomu může být váš software snadno dostupný na Windows, MacOS i Linux bez potřeby vytvářet mnoho verzí."
    },
    {
      header: "Optimalizace a výkon",
      body: "I když je Electron skvělý, může být někdy náročný na prostředky. Naši vývojáři se soustředí na optimalizaci kódu, aby vaše aplikace byla co nejeffektivnější a spotřebovávala co nejméně prostředků."
    },
    {
      header: "Integrace s webovými technologiemi",
      body: "Vzhledem k tomu, že Electron umožňuje integraci webových technologií, můžeme vám nabídnout hladkou integraci s vašimi existujícími webovými aplikacemi nebo databázemi."
    },
    {
      header: "Nativní funkce",
      body: "Ačkoli Electron využívá webové technologie, je stále možné využívat nativní funkce operačního systému. Můžeme integrat notifikace, souborový systém a další."
    },
    {
      header: "Pravidelné aktualizace",
      body: "Pravidelně aktualizujeme naše aplikace, abychom zajistili kompatibilitu s nejnovějšími verzemi operačních systémů a opravili veškeré chyby."
    },
    {
      header: "Podpora a údržba",
      body: "Po dokončení vývoje nekončíme. Nabízíme podporu a údržbu vaší aplikace, abyste měli klidnou mysl a mohli se soustředit na svůj byznys."
    }
  ]
};

const CTAtexts = {
  title: "Začněme pracovat",
  description: "Rádi bychom slyšeli více o vašem projektu.",
  button: "Kontaktujte nás"
};

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Detaily služby</title>
        <meta name="description" content="Detaily služby pro desktopový a nativní vývoj" />
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
