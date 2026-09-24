"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Switch from "./switch";

export default function Header() {
  const [waveKey, setWaveKey] = useState(0);

  useEffect(() => {
    setWaveKey(1);
  }, []);

  return (
    <header className="intro">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="site-nav__brand" href="#top" aria-label="Back to top">
          SS.
        </Link>
        <div className="site-nav__right">
          <div className="site-nav__links">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#experience">Experience</Link>
            <Link
              className="site-nav__contact"
              href="mailto:sanjaysatishshekar@gmail.com"
            >
              Contact
            </Link>
          </div>
          <Switch />
        </div>
      </nav>

      <div className="intro__content" id="top">
        <p className="eyebrow">Software Engineer · AI Engineer · Cloud · Full-stack</p>
        <h1 className="intro__hello">
          Hello!
          <button
            key={waveKey}
            className="emoji wave-hand is-waving"
            type="button"
            aria-label="Wave hello"
            onClick={() => setWaveKey((currentKey) => currentKey + 1)}
          />
        </h1>
        <h2 className="intro__tagline">
          I&apos;m <span className="name">Sanjay Satish Shekar</span>. I build
          reliable, thoughtful software systems and digital{" "}
          <span className="intro__tagline-end">
            experiences.
            <img
              className="emoji technologist"
              src="/emojis/technologist.png"
              alt=""
            />
          </span>
        </h2>
        <p className="intro__summary">
          Software engineer focused on scalable applications, cloud platforms,
          and products that make complex things feel simple.
        </p>
        <div className="intro__actions">
          <Link className="button button--primary" href="#experience">
            View my experience <span aria-hidden="true">↓</span>
          </Link>
          <Link
            className="button button--secondary"
            href="mailto:sanjaysatishshekar@gmail.com"
          >
            Let&apos;s connect <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
