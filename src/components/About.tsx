import "react";
import about_pic from "../assets/about-pic.jpg";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";


export function About() {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={about_pic} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={experience} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  4 years <br />
                  Full Stack Developer
                </p>
              </div>
              <div className="details-container">
                <img src={education} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>M.S. in Computer Science</p>
                <p>University of Texas at Arlington</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello! I'm currently a Grad Student in Computer Science at the
                University of Texas at Arlington. Prior to this, I come with 4
                years of professional experience in Infosys Limited as
                Specialist Programmer (Full Stack Developer). My interests
                primarily lie in Cloud, FullStack systems and solutions. <br />
                <i>I'm currently looking for jobs in US starting May 2024.</i>
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => {
            location.href = "./#experience";
          }}
        />
      </section>
    </>
  );
}
