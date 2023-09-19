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
let development = {
  nadpis: "Webové stránky a aplikace",
  text1: "V dnešní digitální době jsou webové stránky a aplikace nezbytností pro každý úspěšný podnik. Jsou to vaše digitální vizitky, které mohou dosáhnout celosvětového publiku.",
  text2: "Naším cílem je vytvořit funkční, elegantní a uživatelsky přívětivé webové stránky a aplikace, které budou zastupovat vaši značku a poslání v nejlepším světle.",
  body: [
    "Next.js",
    "SEO Optimalizace pro vyšší dosah",
    "React.js",
    "Rychlá načítání a vysoký výkon.",
    "Electron.js",
    "Responsivita pro všechna zařízení.",
    "Wordpress",
    "Napojení na SQL a NoSQL databáze.",
    "Napojení na API.",
    "Vlastní CMS.",
    "Unikátní design.",
    "UX/UI design. pro příjemný a efektivní uživatelský zážitek.",
  ],
  Img1: Web2, // Cesta k obrázku 1
  Img2: Web1  // Cesta k obrázku 2
};
const serviceDetailsWorkflow = {
  sections: [
    {
      title: "Plánování a skicování",
      description: "Začínáme s hloubkovým průzkumem vašich potřeb a vizí. Pomocí skic a brainstormingu vytváříme základní koncept vašeho projektu."
    },
    {
      title: "Práce v týmu",
      description: "Náš tým specialistů společně diskutuje o nejlepších řešeních, technologiích a nástrojích pro realizaci vašeho projektu."
    },
    {
      title: "Tokové diagramy a drátové modely",
      description: "V této fázi vytváříme vizuální reprezentace uživatelských cest a interakcí na vašem webu nebo aplikaci, což nám pomáhá optimalizovat uživatelský zážitek."
    },
    {
      title: "Testování uživatelského zážitku",
      description: "Otestujeme prototypy na skutečných uživatelích, abychom zajistili, že konečný produkt je intuitivní, funkční a vyhovuje vašim cílovým skupinám."
    }
  ]
};


const FAQdetails = {
  title: "Co vám můžeme nabídnout?",
  faqImage: WebFAQ,
  faqAlt: "FAQ Image",
  faqItems: [
    {
     
      header: "Moderní technologie",
      body: "Primárně využíváme Next.js pro větší weby, React pro webové aplikace a pro menší weby Wordpress. Váš web pak můžete převzít vy či jiný vývojář a bude lehce upravitelný."
    },
    {
     
      header: "Responsivita a přístupnost",
      body: "Ctíme princip mobile-first, což znamená, že se web nejprve navrhuje pro mobilní zařízení a poté se přizpůsobuje větším obrazovkám. V dnešní době už je na některých stránkách přes 80% návštěvníků z mobilních zařízení. Nabízíme i možnost samostatného vývoje verze stránky pro mobilní zařízení a počítače, zde se ale pohybujeme ve vyšších řádech desítek tisíc korun."
    },
    {header: "SEO optimalizace",
     body: "Webové stránky a aplikace vytvořené námi jsou optimalizované pro vyhledávače. Využíváme moderní technologie, které umožňují rychlé načítání. Zároveň už při plánování a následném vývoji myslíme na optimalizaci a dodržujeme best practices. V nespolední řadě máme v týmu zkušeného SEO specialistu, který vám pomůže s nastavením SEO a dalšími marketingovými strategiemi."
  },
  {header: "Vlastní CMS",
  body: "Nic není vytesáno do kamene a ani vaše texty, obrázky a blogy nejsou vyjímkou. Upravíme pro vás CMS, který bude přizpůsobený vašim potřebám. Můžete si tak sami upravovat obsah na vašem webu."
},
{
  header: "UX/UI design",
  body: "Věnujeme velkou pozornost uživatelskému zážitku a designu. Vytvoříme pro vás design, který bude přesně odpovídat vašim potřebám a bude příjemný pro vaše uživatele."
},
{
  header: "Integrace",
  body: "Napojíme váš web na SQL a NoSQL databáze, API a další služby. Každý v našem týmu umí základy práce s databázemi a API, avšak ke komplexnejším projektům máme externí spolupracovníky na REST i GraphQL API a také na SQL a NoSQL databáze."
},
{
  header: "Hosting",
  body: "Ke všem našim stránkám nabízíme měsíc hostingu zdarma po dokončení webu. Poté si u nás můžete hosting prodloužit až na dva roky. Během doby co nám svěříte svou stránku ji můžete i vy jednoduše spravovat skrz platformu Plesk."
},
{header: "Dlouhodovou spolupráci",
body: "V případě vašeho zájmu vám můžeme web spravovat a to nejen po technické stránce pravidelných aktualizací, testování, zálohování a optimalizace. Též nabízíme i tvorbu marketingové strategie, cílených reklam, placených výsledků vyhledávání, copywritingu a webmasteringu."}
    // ... (rest of your FAQ items)
  ]
};
const CTAtexts = {
  title: "Pojďme na to",
  description: "Rádi byste slyšeli více o vašem nápadu.",
  button: "Pojďme se domluvit"
}
const serviceDetailData = {
  title: "Náš úspěch je založen na plánování, organizaci a komunikaci s vámi.",
  image1: {
      src: DesignFigma,
      alt: "Service detail image"
  },
  image2: {
      src: "",
      alt: "Service shape image",
      className: "sd-shape"
  },
  description1: "Nejprve s vámi probereme vaše očekávání a požadavky na váš web. Následně vám nabídneme technické řešení a jejich cenovou relaci. Poté začneme s prototypem vaší webové stránky, kde kterému budete mít nepřetržitý přístup a budeme nadále komunikovat ohledně podoby webu.",
  description2: "Po fázi prototypování nás čeká samotná implementace řešení. Při celém vývoji, běží řešení u nás a živě uvidíte, jak probíhá vývoj. V průběhu vývoje je stále možnost úprav. Po dokončení vývoje zkonzultujeme další marketinogovou strategii a možnost další spolupráce. "
};
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
