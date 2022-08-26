import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "@fontsource/yantramanav"
import "@fontsource/material-icons"

const Navbar = () => {
  let path = window.location.pathname.split("/")[1]

  function changeAbout() {
    let aboutIcon = document.getElementById("about_me_icon")
    let aboutLink = document.getElementById("about_me_link")
    let aboutNav = document.getElementById("about_nav")
    if (aboutIcon.textContent == "self_improvement" || path === "about") {
      aboutIcon.textContent = "accessibility_new"
      aboutIcon.style.color = "#FEFF38"
      aboutLink.style.color = "white"
      aboutLink.style.textDecorationColor = "#FEFF38"
      aboutLink.style.textUnderlineOffset = "5px"
      aboutLink.style.textDecorationThickness = "4px"
      aboutLink.style.transition = "all 1s"
      aboutIcon.style.transition = "all 1s"
      aboutIcon.style.marginRight = "-3px"
      aboutNav.style.paddingRight = "3px"
      aboutNav.style.transition = "all 1s"
    } else {
      aboutIcon.textContent = "self_improvement"
      aboutIcon.style.color = "#BEBEBE"
      aboutLink.style.color = "#BEBEBE"
      aboutLink.style.textDecorationColor = "#181f24"
      aboutLink.style.transition = "all 1s"
      aboutIcon.style.transition = "all 1s"
      aboutIcon.style.marginRight = "0px"
      aboutNav.style.paddingRight = "0px"
      aboutNav.style.transition = "all 1s"
    }
  }
  function changeProjects() {
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    let projectsNav = document.getElementById("projects_nav")
    if (projectsIcon.textContent == "terminal" || path === "projects") {
      projectsIcon.textContent = "data_object"
      projectsIcon.style.color = "#FF0000"
      projectsLink.style.color = "white"
      projectsLink.style.textDecorationColor = "#FF0000"
      projectsLink.style.textUnderlineOffset = "5px"
      projectsLink.style.textDecorationThickness = "4px"
      projectsLink.style.transition = "all 1s"
      projectsIcon.style.transition = "all 1s"
      projectsIcon.style.marginRight = "-2px"
      projectsNav.style.paddingRight = "2px"
      projectsNav.style.transition = "all 1s"
    } else {
      projectsIcon.textContent = "terminal"
      projectsIcon.style.color = "#BEBEBE"
      projectsLink.style.color = "#BEBEBE"
      projectsLink.style.textDecorationColor = "#181f24"
      projectsLink.style.transition = "all 1s"
      projectsIcon.style.transition = "all 1s"
      projectsIcon.style.marginRight = "0px"
      projectsNav.style.paddingRight = "0px"
      projectsNav.style.transition = "all 1s"
    }
  }
  function changeGithub() {
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    if (githubIcon.textContent == "tv") {
      githubIcon.textContent = "display_settings"
      githubIcon.style.color = "#0091FF"
      githubLink.style.color = "white"
      githubLink.style.textDecorationColor = "#0091FF"
      githubLink.style.textUnderlineOffset = "5px"
      githubLink.style.textDecorationThickness = "4px"
      githubLink.style.transition = "all 1s"
      githubIcon.style.transition = "all 1s"
    } else {
      githubIcon.textContent = "tv"
      githubIcon.style.color = "#BEBEBE"
      githubLink.style.color = "#BEBEBE"
      githubLink.style.textDecorationColor = "#181f24"
      githubLink.style.transition = "all 1s"
      githubIcon.style.transition = "all 1s"
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
          <div className="nav-item" id="about_nav">
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
          <div className="nav-item" id="projects_nav">
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
          <div className="nav-item" id="github_nav">
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
              GitHub
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
    min-width: 1000px;
    max-width: 1200px;
  }

  .nav-item {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-self: center;
    font-size: 18px;
  }

  a {
    color: #bebebe;
    font-family: "Yantramanav", sans-serif;
    text-decoration: underline;
    text-decoration-color: #181f24;
    text-underline-offset: 5px;
    text-decoration-thickness: 4px;
    font-weight: 600;
    line-height: 28px;
    margin-left: 3px;
    margin-right: -25px;
  }
  span {
    color: #bebebe;
  }

  #main_link {
    font-weight: 800;
    color: white;
    margin-left: -30px;
    margin-right: 200px;
    transition: all 500ms;
    text-decoration: underline;
    text-decoration-color: #181f24;
    text-decoration-style: solid;
    text-underline-offset: 5px;
    text-decoration-thickness: 7px;
    &:hover {
      text-decoration-color: #24e85d;
    }
    &:after {
      text-decoration-color: #181f24;
    }
    &:active {
      font-weight: 800;
    }
  }

  #about_me_link {
    margin-left: 3px;
  }

  #about_me_icon {
    line-height: 23px;
    margin-right: -1px;
  }

  #projects_icon {
    margin-right: 1px;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #bebebe;
  text-decoration: underline;
  text-decoration-color: #181f24;
  text-underline-offset: 5px;
  text-decoration-thickness: 4px;
  font-weight: 600;
`

const StyledMainLink = styled(props => <Link {...props} />)`
  font-size: 22px;
  color: white;
`

export default Navbar
