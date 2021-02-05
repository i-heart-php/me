/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
        <InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `100%`, height: `40vh` } }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="css3" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="htm5" width={8} stroke color="#F16529" left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="htm5" width={12} stroke color="icon_darkest" left="95%" top="50%" />
        <SVG icon="php" width={6} color="#8993be" left="85%" top="15%" />
        <SVG icon="css3" hiddenMobile width={12} color="#264de4" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="php" width={6} color="#8993be" left="4%" top="20%" />
      <SVG icon="reactJS" width={24} color="#61DBFB" left="70%" top="60%" />
      <SVG icon="nodeJS" width={12} color="#3C873A" left="20%" top="30%" />
      <SVG icon="wordpress" width={8} stroke color="#00749C" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Contact
