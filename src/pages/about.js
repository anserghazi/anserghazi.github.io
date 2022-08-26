import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/material-icons-outlined"
import "@fontsource/yantramanav"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div class="section">
          <div class="content">
            <div class="header">
              <h1>About Me</h1>
              <p>hii</p>
              <p>
                oad hsjodh sajkdh skah kjhsa kjhsk dhsakd sakd hsakjdh sakjdh
                skajdh ksajhkjds ah kjsh kjhsakd jhskd hksja hksaj hksjahd
                ksajhd kasjhd k
              </p>
            </div>
            <div class="header">
              <div class="photo">
                <StaticImage
                  src="../assets/images/background3.jfif"
                  width={800}
                />
              </div>
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
                oad hsjodh sajkdh skah kjhsa kjhsk dhsakd sakd hsakjdh sakjdh
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
  }

  .header {
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
  }

  .photo {
    margin-top: 50px;
  }
`

export default about
