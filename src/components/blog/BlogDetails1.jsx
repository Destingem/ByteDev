import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/1a.png";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";
import parseMarkdown from "@/hooks/markdownHtml";

const BlogDetails1 = ({Kategorie, updatedAt, Heading, autor, doba_cteni, text, Main1290x700, tags}, a) => {
if(autor){
  var {jmeno, prijmeni} = autor?.data?.attributes
}
const { metadata, htmlContent } = parseMarkdown(text);
  return (
    <>
      <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h2
                  className="blog__detail-date "
               
                >
                  {Kategorie} <span>{new Date(updatedAt).toLocaleDateString()}</span>
                </h2>
                <h3
                  className="blog__detail-title "
                 
                >
                  {Heading}
                </h3>
                <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <Image
                      priority
                      width={60}
                      height={60}
                      style={{ width: "auto", height: "auto" }}
                      src={autor?.data?.attributes?.avatar?.data?.attributes?.url ? "http://38.242.151.80:1666" + autor?.data?.attributes?.avatar?.data?.attributes?.url : Author}
                      alt="Author Picture"
                    />
                    <p>
                      Napsal/a <span>{jmeno + " " + prijmeni}</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      doba čtení <span>{doba_cteni}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  width={1290}
                  height={700}
                  style={{ width: "auto", height: "auto" }}
                  src={Main1290x700?.data?.attributes.url ? "http://38.242.151.80:1666" + Main1290x700.data.attributes.url : Detail1}
                  alt="Blog Thumbnail"
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="blog__detail-content">
               
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                {tags?.split(",").map((tag, index) => {
                  return tag
                })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails1;
/*
<p>
                  We love to bring designs to life as a developer, and I aim to
                  do this using whatever front end tools are necessary. My
                  preferred tools are more modern javascript libraries like
                  React.js but I like to use whatever is best for the websites
                  needs. There are several reasons why a business would consider
                  a rebrand and it doesn’t necessarily mean the business has
                  been unsuccessful.{" "}
                </p>
                <p>
                  But in order that you may see whence all this born error of
                  those who accuse pleasure and praise pain, I will open the
                  whole matter, and explain the very things which were said by
                  that discoverer of truth and, as it were, the architect of a
                  happy life.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="Blog Image"
                />
                <h2>JavaScript</h2>
                <p>
                  We love to bring designs to life as a developer, and I aim to
                  do this using whatever front end tools are necessary. My
                  preferred tools are more modern javascript libraries like
                  React.js but I like to use whatever is best for the websites
                  needs. There are several reasons why a business would consider
                  a rebrand and it doesn’t necessarily mean the business has
                  been unsuccessful.
                </p>
                <h2>Fremework</h2>
                <p>
                  Always ready to push the boundaries, especially when it comes
                  to our own platform, Our analytical eye to create a site that
                  was visually engaging and also optimised for maximum
                  performance. It also perfectly reflects the journey to help it
                  tell a story to increase its understanding and drive action.
                  To create a site that was visually engaging for maximum
                  performance.
                </p>
                <ul>
                  <li>Brand Development</li>
                  <li>UX/UI Design</li>
                  <li>Front-end Development</li>
                  <li>Copywriting</li>
                  <li>Shopify Development</li>
                </ul>
                <h2>Visual Studio</h2>
                <p>
                  Just like other pseudo-elements and pseudo-class selectors,
                  :not() can be chained with other pseudo-classes and
                  pseudo-elements. For example, the following will add a “New!”
                  word to list items that do not have a .old class name, using
                  the ::after pseudo-element:
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Code"
                />*/
