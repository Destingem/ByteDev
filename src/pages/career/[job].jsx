import Head from "next/head";
import Career6 from "../../../public/assets/imgs/career/6.jpg";
import Image from "next/image";
import RootLayout from "@/components/common/layout/RootLayout";
import JobDetails1 from "@/components/job/JobDetails1";

const JobDetails = ({a}) => {

  return (
    <div>
      <Head>
        <title>{a?.attributes?.name}</title>
        <meta name="description" content="Job Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <section className="job__detail-top">
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={a?.attributes?.main1820x700?.data?.attributes?.url ? "http://38.242.151.80:1666" + a.attributes.main1820x700?.data?.attributes?.url : Career6}
              alt="Image"
              data-speed="auto"
              width={1820}
              height={700}
            />
          </section>
          <JobDetails1 data={a?.attributes} />
        </RootLayout>
      </main>
    </div>
  );
};

export default JobDetails;

export async function getStaticPaths() {
  const response = await fetch("http://38.242.151.80:1666/api/jobs?populate=deep", {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  const members = await response.json();

  const paths = members.data.map(member => {
    let slug = member?.attributes?.name?.toLowerCase().replace(" ", "-")

    return {
      params: { job: slug }
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch("http://38.242.151.80:1666/api/jobs?populate=deep", {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  const members = await response.json();

  const memberData = members.data.find(member => {
    let slug = member?.attributes?.name?.toLowerCase().replace(" ", "-")
    return slug === params.job;
  });

  return {
    props: { a: memberData, allData: members },
    revalidate: 60,
  };
}
