import Link from "next/link";

export default function background() {
  return (
    <section className="section">
      <div className="section__title">Background</div>
      <div className="section__content">
        <p>
          I&apos;m currently a Graduate Teaching Assistant at{" "}
          <Link
            className="underline-link"
            href="https://www.uta.edu/"
            target="_blank"
          >
            University of Texas at Arlington
          </Link>
          , where I&apos;m pursuing my Masters degreee in Computer Science. I&apos;ll be
          graduating in May 2024. I come with a strong background in FullStack
          and Cloud based software engineering, and have worked on building
          beautiful and robust software systems &amp; solutions. I have over 5 years
          of experience in the industry, and have worked with{" "}
          <Link className="underline-link" href="https://www.apple.com" target="_blank">
            Apple Inc
          </Link>
          .{" "}
          <em>
            I&apos;m currently looking for full-time opportunities in Software
            Engineering, Software Development, FullStack Engineering, Cloud
            Engineering, and related fields.
          </em>
        </p>
        <p>
          As a software engineer, I enjoy bringing ideas to life, and building
          products that provide a great user experience. I&apos;m passionate about
          building scalable and efficient applications, and I&apos;m always looking
          to learn new technologies and frameworks. I&apos;m a quick learner, and I&apos;m
          always up for a challenge. I&apos;m a team player, and I love working with
          people from diverse backgrounds. I&apos;m a strong believer in the power of
          teamwork, and I&apos;m always looking to learn from my peers.
        </p>
        <p>
          <strong>When I&apos;m not in front of a computer screen</strong>, I&apos;m
          probably hiking, playing badminton, or crossing off another item on my
          bucket list.
        </p>
        {/* <Link className="status" href="/resume.pdf" target="_blank"> */}
        <Link className="status" href="" target="">
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
