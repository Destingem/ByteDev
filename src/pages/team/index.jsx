import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Team1 from "@/components/team/Team1";
import TeamCounter from "@/components/counter/TeamCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Team = (props) => {

  let {data} = props?.fetched2
  return (
    <div>
      <Head>
        <title>Team</title>
        <meta name="description" content="Team Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Team1 people={data}/>
          <TeamCounter />
          <DigitalAgencyCTA title={"Naše služby"} description={"Chcete se dozvědět více o našich službách?"} button={"Co nabízíme"}/>
        </RootLayout>
      </main>
    </div>
  );
};

export default Team;

export async function getStaticProps() {

  let fetched = await fetch("http://38.242.151.80:1666/api/team-members?populate=deep", {
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