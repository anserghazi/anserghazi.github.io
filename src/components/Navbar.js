import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "@fontsource/yantramanav"
import "@fontsource/material-icons"

const Navbar = () => {
  let path = window.location.pathname.split("/")[1]

  function changeAbout() {
    let aboutIcon = document.getElementById("about_icon")
    let aboutLink = document.getElementById("about_me_link")
    if (aboutIcon.textContent == "self_improvement" || path === "about") {
      aboutIcon.textContent = "follow_the_signs"
      aboutIcon.style.color = "#ECFE01"
      aboutLink.style.color = "white"
      aboutLink.style.textDecoration = "underline"
      aboutLink.style.textDecorationColor = "#ECFE01"
      aboutLink.style.textUnderlineOffset = "5px"
      aboutLink.style.textDecorationThickness = "4px"
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
    let projectsNav = document.getElementById("projects_nav")
    if (projectsIcon.textContent == "terminal" || path === "projects") {
      projectsIcon.textContent = "data_object"
      projectsIcon.style.color = "#FF0000"
      projectsLink.style.color = "white"
      projectsLink.style.textDecorationColor = "#FF0000"
      projectsLink.style.textUnderlineOffset = "5px"
      projectsLink.style.textDecorationThickness = "4px"
    } else {
      projectsIcon.textContent = "terminal"
      projectsIcon.style.color = "#BEBEBE"
      projectsLink.style.color = "#BEBEBE"
      projectsLink.style.textDecorationColor = "#181f24"
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
    } else {
      githubIcon.textContent = "tv"
      githubIcon.style.color = "#BEBEBE"
      githubLink.style.color = "#BEBEBE"
      githubLink.style.textDecorationColor = "#181f24"
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
              id="about_icon"
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

  #projects_icon {
    margin-right: 1px;
  }

  #about_me_link {
    margin-left: 2px;
    color: #bebebe;
    text-decoration-color: #181f24;
  }

  #about_icon {
    line-height: 25px;
    margin-right: -1px;
    color: #bebebe;
    margin-right: 0px;
  }

  #about_nav {
    transition: all 1s;
    padding-right: 0px;
    &:hover {
    }
    &:hover #about_icon_before {
      display: inline;
    }
    &:hover #about_icon_after {
    }
    &:hover #about_me_link {
      color: white;
      text-decoration-color: #feff38;
      text-underline-offset: 5px;
      text-decoration-thickness: 4px;
    }
  }

  @media only screen and (max-width: 1250px) {
    .container {
      min-width: 850px;
      max-width: 970px;
    }
  }

  @media only screen and (max-width: 1100px) {
    .container {
      min-width: 670px;
      max-width: 850px;
    }
  }

  @media only screen and (max-width: 950px) {
    .container {
      min-width: 590px;
      max-width: 850px;
    }

    #main_link {
      margin-right: 50px;
    }
  }

  @media only screen and (max-width: 800px) {
    .container {
      justify-content: center;
    }

    .nav-item {
      margin-left: 20px;
      margin-right: 20px;
    }

    #main_link {
      margin-right: -15px;
    }
    .nav-item {
      margin-left: 25px;
      margin-right: 25px;
    }
  }

  @media only screen and (max-width: 600px) {
    a {
      font-size: 15px;
    }
    span {
      font-size: 20px;
      line-height: 25px;
    }
  }

  @media only screen and (max-width: 400px) {
    .nav-item {
      margin-left: 15px;
      margin-right: 15px;
    }

    #main_link {
      font-size: 16px;
    }

    a {
      font-size: 11px;
    }

    span {
      font-size: 15px;
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #bebebe;
  text-decoration: underline;
  text-decoration-color: #181f24;
  text-underline-offset: 5px;
  text-decoration-thickness: 4px;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 11px;
    margin-left: 0px;
  }
`

const StyledMainLink = styled(props => <Link {...props} />)`
  font-size: 22px;
  color: white;
`

export default Navbar
