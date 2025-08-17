'use client'

import Link from 'next/link'
import './home.css'

export default function HomePage() {
  return (
    <>
      <div className="main-content">
        <div className="outer-box">

          {/* Block 1: Intro */}
          <Link href="/about" className="inner-box intro-box box1">
            <img src="image.png" alt="Parv" className="profile-pic" />
            <div className="intro-text">
              <h1 className="hey-title">Hey, I&apos;m Parv 👋🏼</h1>
              <div className="intro-subline">
                <span className="label">Pursuing Computer Engineering</span>
                <span className="intro-arrow-um-1">➜</span>
              </div>
            </div>
          </Link>

          {/* Block 2: About */}
          <Link href="/about" className="inner-box about-box box2">
            <img src="/profile.svg" alt="Profile Icon" className="about-icon" />
            <div className="about-main-text">LEARN MORE ABOUT ME</div>
            <div className="about-subline">
              <span className="label-text">About Me</span>
              <span className="about-arrow-um">➜</span>
            </div>
          </Link>

          {/* Block 3: Currently Learning */}
          <div className="inner-box learning-box box3">
            <img src="/learning.svg" alt="Learning Icon" className="learning-icon" />
            <div className="learning-heading">CURRENTLY LEARNING</div>
            <ul className="learning-list">
              <li><span className="bullet-dot"></span><span className="bullet-text">Python</span></li>
              <li><span className="bullet-dot"></span><span className="bullet-text">Backend</span></li>
              <li><span className="bullet-dot"></span><span className="bullet-text">AI</span></li>
            </ul>
          </div>

          {/* Block 4: GitHub */}
          <a
            href="https://github.com/Parvshah-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inner-box github-box box4"
          >
            <img src="/github.svg" alt="GitHub" className="github-icon" />
          </a>

          {/* Block 5: LinkedIn */}
          <a
            href="https://linkedin.com/in/parvshah01"
            target="_blank"
            rel="noopener noreferrer"
            className="inner-box linkedin-box box5"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="linkedin-icon" />
          </a>

          {/* Block 6: Contact / Get In Touch */}
          <Link href="/contact" className="inner-box contact-box box6">
            <img src="/message.svg" alt="Message Icon" className="contact-icon" />
            <p className="contact-subline">Ideas, collabs, feedback — all welcome.</p>
            <div className="contact-mainline">
              <span className="label-text-something-i-dont-understand">Get in touch now</span>
              <span className="contact-arrow-i-hate-this">➜</span>
            </div>
          </Link>

          {/* Block 7: API Collection */}
          <a
            href="https://www.postman.com/parv-shah01"
            target="_blank"
            rel="noopener noreferrer"
            className="inner-box api-box box7"
          >
            <img src="/api.svg" alt="API Icon" className="api-icon" />
            <div className="api-heading">My API Collection</div>
            <div className="api-subline">
              <span className="label-text-api">Explore my APIs</span>
              <span className="api-arrow">➜</span>
            </div>
          </a>


        </div>
      </div>
    </>
  );
}
