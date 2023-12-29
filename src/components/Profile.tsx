import "react";
import profile_pic from '../assets/github-profile-pic.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export function Profile() {
  return <>
  <section id="profile">
      <div className="section__pic-container">
        <img src={profile_pic} alt="Sanjay Satish Shekar profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sanjay Satish Shekar</h1>
        <p className="section__text__p2">FullStack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => {window.open('./resume.pdf')}}
            >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => {location.href='./#contact'}}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => {window.open('https://linkedin.com/in/sanjay-ss', '_blank')}}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={() => {window.open('https://github.com/sanjaysatishshekar', '_blank')}}
          />
        </div>
      </div>
    </section>
    </>;
}