import Socials from "./social";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="top">
          <span>Designed &amp; Developed by&nbsp;</span>
        </div>
        <div className="bottom">
          <span>Sanjay Satish Shekar</span>
          <img src="/emojis/rockon.png" alt="" className="emoji" />
          <span>2024</span>
        </div>
      </div>
      <div className="footer__links">
        {Socials.map((social: any) => (
          <Link
            href={social.url}
            target="_blank"
            title={social.title}
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
