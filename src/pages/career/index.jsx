import CareerBenefit from "@/components/benefit/CareerBenefit";
import Career1 from "@/components/career/Career1";
import RootLayout from "@/components/common/layout/RootLayout";
import CareerGallery from "@/components/gallery/CareerGallery";
import CareerHero from "@/components/hero/CareerHero";
import Head from "next/head";

const Career = ({fetched2}) => {
  
  return (
    <div>
      <Head>
        <title>Career</title>
        <meta name="description" content="Career Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <CareerHero />
          <CareerGallery />
          <Career1 data={fetched2.data}/>
          <CareerBenefit />
        </RootLayout>
      </main>
    </div>
  );
};

export default Career;

export async function getStaticProps() {

  let fetched = await fetch("http://38.242.151.80:1666/api/jobs?populate=deep", {
      headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
      })
      let fetched2 = await fetched.json()
    

  
      return ({
      props: {
        fetched2
      },
      revalidate: 60,
  })
}
