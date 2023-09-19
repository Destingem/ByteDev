import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import PortfolioDetails1 from "@/components/portfolio/PortfolioDetails1";

const PortfolioDetails = ({memberData, allData}) => {
  console.log(allData);
  return (
    <>
      <Head>
        <title>{memberData.attributes.name}</title>
        <meta name="description" content="Portfolio Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <PortfolioDetails1 id={memberData.id} allData={allData} data={memberData.attributes} />
        </RootLayout>
      </main>
    </>
  );
};

export default PortfolioDetails;

export async function getStaticPaths() {
  const response = await fetch("http://38.242.151.80:1666/api/projects?populate=*", {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  const members = await response.json();
console.log(members.data)
  const paths = members.data.map(member => {
    let slug = member.attributes.name.toLowerCase().replace(" ", "-")
console.log(slug);
    return {
      params: { portfolioDetails: slug }
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch("http://38.242.151.80:1666/api/projects?populate=deep", {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  const members = await response.json();

  const memberData = members.data.find(member => {
    let slug = member.attributes.name.toLowerCase().replace(" ", "-")
    return slug === params.portfolioDetails;
  });

  return {
    props: { memberData, allData: members },
    revalidate: 600,
  };
}
