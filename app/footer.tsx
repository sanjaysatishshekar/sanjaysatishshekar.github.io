import Socials from "./social";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__message">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let&apos;s build something useful.</h2>
        <Link className="button button--primary" href="mailto:sanjaysatishshekar@gmail.com">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="footer__links">
        {Socials.map((social: any) => (
          <Link
            href={social.url}
            target="_blank"
            rel="noreferrer"
            title={social.title}
            aria-label={social.title}
            key={social.title}
          >
            <span className="text">{social.title}</span>
            <img src={`/social/${social.title}.svg`} alt={social.title} />
          </Link>
        ))}
      </div>
    </footer>
  );
}
