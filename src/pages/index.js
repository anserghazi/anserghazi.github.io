import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import "@fontsource/material-icons-outlined"
import "@fontsource/yantramanav"

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <div class="section">
          <div class="content">
            <div class="header">
              <h1>Hey, I'm Anser</h1>
              <p>hii</p>
              <p>
                oad hsjodh sajkdh skah kjhsa kjhsk dhsakd sakd hjdh sakjdh
                skajdh ksajjds ah kjsh kjhsakd jhskd hksja hksaj hksjahd ksajhd
                kasjhd k
              </p>
            </div>
            <div class="header">
              <h1>Hey, I'm Anser</h1>
              <p>hii</p>
              <p>
                oad hsjodh sajkdh skah kjhsa kjhsk dhsakd sakd hsah sakjdh
                skajdh ksajhkjds ah kjsh kjhsakd jhskd hksja hksaj hksjahd
                ksajhd kasjhd k
              </p>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="content">
            <div class="header">
              <h1>Hey, I'm Anser</h1>
              <p>hii</p>
              <p>
                oad hsjodh sajkdh skah kjhsa kjhsk dhsakd sakd hsakjdh sakjdh
                skajdh ksajhkjds ah kjsh kjhsakd jhskd hksja hksaj hksjahd
                ksajhd kasjhd k
              </p>
            </div>
            <div class="header">
              <h1>Hey, I'm Anser</h1>
              <p>hii</p>
              <p>
                oad hsjodh sajkdh skah kjhsa kjhsk dhsakd sakd hsakjdh sakjdh
                skajdh ksajhkjds ah kjsh kjhsakd jhskd hksja hksaj hksjahd
                ksajhd kasjhd k
              </p>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="content">
            <div class="header">
              <h1>Hey, I'm Anser</h1>
              <p>hii</p>
              <p>
                oad hsjodh sajkdh skah kjhsa kjhsk dhsakd sakd hsakjdh sakjdh
                skajdh ksajhkjds ah kjsh kjhsakd jhskd hksja hksaj hksjahd
                ksajhd kasjhd k
              </p>
            </div>
            <div class="header">
              <h1>Hey, I'm Anser</h1>
              <p>hii</p>
              <p>
                oad hsjodh sajkdh skah kjhsa kjhsk dhsakd sakd hsak sakjdh
                skajdh ksajhkjds ah kjsh kjhsakd jhskd hksja hksaj hksjahd
                ksajhd kasjhd k
              </p>
            </div>
          </div>
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
  }

  .content {
    display: flex;
    min-width: 700px;
    max-width: 918px;
    border-style: solid;
    border-color: green;
  }

  .header {
    border-style: solid;
    border-color: yellow;
  }

  h1 {
    font-family: "Yantramanav", sans-serif;
    font-size: 60px;
    font-weight: 700;
    color: white;
    margin-bottom: 18px;
  }

  p {
    font-family: "Yantramanav", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #bebebe;
    margin: 0px 0px 0px 0px;
    border-style: solid;
    border-color: palegoldenrod;
  }
`
