function AboutPage() {
  return (
    <>
      <section id="about">
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="/images/about-pic.jpg"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="/images/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  4 years <br />
                  Full Stack Developer
                </p>
              </div>
              <div className="details-container">
                <img
                  src="/images/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>M.S. in Computer Science</p>
                <p>University of Texas at Arlington</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello! I&apos;m currently a Grad Student in Computer Science at the
                University of Texas at Arlington. Prior to this, I come with 4
                years of professional experience in Infosys Limited as
                Specialist Programmer (Full Stack Developer). My interests
                primarily lie in Cloud, FullStack systems and solutions. <br />
                <i>I&apos;m currently looking for jobs in US starting May 2024.</i>
              </p>
            </div>
          </div>
        </div>
        {/* <img src="/images/arrow.png" alt="Arrow icon" className="icon arrow" /> */}
      </section>
    </>
  );
}

export default AboutPage;
