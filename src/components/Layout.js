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
            <li>Anser Ghazi</li>
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
  padding-top: 65px;
  width: 100%;
  background-color: #1e282e;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  overflow-x: hidden;
`

const Content = styled.div`
  position: relative;
  overflow: hidden;
`

const Footer = styled.div`
  margin-top: 80px;
  position: relative;
  width: 99%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 9vh;
  ul {
    display: flex;
    flex-flow: row nowrap;
    gap: 100px;
    padding-left: 0px;
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

  a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 520px) {
    min-height: 950px;
  }

  @media only screen and (max-width: 500px) {
    ul {
      gap: 30px;
    }
  }
`

export default Layout
