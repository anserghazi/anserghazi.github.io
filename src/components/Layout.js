import React from "react"
import NavBar from "./Navbar"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Content>{children}</Content>
        <Footer>
          <ul>
            <li>Made by Anser Ghazi</li>
            <li>
              <a
                href="https://github.com/anserghazi"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Gatsby
              </a>
            </li>
          </ul>
        </Footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  background-color: #253037;
  z-index: 1;
  overflow-x: hidden;
`

const Content = styled.div`
  position: relative;
`

const Footer = styled.div`
  position: relative;
  width: 100%;

  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }

  li {
    display: flex;
    height: 30px;
  }

  a,
  li {
    color: #bebebe;
    text-decoration: none;
    font-family: "Noto Sans", sans-serif;
  }
`

export default Layout
