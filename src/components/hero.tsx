/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="htm5" hiddenMobile width={48} stroke color="#F16529" left="10%" top="20%" />
        <SVG icon="wordpress" width={48} stroke color="#00749C" left="60%" top="70%" />
        <SVG icon="nodeJS" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="mysql" hiddenMobile width={16} color="#F29111" left="80%" top="10%" />
        <SVG icon="htm5" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="php" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="htm5" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="reactJS" width={16} stroke color="#61DBFB" left="28%" top="15%" />
        <SVG icon="php" width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon="css3" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="php" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="php" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="php" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="css3" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="css3" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="htm5" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="php" width={64} color="#8993be" left="90%" top="5%" />
      <SVG icon="nodeJS" hiddenMobile width={64} color="#3C873A" left="5%" top="90%" />
      <SVG icon="nodeJS" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="nodeJS" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="wordpress" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="wordpress" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero
