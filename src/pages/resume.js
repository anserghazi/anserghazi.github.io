import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import "@fontsource/material-icons-outlined"
import "@fontsource/yantramanav"
import "../assets/css/global.css"

const resume = () => {
  return (
    <Layout>
      <Wrapper>
        <div class="section">
          <iframe
            src="https://drive.google.com/file/d/1CpWLn5SGxUwa9xDt-bOeWTiBLEIXJjkW/preview"
            allow="autoplay"
          ></iframe>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  margin-top: 7px;
  margin-bottom: 200px;
  .section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    height: 100vh;
  }

  .content {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 100vh;
    gap: 25px;
    height: 100vh;
  }

  .header {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-basis: 0;
    align-items: flex-start;
  }

  .welcome {
    display: inline;
    margin-bottom: 18px;
  }

  .welcome span {
    color: white;
    gap: 20px;
    font-size: 40px;
    margin-left: 10px;
  }

  h1 {
    font-family: "Yantramanav", sans-serif;
    font-size: 60px;
    font-weight: 700;
    color: white;
    display: inline;
  }

  p {
    font-family: "Yantramanav", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #bebebe;
    margin: 0px 0px 0px 0px;
  }

  .bottom_header {
    margin-top: 50px;
  }

  button {
    display: flex;
    padding: 15px 25px;
    justify-content: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #569c59;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #404a50;
    margin-top: 40px;
    width: 80%;
    font-family: "Yantramanav", sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: white;
    margin-left: 38px;
  }

  button:hover {
    background-color: #3e8e41;
  }

  button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #181f24;
    transform: translateY(4px);
  }

  .intro {
    font-weight: 600;
  }

  iframe {
    width: 95%;
    min-width: 100px;
    max-width: 1110px;
    border: none;
    height: 100vh;
  }

  @media only screen and (max-width: 2300px) {
    max-height: 1100px;
    height: 1100px;
    iframe {
      height: 1100px;
    }
  }

  @media only screen and (max-width: 1100px) {
    max-height: 1100px;
    height: 1100px;
    iframe {
      height: 1100px;
    }
    .content {
      min-width: 700px;
      max-width: 918px;
    }
  }

  @media only screen and (max-width: 800px) {
    .content {
      min-width: 100px;
      max-width: 800px;
      margin-left: 65px;
      margin-right: 65px;
    }
    max-height: 1000px;
    height: 1000px;
    iframe {
      height: 1000px;
    }
  }

  @media only screen and (max-width: 760px) {
    .content {
      margin-left: 30px;
      margin-right: 30px;
    }
  }

  @media only screen and (max-width: 670px) {
    max-height: 800px;
    height: 800px;
    iframe {
      height: 800px;
    }
  }

  @media only screen and (max-width: 580px) {
    max-height: 700px;
    height: 700px;
    iframe {
      height: 700px;
    }
  }

  @media only screen and (max-width: 490px) {
    max-height: 600px;
    height: 600px;
    iframe {
      height: 600px;
    }
  }

  @media only screen and (max-width: 420px) {
    max-height: 350px;
    height: 350px;
    iframe {
      height: 500px;
    }
  }

  @media only screen and (max-width: 320px) {
    .content {
      margin-left: 15px;
      margin-right: 15px;
    }

    h1 {
      font-size: 22px;
    }

    max-height: 270px;
    height: 270px;
    iframe {
      height: 400px;
    }
  }

  @media only screen and (max-width: 315px) {
    iframe {
      min-height: 380px;
    }
  }
`

export default resume
