import Data from "./experience_data";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__title">
        <span>02</span>
        <h2>Experience</h2>
      </div>
      <div className="section__content">
        <div className="jobs">
          {Data.map((job: any) => (
            <div className="job" key={job.company}>
              <div className="time-place">
                <div className="job__company">
                  <Link href={job.url}>{job.company}</Link>
                </div>
                <div className="job__time">{job.time.replace(" - ", " — ")}</div>
              </div>
              <div className="job__position">{job.position}</div>
            </div>
          ))}
        </div>
        {/* <Link href="/resume.pdf" target="_blank" className="arrow-link">
          View My Resume
        </Link> */}
      </div>
    </section>
  );
}
