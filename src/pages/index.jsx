import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DigitalMarketingBrand from "@/components/brand/DigitalMarketingBrand";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import DigitalMarketingProtfolio from "@/components/portfolio/DigitalMarketingProtfolio";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingPrice from "@/components/price/DigitalMarketingPrice";
import DigitalMarketingBlog from "@/components/blog/DigitalMarketingBlog";

export default function DigitalMarketing({recenze2, portfolio2, blog2}) {
  console.log(portfolio2);
  return (

    <div>
      <Head>
        <title>Byte development</title>
        <meta
          name="description"
          content="Společně se svým týmem poskytuji profesionální vývoj webových a desktop aplikací, grafický návrh a kybernetickou bezpečnost. Specializujeme se na Next.js, React.js a další technologie. Prozkoumejte naše projekty a objevte, jak můžeme oživit váš digitální svět."
        />
        <meta
          property="og:title"
          content="Ondřej Zaplatílek: Vvýoj webů a aplikací | Oživte svůj digitální svět"
        />
        <meta
          property="og:description"
          content="Společně se svým týmem poskytuji profesionální vývoj webových a desktop aplikací, grafický návrh a kybernetickou bezpečnost. Specializujeme se na Next.js, React.js a další technologie. Prozkoumejte naše projekty a objevte, jak můžeme oživit váš digitální svět."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <DigitalMarketingHero />
          <DigitalMarketingBrand />
          <DigitalMarketingAbout />
          <DigitalMarketingService />
          <DigitalMarketingProtfolio portfolio={portfolio2.data} />
          <DigitalMarketingTestimonial recenze={recenze2.data}/>
          <DigitalMarketingWorkflow />
          <DigitalMarketingPrice />
          <DigitalMarketingBlog blogs={blog2.data}/>
        </RootLayout>
      </main>
    </div>
  );
}

export async function getStaticProps() {
// recenze
let recenze = await fetch("http://38.242.151.80:1666/api/reviews?populate=deep", {
      headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
      })
      let recenze2 = await recenze.json()
      
// portfolio
let blog = await fetch("http://38.242.151.80:1666/api/blog-posts?populate=deep", {
  headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
  }
  })
  let blog2 = await blog.json()
  blog2.data.sort((a, b) => new Date(b. attributes.createdAt) - new Date(a.attributes.createdAt))
// blog
  let portfolio= await fetch("http://38.242.151.80:1666/api/projects?populate=deep", {
    headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
    })
    let portfolio2 = await portfolio.json()
    portfolio2.data.sort((a, b) => new Date(b. attributes.year) - new Date(a.attributes.year))
  console.log(portfolio2);
      return ({
      props: {
        recenze2,
        blog2,
        portfolio2
      },
      revalidate: 600,
  })
}