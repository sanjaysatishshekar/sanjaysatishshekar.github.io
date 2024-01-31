import Link from "next/link";

export default function background() {
  return (
    <section className="section">
      <div className="section__title">Background</div>
      <div className="section__content">
        <p>
          I&apso;m currently a Graduate Teaching Assistant at{" "}
          <Link
            className="underline-link"
            href="https://www.uta.edu/"
            target="_blank"
          >
            University of Texas at Arlington
          </Link>
          , where I&apso;m pursuing my Masters degreee in Computer Science. I&apso;ll be
          graduating in May 2024. I come with a strong background in FullStack
          and Cloud based software engineering, and have worked on building
          beautiful and complex software systems &amp; solutions. I have 4 years
          of experience in the industry, and have worked with{" "}
          <Link className="underline-link" href="https://www.infosys.com" target="_blank">
            Infosys Limited
          </Link>
          .{" "}
          <em>
            I&apso;m currently looking for full-time opportunities in Software
            Engineering, Software Development, FullStack Engineering, Cloud
            Engineering, and related fields.
          </em>
        </p>
        <p>
          As a software engineer, I enjoy bringing ideas to life, and building
          products that provide a great user experience. I&apso;m passionate about
          building scalable and efficient applications, and I&apso;m always looking
          to learn new technologies and frameworks. I&apso;m a quick learner, and I&apso;m
          always up for a challenge. I&apso;m a team player, and I love working with
          people from diverse backgrounds. I&apso;m a strong believer in the power of
          teamwork, and I&apso;m always looking to learn from my peers.
        </p>
        <p>
          <strong>When I&apso;m not in front of a computer screen</strong>, I&apso;m
          probably hiking, playing badminton, or crossing off another item on my
          bucket list.
        </p>
        <Link className="status" href="/Resume.pdf" target="_blank">
          <div className="status__light">
            <div className="status__light__ring"></div>
            <div className="status__light__led"></div>
          </div>
          <div className="status__message">
            Currently seeking full-time opportunities!
          </div>
        </Link>
      </div>
    </section>
  );
}
