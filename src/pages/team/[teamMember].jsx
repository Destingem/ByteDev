import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TeamDetails1 from "@/components/team/TeamDetails1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const TeamDetails = ({memberData}) => {

  return (
    <div>
      <Head>
        <title>Team Details</title>
        <meta name="description" content="Team Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <TeamDetails1 {...memberData?.attributes} />
          <DigitalAgencyCTA title={"Naše služby"} description={"Zaujali vás naše služby?"} button={"Kontaktujte nás"} />
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetails;

export async function getStaticPaths() {
  const response = await fetch("http://38.242.151.80:1666/api/team-members?populate=*", {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  const members = await response.json();

  const paths = members?.data.map(member => {
    const jmeno = member?.attributes.jmeno;
    const prijmeni = member?.attributes.prijmeni;
    let slug = "";

    if (jmeno.length <= 3) {
      slug = jmeno.toLowerCase();
    } else {
      slug = `${jmeno.toLowerCase()}-${prijmeni.toLowerCase()}`;
    }

    return {
      params: { teamMember: slug }
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch("http://38.242.151.80:1666/api/team-members?populate=*", {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  const members = await response.json();

  const memberData = members?.data.find(member => {
    const jmeno = member?.attributes.jmeno;
    const prijmeni = member?.attributes.prijmeni;
    let slug = "";

    if (jmeno.length <= 3) {
      slug = jmeno.toLowerCase();
    } else {
      slug = `${jmeno.toLowerCase()}-${prijmeni.toLowerCase()}`;
    }

    return slug === params.teamMember;
  });

  return {
    props: { memberData },
    revalidate: 600,
  };
}
