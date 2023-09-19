import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Blog1 from "@/components/blog/Blog1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Blog = (props) => {
  console.log(props.fetched2.data)
  let {data} = props?.fetched2
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <Blog1 blogPosts={data} />
          <DigitalAgencyCTA title={"Naše služby"} description={"Chcete vědět více o našich službách?"} button={"Co nabízíme"}/>
        </RootLayout>
      </main>
    </>
  );
};

export default Blog;

export async function getStaticProps() {

  let fetched = await fetch("http://38.242.151.80:1666/api/blog-posts?populate=deep", {
      headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
      })
      let fetched2 = await fetched.json()
      fetched2.data.sort((a, b) => new Date(b. attributes.createdAt) - new Date(a.attributes.createdAt))

  
      return ({
      props: {
        fetched2
      },
      revalidate: 600,
  })
}