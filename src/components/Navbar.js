import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "@fontsource/noto-sans"
import "@fontsource/montserrat"
import "@fontsource/material-icons"
import "@fontsource/material-icons-rounded"
import "@fontsource/material-icons-outlined"
import "@fontsource/material-icons-sharp"
import "@fontsource/material-icons-two-tone"

const Navbar = () => {
  function changeAbout() {
    let aboutIcon = document.getElementById("about_me_icon")
    let aboutLink = document.getElementById("about_me_link")
    if (aboutIcon.textContent == "self_improvement") {
      aboutIcon.textContent = "accessibility_new"
      aboutIcon.style.color = "white"
      aboutLink.style.color = "white"
      aboutLink.style.textDecoration = "underline"
      aboutLink.style.textDecorationColor = "#ECFE01"
      aboutLink.style.textUnderlineOffset = "5px"
      aboutLink.style.textDecorationThickness = "7px"
    } else {
      aboutIcon.textContent = "self_improvement"
      aboutIcon.style.color = "#A9A9A9"
      aboutLink.style.color = "#A9A9A9"
      aboutLink.style.textDecoration = "none"
    }
  }
  function changeProjects() {
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    if (projectsIcon.textContent == "terminal") {
      projectsIcon.textContent = "data_object"
      projectsIcon.style.color = "white"
      projectsLink.style.color = "white"
      projectsLink.style.textDecoration = "underline"
      projectsLink.style.textDecorationColor = "#FF0000"
      projectsLink.style.textUnderlineOffset = "5px"
      projectsLink.style.textDecorationThickness = "7px"
    } else {
      projectsIcon.textContent = "terminal"
      projectsIcon.style.color = "#A9A9A9"
      projectsLink.style.color = "#A9A9A9"
      projectsLink.style.textDecoration = "none"
    }
  }
  function changeGithub() {
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    if (githubIcon.textContent == "tv") {
      githubIcon.textContent = "display_settings"
      githubIcon.style.color = "white"
      githubLink.style.color = "white"
      githubLink.style.textDecoration = "underline"
      githubLink.style.textDecorationColor = "#0091FF"
      githubLink.style.textUnderlineOffset = "5px"
      githubLink.style.textDecorationThickness = "7px"
    } else {
      githubIcon.textContent = "tv"
      githubIcon.style.color = "#A9A9A9"
      githubLink.style.color = "#A9A9A9"
      githubLink.style.textDecoration = "none"
    }
  }
  return (
    <Wrapper>
      <section className="navigation">
        <div className="container">
          <div className="nav-item">
            <StyledMainLink id="main_link" to="/">
              Anser Ghazi
            </StyledMainLink>
          </div>
          <div className="nav-item">
            <span
              class="material-icons"
              id="about_me_icon"
              onMouseOver={() => changeAbout()}
              onMouseLeave={() => changeAbout()}
            >
              self_improvement
            </span>
            <StyledLink
              to="/about"
              id="about_me_link"
              onMouseOver={() => changeAbout()}
              onMouseLeave={() => changeAbout()}
            >
              About Me
            </StyledLink>
          </div>
          <div className="nav-item">
            <span
              class="material-icons"
              id="projects_icon"
              onMouseOver={() => changeProjects()}
              onMouseLeave={() => changeProjects()}
            >
              terminal
            </span>
            <StyledLink
              to="/projects"
              id="projects_link"
              onMouseOver={() => changeProjects()}
              onMouseLeave={() => changeProjects()}
            >
              Projects
            </StyledLink>
          </div>
          <div className="nav-item">
            <span
              class="material-icons"
              id="github_icon"
              onMouseOver={() => changeGithub()}
              onMouseLeave={() => changeGithub()}
            >
              tv
            </span>
            <a
              href="https://github.com/anserghazi"
              target="_blank"
              rel="noreferrer"
              id="github_link"
              onMouseOver={() => changeGithub()}
              onMouseLeave={() => changeGithub()}
            >
              Github
            </a>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .navigation {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 5px;
    z-index: 5;
    background-color: #181f24;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    min-width: 900px;
    max-width: 1000px;
  }

  .nav-item {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-self: center;
  }

  a {
    color: #a9a9a9;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    font-weight: 600;
    line-height: 25px;
    margin-left: 5px;
    margin-right: -25px;
  }
  span {
    color: #a9a9a9;
  }

  #main_link {
    font-weight: 800;
    color: white;
    margin-left: -30px;
    margin-right: 200px;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-color: #07ff00;
      text-decoration-thickness: 8px;
    }
    &:active {
      font-weight: 800;
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #a9a9a9;
  text-decoration: none;
  font-weight: 600;
`

const StyledMainLink = styled(props => <Link {...props} />)`
  font-size: 20px;
  color: white;
  text-decoration: none;
`

export default Navbar
