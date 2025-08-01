'use client'

import './about.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const tools = [
    { src: '/vscode.svg', alt: 'VS Code', href: 'https://code.visualstudio.com/' },
    { src: '/github.svg', alt: 'GitHub', href: 'https://github.com/' },
    { src: '/python.svg', alt: 'Python', href: 'https://www.python.org/' },
    { src: '/chatgpt.svg', alt: 'ChatGPT', href: 'https://chat.openai.com/' },
  ]

  return (
    <div className="about-layout">
      <div className="profile-box" data-aos="fade-right">
        <img src="image.png" alt="Parv Shah" className="profile-pic" />
        <h1 className="profile-name">Parv Shah</h1>
        <div className="divider" />

        <div className="profile-row">
          <img src="/mail.svg" className="icon-svg" alt="Mail icon" />
          <a href="mailto:parv@itsparv.xyz" className="info-text link-hover" target="_blank" rel="noopener noreferrer">
            parv@itsparv.xyz
          </a>
        </div>

        <div className="profile-row">
          <img src="/location.svg" className="icon-svg" alt="Location icon" />
          <a
            href="https://www.google.com/maps/place/Gujarat,+India"
            className="info-text link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gujarat, India
          </a>
        </div>


        <div className="profile-row">
          <span className="icon">&gt;</span>
          <span className="info-text">Uptime: 19 years</span>
        </div>
      </div>

      <div className="about-main-content">
        <section className="about-section" data-aos="fade-up">
          <h1 className="About-me-text">
            <span className="heading-gradient-bar"></span>About Me
          </h1>
          <div className="About-me-image-container">
            <p className="About-me-description">
              Hey, I’m Parv — 19 years old, pursuing Computer Engineering. I enjoy automating repetitive tasks and love diving into how systems work behind the scenes.
            </p>
          </div>
        </section>

        <section className="learning-section" data-aos="fade-up" data-aos-delay="100">
          <h1 className='What-I_Am_Learning'>
            <span className="heading-gradient-bar"></span>What I'm Learning
          </h1>
          <div className="About-me-image-container">
            <p className="About-me-description">
              Currently, I’m learning more about Python, GitHub workflows, APIs, and building small automation tools. I enjoy solving practical problems — especially when the solution is clean and reusable.
            </p>
          </div>
        </section>

        <section className="toolbox-section" data-aos="zoom-in" data-aos-delay="200">
          <h2 className="What-I_Am_Learning">
            <span className="heading-gradient-bar"></span>My Toolbox
          </h2>
          <div className="My-ToolBox">
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`ToolBox-Container-${index + 1}`}
                onContextMenu={(e) => e.preventDefault()}
                aria-label={tool.alt}
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className="ToolBox-Icon"
                  draggable="false"
                />
              </a>
            ))}
          </div>
        </section>

        <section className='Interests' data-aos="fade-up" data-aos-delay="300">
          <h1 className='What-I_Am_Learning'>
            <span className="heading-gradient-bar"></span>Interests
          </h1>
          <div className="Interests-container">
            <div className="Interest-column">
              <ul>
                <li>Backend</li>
                <li>Automation</li>
                <li>APIs</li>
                <li>UI/UX</li>
              </ul>
            </div>
            <div className="Interest-column">
              <ul>
                <li>Open-Source</li>
                <li>Webhooks</li>
                <li>Cloud</li>
                <li>Infra</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
