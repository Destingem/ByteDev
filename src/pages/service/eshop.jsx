import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import Eshop1 from "../../../public/assets/imgs/thumb/eshop1.png";
import Web2 from "../../../public/assets/imgs/thumb/web2.png";
import DesignFigma from "../../../public/assets/imgs/thumb/designFigma.png";
import WebFAQ from "../../../public/assets/imgs/thumb/webFaq.png";
import EshopDev from "../../../public/assets/imgs/thumb/eshopDev.png";
let development = {
  nadpis: "E-shopy a prodejní platformy",
  text1: "V dnešní digitální době je eshop nezbytností pro úspěšný obchod. Ať už potřebujete e-shop na míru nebo prodejní platformy, jsme tu pro vás.",
  text2: "Naším cílem je vytvořit efektivní, elegantní a uživatelsky přívětivé řešení, které přiláká vaše zákazníky a usnadní správu vašeho byznysu.",
  body: [
    "Hotová řešení: Shoptet, Upgates, Shopify, Editorx, Squarespace, BigCommerce, WooCommerce.",
    "Rezervace: Reservio, Cal.",
    "Vlastní vývoj: Next.js (pro větší e-shopy), Wordpress (pro menší e-shopy).",
    "Integrace s platebními bránami.",
    "Řešení pro zásilky a sledování objednávek.",
    "SEO Optimalizace pro vyšší dosah.",
    "Rychlé načítání a vysoký výkon.",
    "Responsivita pro všechna zařízení.",
    "Unikátní design.",
    "UX/UI design pro příjemný a efektivní uživatelský zážitek.",
  ],
  Img1: Web2, // Cesta k obrázku 1
  Img2: Eshop1  // Cesta k obrázku 2
};

const FAQdetails = {
  title: "Často kladené dotazy o našich e-shopech a servisních platformách",
  faqImage: WebFAQ,
  faqAlt: "FAQ Image",
  faqItems: [
    {
      header: "Jaké platební brány můžete integrovat?",
      body: "Integrujeme většinu populárních platebních bran, včetně GoPay, PayU, Stripe a dalších."
    },
    {
      header: "Máte řešení pro sledování objednávek?",
      body: "Ano, nabízíme integrace s řadou řešení pro sledování zásilek a umožňujeme vašim zákazníkům sledovat stav jejich objednávky v reálném čase."
    },
    {
      header: "Jakým způsobem optimalizujete e-shopy pro vyhledávače?",
      body: "Využíváme moderní SEO praktiky, včetně optimalizace obsahu, struktury webu, rychlosti načítání a dalších klíčových faktorů, které ovlivňují postavení vašeho e-shopu ve výsledcích vyhledávání."
    },
    // ... (rest of your FAQ items)
  ]
};
const serviceDetailsWorkflow = {
  sections: [
    {
      title: "Analýza a plánování",
      description: "Začínáme detailní analýzou vašeho obchodního modelu a produktovej nabídky. Společně definujeme vaše cílové skupiny a plánujeme, jak nejlépe oslovit vaše potenciální zákazníky online."
    },
    {
      title: "Návrh a prototypování",
      description: "Na základě analýzy vytváříme první návrhy obchodu. Diskutujeme o funkcích, které chcete integrovat, a vytváříme prototypy pro klíčové stránky a funkce eshopu."
    },
    {
      title: "Vývoj a implementace",
      description: "Po schválení prototypů přecházíme k samotnému vývoji eshopu. Zaměřujeme se na uživatelskou přívětivost, rychlost načítání a integraci s potřebnými nástroji, jako jsou platební brány, CRM systémy nebo analytické nástroje."
    },
    {
      title: "Testování a optimalizace",
      description: "Před spuštěním eshopu provádíme důkladné testování všech funkcí a prvků. Testujeme na různých zařízeních a prohlížečích, abychom se ujistili, že váš eshop bude fungovat bezchybně pro všechny návštěvníky."
    },
    {
      title: "Spuštění a podpora",
      description: "Po úspěšném testování a doladění spouštíme váš eshop. Nabízíme také dlouhodobou technickou podporu, marketingové služby a konzultace k dalšímu rozvoji vašeho online podnikání."
    }
  ]
};
const serviceDetailData = {
  title: "Klíčem k úspěchu vašeho e-shopu je naše pečlivá příprava, organizace a neustálá komunikace.",
  image1: {
      src: EshopDev,
      alt: "Detail služby e-shopu"
  },
  image2: {
      src: "",
      alt: "Obrazový motiv služby",
      className: "sd-shape"
  },
  description1: "Začínáme tím, že s vámi probereme vaše očekávání a požadavky na e-shop. Na základě těchto informací vám nabídneme nejlepší technická řešení a jejich cenovou nabídku. Následně začneme s vytvářením prototypu vašeho e-shopu, ke kterému budete mít stálý přístup, a budeme s vámi průběžně konzultovat jeho vzhled a funkčnost.",
  description2: "Po dokončení prototypu přistoupíme k vlastní implementaci. Během celého vývojového procesu bude řešení hostováno u nás, takže budete moci v reálném čase sledovat jeho postup. V průběhu vývoje máte možnost požadovat úpravy a změny. Po dokončení celého vývoje s vámi prodiskutujeme možnosti marketingové strategie a další formy naší spolupráce."
};

const CTAtexts = {
  title: "Pojďme vytvořit váš e-shop nebo servisní platformu",
  description: "Rádi bychom slyšeli více o vašem projektu.",
  button: "Pojďme se domluvit"
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
