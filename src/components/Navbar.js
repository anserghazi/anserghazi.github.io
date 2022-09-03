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
    if (aboutIcon.textContent == "import_contacts" || path === "resume") {
      aboutIcon.textContent = "auto_stories"
      aboutIcon.style.color = "#FFA500"
      aboutLink.style.color = "#FFA500"
      aboutLink.style.textDecoration = "underline"
      aboutLink.style.textDecorationColor = "#FFA500"
      aboutLink.style.textUnderlineOffset = "5px"
      aboutLink.style.textDecorationThickness = "4px"
    } else {
      aboutIcon.textContent = "import_contacts"
      aboutIcon.style.color = "white"
      aboutLink.style.color = "white"
      aboutLink.style.textDecoration = "none"
    }
  }
  function changeProjects() {
    let projectsIcon = document.getElementById("projects_icon")
    let projectsLink = document.getElementById("projects_link")
    if (projectsIcon.textContent == "terminal" || path === "projects") {
      projectsIcon.textContent = "data_object"
      projectsIcon.style.color = "#FFA500"
      projectsLink.style.color = "#FFA500"
      projectsLink.style.textDecorationColor = "#FFA500"
      projectsLink.style.textUnderlineOffset = "5px"
      projectsLink.style.textDecorationThickness = "4px"
    } else {
      projectsIcon.textContent = "terminal"
      projectsIcon.style.color = "white"
      projectsLink.style.color = "white"
      projectsLink.style.textDecorationColor = "#181f24"
    }
  }
  function changeGithub() {
    let githubIcon = document.getElementById("github_icon")
    let githubLink = document.getElementById("github_link")
    if (githubIcon.textContent == "tv") {
      githubIcon.textContent = "display_settings"
      githubIcon.style.color = "#FFA500"
      githubLink.style.color = "#FFA500"
      githubLink.style.textDecorationColor = "#FFA500"
      githubLink.style.textUnderlineOffset = "5px"
      githubLink.style.textDecorationThickness = "4px"
    } else {
      githubIcon.textContent = "tv"
      githubIcon.style.color = "white"
      githubLink.style.color = "white"
      githubLink.style.textDecorationColor = "#181f24"
    }
  }

  return (
    <Wrapper>
      <section className="navigation">
        <div className="container">
          <div className="nav-group">
            <div className="nav-item">
              <StyledMainLink id="main_link" to="/">
                Anser Ghazi
              </StyledMainLink>
              <StyledMainLink id="mini_main_link" to="/">
                AG
              </StyledMainLink>
            </div>
          </div>
          <div className="nav-group">
            <div className="nav-item" id="about_nav">
              <span
                class="material-icons"
                id="about_icon"
                onMouseOver={() => changeAbout()}
                onMouseLeave={() => changeAbout()}
              >
                import_contacts
              </span>

              <StyledLink
                to="/resume"
                id="about_me_link"
                onMouseOver={() => changeAbout()}
                onMouseLeave={() => changeAbout()}
              >
                Resume
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
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .navigation {
    width: 100%;
    padding: 5px;
    z-index: 5;
    background-color: #181f24;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 7%;
    min-height: 65px;
    max-height: 69px;
    overflow-x: hidden;
  }

  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    min-width: 1150px;
  }

  .nav-group {
    display: flex;
    gap: 40px;
  }

  .nav-item {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-self: center;
    font-size: 20px;
  }

  a {
    color: white;
    font-family: "Yantramanav", sans-serif;
    text-decoration: underline;
    text-decoration-color: #181f24;
    text-underline-offset: 5px;
    text-decoration-thickness: 4px;
    font-weight: 600;
    line-height: 28px;
    margin-left: 3px;
    margin-right: 10px;
  }
  span {
    color: white;
  }

  #mini_main_link {
    display: none;
    font-size: 28px;
    font-weight: 800;
    color: white;
    margin-left: 20px;
    margin-right: 0px;
    &:hover {
      color: #ffa500;
    }
    &:after {
    }
    &:active {
      font-weight: 800;
    }
  }

  #main_link {
    font-size: 28px;
    font-weight: 800;
    color: white;
    margin-left: 20px;
    margin-right: 400px;
    &:hover {
      color: #ffa500;
    }
    &:after {
    }
    &:active {
      font-weight: 800;
    }
  }

  #projects_icon {
    margin-right: 1px;
  }

  #about_me_link {
    color: white;
    text-decoration-color: #181f24;
    margin-left: 4px;
  }

  #about_icon {
    line-height: 25px;
    margin-right: -1px;
    color: white;
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
      text-decoration-color: #ffa500;
      text-underline-offset: 5px;
      text-decoration-thickness: 4px;
    }
  }

  #github_link {
    margin-right: 30px;
  }

  @media only screen and (max-width: 1150px) {
    .container {
      max-width: none;
      min-width: 100px;
      width: 100%;
      margin-right: 0;
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 970px) {
    #main_link {
      margin-right: 40px;
    }
  }

  @media only screen and (max-width: 680px) {
    a {
      font-size: 18px;
    }

    #about_me_link {
      font-size: 18px;
    }

    #projects_link {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 620px) {
    .nav-group {
      gap: 5px;
    }
  }

  @media only screen and (max-width: 620px) {
    .material-icons {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    #main_link {
      display: none;
    }
    #mini_main_link {
      display: flex;
    }
  }

  @media only screen and (max-width: 370px) {
    #about_me_link {
      font-size: 15px;
    }

    #projects_link {
      font-size: 15px;
    }

    a {
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
