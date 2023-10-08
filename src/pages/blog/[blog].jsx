import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import BlogRelated from "@/components/blog/BlogRelated";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import { useEffect, useState } from "react";

const BlogDetails = ({myBlog, allPosts}) => {
  console.log(myBlog)
 const [data, setData] = useState({
  "Heading": "Jak AI mění svět IT",
  "Kategorie": "Design",
  "doba_cteni": "6 minut",
  "createdAt": "2023-09-18T09:39:59.982Z",
  "updatedAt": "2023-09-18T09:40:01.879Z",
  "publishedAt": "2023-09-18T09:40:01.874Z",
  "tags": "",
  "text": "Umělá inteligence (AI) je jedním z největších průlomů v oblasti IT. Od automatizace rutinních úloh po komplexní analýzy dat, AI mění způsob, jakým podniky a jednotlivci pracují s technologiemi. V tomto článku se podíváme na několik hlavních oblastí, kde AI vytváří významné změny.\n"
})
useEffect(()=> {
  setData(myBlog.attributes)
}, [myBlog])

  return (
    <>
      <Head>
        <title>{data.Heading}</title>
        <meta name="description" content={data.text} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <BlogDetails1 {...data}/>
          <BlogRelated {...allPosts} id={myBlog?.id} />
          <DigitalAgencyCTA title={"Naše služby"} description={"Chcete se dozvědět více o našich službách?"} button={"Co nabízíme"} />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetails;
export async function getStaticPaths() {
  const response = await fetch("http://38.242.151.80:1666/api/blog-posts?populate=deep?", {
      headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
  });

  const posts = await response.json();
  const paths = posts.data.map(post => "/blog/" + post.attributes?.Heading.replace(" ", "").replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("?", ""));

  return {
      paths,
      fallback: 'blocking' // or 'true' based on your needs
  };
}
export async function getStaticProps(blog) {
  


      var allPosts = await fetch("http://38.242.151.80:1666/api/blog-posts?populate=deep", {
        headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
        }
        })
        allPosts = await allPosts.json()
        allPosts.data.sort((a, b) => new Date(b. attributes.createdAt) - new Date(a.attributes.createdAt))
  
        let myBlog = allPosts.data.filter((post) => post.attributes.Heading.replace(" ", "").replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("?", "") === blog.params.blog)
        console.log(myBlog)
      return ({
      props: {
        myBlog: myBlog[0],
        allPosts
      },
      revalidate: 60,
  })
}

