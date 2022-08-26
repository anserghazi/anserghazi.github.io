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
          <div />
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
          <div />
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
  display: flex;
  flex-flow: column nowrap;
`

const Content = styled.div`
  position: relative;
`

const Footer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  ul {
    display: flex;
    flex-flow: row nowrap;
  }

  li {
    display: flex;
    height: 30px;
    margin: 0px 40px 0px 40px;
  }

  a,
  li {
    color: #bebebe;
    text-decoration: none;
    font-family: "Noto Sans", sans-serif;
  }

  a:hover {
    text-decoration: underline;
  }
`

export default Layout
