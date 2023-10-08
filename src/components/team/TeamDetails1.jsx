import { useEffect, useRef } from "react";
import TeamDetails from "../../../public/assets/imgs/team/detail.jpg";
import Placeholder from "../../../public/assets/imgs/team/placeholder.jpg";
import Image from "next/image.js";
import animationCharCome from "@/lib/utils/animationCharCome";
import parseMarkdown from "@/hooks/markdownHtml";

const TeamDetails1 = ({ jmeno,
  prijmeni,
  pozice,
  desc,
  portfolio,
  technology,
  email,
  phone,
  createdAt,
  updatedAt,
  publishedAt,
  preview432x550,
  photo765x1000,
  projects}) => {
  const charAnim = useRef();
  const charAnim2 = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationCharCome(charAnim2.current);
  }, []);
 let previewData = preview432x550?.data
 let photoData = photo765x1000?.data
  let projectData = projects?.data
  let portfolioLinks = portfolio ? Object.entries(portfolio)?.map(([name, href]) => ({ name, href })) : []
  const { metadata, htmlContent } = parseMarkdown(desc);
  return (
    <>
      <section className="team__detail">
        <div className="container line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
              <div className="team__member-img">
                <Image
                  priority
                  style={{ width: "100%", height: "102%" }}
                  src={photoData?.attributes?.url ? "http://38.242.151.80:1666" + photoData.attributes.url : Placeholder}
                  alt="Team Member Picture"
                  data-speed="0.5"
                  width={765}
                  height={1000}
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="sec-title-wrapper pt-120">
                <h2
                  className="team__member-name-7 animation__char_come"
                  ref={charAnim}
                  style={{padding: "0"}}
                >
                  {jmeno} <br />
                  {jmeno?.length > 3 && prijmeni}
                </h2>
                {jmeno?.length < 3 && <h3 style={{color: "#545454 !important"}}>{prijmeni}</h3>}
                <h3
                style={{marginTop: "2vh"}}
                  className="team__member-role-7 animation__char_come"
                  ref={charAnim2}
                >
                {pozice}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }}>
                  
                </div>
                
              </div>
              <div className="team__member-work">
              <h4 className="work-title">Dovednosti</h4>
              <ul>
              {technology?.skills?.map(skill => {
                return(
                  <li>
                   <a href="#"> {skill}</a>
                  </li>
                )
              })}
                </ul>
              </div>
              <div className="team__member-work">
              <h4 className="work-title">Kontakt</h4>
              <ul>
              <li>
                    <a href={"mailto:" + email}>{email}</a>
                  </li>
                  <li>
                    <a href={"tel:" + phone}>{phone}</a>
                  </li>
              </ul>
              </div>
              <div className="team__member-work">
                <h4 className="work-title">Portfolio :</h4>
                <ul>
                {portfolioLinks?.map(({name, href}, index) => {

                  return(
                    <li>
                    <a href={href}>{name}</a>
                  </li>
                  )
                })}
                </ul>
              </div>
              <div className="team__member-work">
                <h4 className="work-title">Projekty</h4>
                <ul>
                {projectData?.map(({attributes: {name}}, index) => {
                  return(
                    <li>
                    <a href={"/portfolio/"+name.toLowerCase().replace(" ", "-")}>{name}</a>
                  </li>
                  )
                })}

                </ul>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default TeamDetails1;
