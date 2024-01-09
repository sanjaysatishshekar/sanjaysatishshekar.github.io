"use client";
import Link from "next/link";

export default function Home() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src="/images/github-profile-pic.png"
          alt="Sanjay Satish Shekar profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I&apos;m</p>
        <h1 className="title">Sanjay Satish Shekar</h1>
        <p className="section__text__p2">FullStack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => {
              window.open("/resume.pdf");
            }}
          >
            Download Resume
          </button>
          <Link href="/contact">
            <button className="btn btn-color-1">Contact Info</button>
          </Link>
        </div>

        <div id="socials-container">
          <Link href="https://linkedin.com/in/sanjay-ss" target="_blank">
            <img
              src="/images/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
            />
          </Link>
          <Link href="https://github.com/sanjaysatishshekar" target="_blank">
            <img
              src="/images/github.png"
              alt="My Github profile"
              className="icon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
