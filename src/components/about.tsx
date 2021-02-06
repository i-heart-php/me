/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="nodeJS" hiddenMobile width={6} color="#3C873A" left="50%" top="75%" />
        <SVG icon="css3" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="htm5" width={8} color="#F16529" left="25%" top="5%" />
        <SVG icon="css3" hiddenMobile width={24} color="#264de4" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="wordpress" hiddenMobile width={16} color="#00749C" left="5%" top="80%" />
        <SVG icon="js" width={12} color="#F7DF1E" left="90%" top="50%" />
        <SVG icon="mysql" hiddenMobile width={12} color="#F29111" left="85%" top="15%" />
        <SVG icon="reactJS" hiddenMobile width={16} color="#61DBFB" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="php" hiddenMobile width={16} color="#8993be" left="4%" top="20%" />
      <SVG icon="nodeJS" width={6} color="#3C873A" left="10%" top="10%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner className="about-section">
        <div sx={{
          h2: {
            fontFamily: `'Cutive Mono', monospace`,
            fontWeight: `900`,
            lineHeight: `.9;`,
            wordSpacing: ["-12px","-18px","-24px"],
            marginTop: ["28rem",0,0],
            fontSize: [5, 6, 7],
          },
        }}>
        <AboutMDX />
        </div>
      </Inner>
    </Content>
  </div>
)

export default About
