import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Portfolio1 from "@/components/portfolio/Portfolio1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Portfolio = ({fetched2}) => {
  
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Portfolio1 data={fetched2.data}/>
          <DigitalAgencyCTA title={"Kontakt"} description={"Zaujali vás naše služby a chete se dozvědět více?"} button={"Kontaktujte nás"}  />
        </RootLayout>
      </main>
    </>
  );
};

export default Portfolio;
export async function getStaticProps() {

  let fetched = await fetch("http://38.242.151.80:1666/api/projects?populate=*", {
      headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
      })
      let fetched2 = await fetched.json()
      fetched2.data.sort((a, b) => new Date(b. attributes.year) - new Date(a.attributes.year))

  
      return ({
      props: {
        fetched2
      },
      revalidate: 60,
  })
}
