import React from 'react';
import { graphql } from 'gatsby';
import { object } from 'prop-types';
import Link from '../assets/link.svg';
import Github from '../assets/github.svg';
import WheelerJS from '../assets/wheelerjs.gif';
import EventFind from '../assets/eventfind.webp';

import ThemeProvider from '../components/ThemeProvider';
import Seo from '../components/Seo';

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <React.Fragment>
      <style>
        {`
						a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block
}

body {
  line-height: 1
}

ol,
ul {
  list-style: none
}

blockquote,
q {
  quotes: none
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

.navbar-container {
  display: flex;
  justify-content: flex-end;
  margin: 0 auto
}

@media (max-width:767px) {
  .navbar-container {
    justify-content: center;
    width: 75%
  }
}

.navbar-container .navbar {
  display: flex;
  justify-content: space-around;
  width: 286px;
  font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif;
  font-size: 1.2em;
  margin-top: 40px
}

@media (max-width:767px) {
  .navbar-container .navbar {
    font-size: 1em
  }
}

.navbar-container .navbar a {
  position: relative;
  text-decoration: none;
  color: #5a5d7a
}

.navbar-container .navbar a:after {
  display: block;
  position: absolute;
  left: 0;
  bottom: -30px;
  width: 0;
  height: 8px;
  background-color: #747fe0;
  content: "";
  transition: width .15s
}

.navbar-container .navbar a:hover {
  color: #7795f8
}

.navbar-container .navbar a:hover:after {
  width: 100%
}

.hero-container {
  margin: 0 auto;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end
}

.hero-container a {
  font-weight: 700
}

@media (max-width:767px) {
  .hero-container {
    margin-top: 15vh
  }
}

.hero-container .hero-title {
  font-family: 'Zilla Slab', Lucida Console, monospace;
  font-size: 3.5em;
  color: #747fe0
}

.hero-container .hero-title:before {
  content: "> ";
}

@media (max-width:767px) {
  .hero-container .hero-title {
    font-size: 2em
  }
}

.hero-container .hero-title span {
  background-color: rgba(116, 127, 224, .65);
  animation: caret 1s steps(1) infinite
}

.hero-container .hero-description {
  font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif;
  font-weight: 200;
  font-size: 1.5em;
  line-height: 40px;
  color: #525f7f;
  margin: 80px 0
}

@media (max-width:767px) {
  .hero-container .hero-description {
    font-size: 1.2em;
    line-height: 30px;
    max-width: 100%;
    margin: 50px 0
  }
}

.about-container {
  margin-top: 20vh;
  margin: 0 auto
}

.about-container .terminal .terminal-header {
  height: 28px;
  background-color: #e4e3e5;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center
}

.about-container .terminal .terminal-header .header-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 9px
}

.about-container .terminal .terminal-header .red {
  background-color: #f96256;
  border: 1px solid #f65549
}

.about-container .terminal .terminal-header .yellow {
  background-color: #fdbc3d;
  border: 1px solid #ffb524
}

.about-container .terminal .terminal-header .green {
  background-color: #33c948;
  border: 1px solid #2dbb41
}

.about-container .terminal .terminal-window {
  background-color: #3B3D4F;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, .15), 0 15px 35px rgba(50, 50, 93, .2), 0 5px 15px rgba(0, 0, 0, .12);
	font-family: 'Cascadia Code';
}

.about-container .terminal .terminal-window a {
  color: #35feff
}

.about-container .terminal .terminal-window .statement:first-child {
  padding-top: 35px
}

.about-container .terminal .terminal-window .statement:last-child {
  padding-bottom: 60px
}

.about-container .terminal .terminal-window .statement {
  margin-bottom: 25px;
  margin-left: 35px;
  margin-right: 35px;
  line-height: 24px
}

.about-container .terminal .terminal-window .statement .input-statement {
  color: #f7f7f7;
}

.about-container .terminal .terminal-window .statement .input-statement:before {
  content: "> "
}

.about-container .terminal .terminal-window .statement .return-statement {
  color: #e7d184
}

.about-container .terminal .terminal-window .statement span {
  background: hsla(0, 0%, 97%, .65);
  animation: caret 1s steps(1) infinite
}

@keyframes caret {
  50% {
    background-color: transparent
  }
}

.projects-container {
  margin: 0 auto;
  font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif
}

.projects-container .project-card {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 60px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, .05), 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .1);
  overflow: hidden
}

@media (max-width:767px) {
  .projects-container .project-card {
    margin-bottom: 40px
  }
}

.projects-container .project-card .project-image {
  width: 80%;
  position: absolute !important;
  top: 0;
  left: 0
}

@media (max-width:1023px) {
  .projects-container .project-card .project-image {
    display: none
  }
}

.projects-container .project-card .project-background {
  position: absolute;
  top: -1px;
  right: -1px;
  height: 110%;
  width: 83%;
  background: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMxNiIgdmlld0JveD0iMCAwIDQ0NiAzMTYiIHdpZHRoPSI0NDYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09IiI+PHBhdGggZD0ibTI3NC41NDkwNTQgMzE2aDE3MS40NTA5NDZ2LTMxNmgtMzY2LjIyMTgzMDNsLTI3LjgxNjg1NjMgMTExLjMwNzAxIDUxLjEzNjc5NDYgMjA0LjY5Mjk5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0yNC4xNTEwOTI1IDBoNTUuNjk3ODE1bC0yNy44ODg4ODQyIDExMS4zMjA5ODR6IiBmaWxsPSIjYzFkZGZmIiBvcGFjaXR5PSIuNTU2ODM5Ii8+PHBhdGggZD0ibTUxLjk2MDMxMTkgMTExLjMxODAyNCA1MS4xNDkyMjcxIDIwNC42ODE5NzZoLTEwMi4zMTE1NTcxNHoiIGZpbGw9IiM5Mzg3ZTQiIG9wYWNpdHk9Ii41MjY2MDgiLz48L2c+PC9zdmc+);
  background-size: cover
}

@media (max-width:1023px) {
  .projects-container .project-card .project-background {
    display: none
  }
}

.projects-container .project-card .project-content {
  padding: 60px;
  width: 50%;
  z-index: 2
}

@media (max-width:1023px) {
  .projects-container .project-card .project-content {
    width: 100%;
    padding: 35px;
    box-sizing: border-box
  }
}

.projects-container .project-card .project-content h3 {
  font-weight: 500;
  font-size: 1.8em;
  line-height: 38px;
  color: #525f7f;
  margin-top: 0;
  margin-bottom: 35px
}

.projects-container .project-card .project-content .project-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.projects-container .project-card .project-content .project-links .project-link {
  margin-right: 20px;
  margin-top: 20px;
  white-space: nowrap;
  display: inline-block;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  border-radius: 4px;
  letter-spacing: .025em;
  text-decoration: none;
  transition: all .15s ease;
  font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif;
  font-size: .9em;
  font-weight: 600;
  box-sizing: border-box;
  background: #5A5D7A;
  color: #fff
}

@media only screen and (max-width: 400px) {
  .projects-container .project-card .project-content .project-links .project-link {
    margin-right: 5px;
    margin-top: 20px;
    white-space: nowrap;
    display: inline-block;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    border-radius: 4px;
    letter-spacing: .025em;
    text-decoration: none;
    transition: all .15s ease;
    font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif;
    font-size: .9em;
    font-weight: 600;
    box-sizing: border-box;
    background: #5A5D7A;
    color: #fff
  }
}

.projects-container .project-card .project-content .project-links .project-link:hover {
  background: #5A5D7A;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08)
}

.projects-container .project-card .project-content .project-links .project-link.secondary {
  background: #fff;
  color: #5A5D7A;
}

.projects-container .project-card .project-content .project-links .project-link.secondary:hover {
  background: #fff
}

.projects-container .project-card .project-content p {
  margin-bottom: 30px;
  line-height: 27px;
  color: #5A5D7A;
}

.projects-container .project-card .project-content a {
  font-weight: 700
}

.projects-container .project-card .project-content .project-skills {
  display: flex;
  flex-wrap: wrap
}

.projects-container .project-card .project-content .project-skills .project-skill {
  border-radius: 4px;
  border: 2px solid #92eac0;
  padding: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif;
  font-size: .85em;
  color: #5A5D7A;
}

.contact-links {
  font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif;
  font-size: 1.2em;
  text-align: center;
  padding-bottom: 200px;
  display: flex;
  justify-content: center
}

@media (max-width:767px) {
  .contact-links {
    flex-direction: column;
    padding-bottom: 80px
  }
}

@media (max-width:767px) {
  .contact-links span {
    margin: 20px 0
  }
}

.contact-links span:after {
  content: "||";
  color: #525f7f;
  margin: 0 30px
}

@media (max-width:767px) {
  .contact-links span:after {
    content: "";
    margin: 0
  }
}

.contact-links span:nth-child(3):after {
  content: "";
  margin: 0
}

.contact-links a {
  position: relative;
  text-decoration: none;
  color: #5a5d7a
}

.contact-links a:after {
  display: block;
  position: absolute;
  left: 0;
  bottom: -30px;
  width: 0;
  height: 8px;
  background-color: #747fe0;
  content: "";
  transition: width .15s
}

@media (max-width:767px) {
  .contact-links a:after {
    bottom: -15px
  }
}

.contact-links a:hover {
  color: #7795f8
}

.contact-links a:hover:after {
  width: 100%
}

.footer {
  margin: 0 auto;
  font-size: .8em;
  line-height: 1.5em;
  font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif;
  text-align: center;
  padding-bottom: 50px;
  color: #525f7f
}

body {
  background-color: white;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-feature-settings: "pnum";
  font-variant-numeric: proportional-nums
}

a {
  text-decoration: none;
  color: #747fe0;
  transition: .1s ease-in-out
}

a:hover {
  opacity: .8
}

#topBackground {
  position: absolute;
  top: 0;
  width: 100%;
  height: 760px;
  transform: skewY(-12deg);
  transform-origin: 0;
  background-color: #fff;
  z-index: -999
}

@media (max-width:767px) {
  #topBackground {
    height: 500px
  }
}

.container-lg {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px
}

@media (max-width:767px) {
  .container-lg {
    padding: 0 20px
  }
}

.section-title {
  color: #525f7f;
  font-family: 'Zilla Slab', Open Sans, Segoe UI, sans-serif;
  font-weight: 500;
  font-size: 1.5em;
  text-align: center;
  padding-top: 50px;
  margin-top: 50px;
  margin-bottom: 80px
}

@media (max-width:767px) {
  .section-title {
    margin-bottom: 40px
  }
}

.section-title:after {
  content: " ";
  border: 4px solid #747fe0;
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  width: 50px
}
					`}
      </style>
      <Seo title="Home" />
      <ThemeProvider>
        <div>
          <div className="container-lg">
            <div>
              <div className="home-container">
                <div className="navbar-container">
                  <nav className="navbar">
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="https://suyashpatil.me/blog">Blogs</a>
                  </nav>
                </div>
                <div className="hero-container">
                  <div className="hero-title">
                    Suyash Patil
                  </div>
                  <div className="hero-description">I am currently working as Member of Technical Staff at <a href="https://fylehq.com"> Fyle</a>. I love to build software using different technologies. Currently I am learning functional programming and a bit of system design and patterns.
                    <br />
                    I also write about JavaScript, React, Angular and many other things. To know more about me, check out my <a href="https://suyashpatil.me/blog">blogs</a>.
                    <br />
                  </div>
                </div>
                <div className="about-container">
                  <div className="terminal">
                    <div className="terminal-header">
                      <div className="header-button red"></div>
                      <div className="header-button yellow"></div>
                      <div className="header-button green"></div>
                    </div>
                    <div className="terminal-window">
                      <code>
                        <div>
                          <div className="statement">
                            <div className="input-statement">Suyash.contactInfo</div>
                            <div className="return-statement">["<a
                              href="mailto:patilsuyash545@gmail.com">patilsuyash545@gmail.com</a>", "<a
                                rel="noopener"
                                href="https://www.linkedin.com/in/suyash-patil">LinkedIn</a>",
                              "<a rel="noopener" href="https://github.com/suyashpatil78">GitHub</a>", "<a
                                href="https://stackoverflow.com/users/20093123/suyashpatil">Stackoverflow</a>", "<a
                                  href="https://www.quora.com/profile/Suyash-Patil-33">Quora</a>"]</div>
                          </div>
                          <div className="statement">
                            <div className="input-statement">Suyash.interests</div>
                            <div className="return-statement">["tech blogs", "chess", "cricket"]</div>
                          </div>
                          <div className="statement">
                            <div className="input-statement">Suyash.education</div>
                            <div className="return-statement">"B.Tech. Electronics and Communication Engineering -
                              Ujjain Engineering College, Madhya Pradesh, India"</div>
                          </div>
                          <div className="statement">
                            <div className="input-statement">Suyash.skills</div>
                            <div className="return-statement">["Sass", "JavaScript", "TypeScript",
                              "React", "Angular", "Redux", "git"]</div>
                          </div>
                          <div className="statement">
                            <div className="input-statement"><span>&nbsp;</span>
                            </div>
                          </div>
                        </div>
                      </code>
                    </div>
                  </div>
                </div>
                <h2 id="projects" className="section-title">Projects</h2>
                <div className="projects-container">
                  <div className="project-card">
                    <img alt="eventfind" className="project-image" style={{ maxWidth: '32%' }}
                      src={EventFind} />
                    <div className="project-background"></div>
                    <div className="project-content">
                      <h3>EventFind</h3>
                      <p style={{ fontSize: '1.2em' }}>
                        A cross-platform mobile application developed to create and locate an event happening nearby you built using Ionic and Angular.
                      </p>
                      <div className="project-skills"><span className="project-skill">Ionic</span><span className="project-skill">Angular</span><span className="project-skill">TypeScript</span></div>
                      <div className="project-links">
                        <a href="https://youtu.be/hEH8tLuaDHQ" rel="noopener" target="_blank" className="project-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                          Video Demo
                          <img alt="demo" src={Link} width="16px" height="14px" />
                        </a>
                        <a href="https://github.com/suyashpatil78/eventfind" rel="noopener" target="_blank" className="project-link secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                          Source Code
                          <img alt="github" src={Github} width="16px" height="14px" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="projects-container">
                  <div className="project-card">
                    <img alt="wheelerjs" className="project-image"
                      src={WheelerJS} style={{ width: "38%", left: "-6%" }} />
                    <div className="project-background"></div>
                    <div className="project-content">
                      <h3>WheelerJS</h3>
                      <p style={{ fontSize: '1.2em' }}>
                        A zero-dependency NPM package for showing animated loader in ReactJS with package size of just 7.9kB having more than 4k+ downloads.
                      </p>
                      <div className="project-skills"><span className="project-skill">React</span><span className="project-skill">TypeScript</span></div>
                      <div className="project-links">
                        <a href="https://wheelerjs.suyashpatil.me/" rel="noopener" target="_blank" className="project-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                          Live Demo
                          <img alt="demo" src={Link} width="16px" height="14px" />
                        </a>
                        <a href="https://github.com/suyashpatil78/wheelerjs" rel="noopener" target="_blank" className="project-link secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                          Source Code
                          <img alt="github" src={Github} width="16px" height="14px" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 id="experience" className="section-title">Work Experience</h2>
                <div className="projects-container">
                  <div className="project-card">
                    <div className="project-content" style={{ padding: '30px', width: '90%' }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img alt="fyle logo" style={{ paddingTop: '8px', paddingRight: '10px' }} width="25px" height="25px" src="https://play-lh.googleusercontent.com/6b1OtR4-trPrG16IioeS2VMIeonOtDIMn1w2k5PTm3ORDxduYvF4MDLB_k2vZsSfTQk" />
                        <div>
                          <h3 style={{ marginBottom: '10px' }}>Fyle</h3>
                          <p>March 2023 - Present</p>
                        </div>
                      </div>

                      <p style={{ fontSize: '1.2em' }}>
                        Currently working in the frontend team at Fyle.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="background"></div>
                <h2 id="contact" className="section-title">Contact me!</h2>
                <div className="contact-links">
                  <span>
                    <a rel="noopener" target="_blank" href="mailto:patilsuyash545@gmail.com">
                      patilsuyash545@gmail.com
                    </a>
                  </span>
                  <span>
                    <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/suyash-patil">
                      LinkedIn
                    </a>
                  </span>
                  <span>
                    <a rel="noopener" target="_blank" href="https://github.com/suyashpatil78">
                      GitHub
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment >
  );
};

HomePage.propTypes = {
  data: object.isRequired,
  location: object.isRequired,
};

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default HomePage;
