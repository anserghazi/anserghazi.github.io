import React from "react"
import NavBar from "./Navbar"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <Page>
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
    </Page>
  )
}

const Page = styled.div`
  height: 100vh;
  background-color: #1e282e;
`

const Wrapper = styled.div`
  padding-top: 65px;
  width: 100%;
  background-color: #1e282e;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  overflow-x: hidden;
  min-height: 1300px;

  @media only screen and (max-width: 800px) {
    min-height: 1200px;
  }
  @media only screen and (max-width: 760px) {
    min-height: 1100px;
  }

  @media only screen and (max-width: 670px) {
    min-height: 1000px;
  }

  @media only screen and (max-width: 580px) {
    min-height: 900px;
  }

  @media only screen and (max-width: 490px) {
    min-height: 800px;
  }

  @media only screen and (max-width: 420px) {
    min-height: 650px;
  }

  @media only screen and (max-width: 320px) {
    min-height: 450px;
  }
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

  @media only screen and (max-width: 500px) {
    ul {
      gap: 30px;
    }
  }
`

export default Layout
