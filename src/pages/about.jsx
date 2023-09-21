import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import AboutTeam from "@/components/team/AboutTeam";
import AboutTestimonial from "@/components/testimonial/AboutTestimonial";
import Head from "next/head";

const About = ({team2, recenze2}) => {

  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout>
          <AboutHero />
          <AboutStory />
          <AboutCounter />
          <AboutTeam team={team2.data} />
          <DigitalAgencyBrand />
          <AboutTestimonial recenze={recenze2.data} />
          <DigitalAgencyCTA title={"Naše služby"} description={"Chcete se dozvědět více o našich službách?"} button={"Co nabízíme"}/>
        </RootLayout>
      </main>
    </div>
  );
};

export default About;

export async function getStaticProps() {
  let recenze = await fetch("http://38.242.151.80:1666/api/reviews?populate=deep", {
    headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
    })
    let recenze2 = await recenze.json()
    recenze2.data.sort((a, b) => new Date(b. attributes.publishedAt) - new Date(a.attributes.publishedAt))
    
  let team = await fetch("http://38.242.151.80:1666/api/team-members?populate=deep", {
      headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
      })
      let team2 = await team.json()
       

  
      return ({
      props: {
        team2,
        recenze2
      },
      revalidate: 60,
  })
}