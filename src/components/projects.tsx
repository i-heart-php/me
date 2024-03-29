/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={offset}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: {
              gridColumn: `-1/1`,
              color: `white !important`,
              fontFamily: `'Cutive Mono', monospace`,
              fontWeight: `900`,
              lineHeight: `.9;`,
              wordSpacing: ["-12px","-18px","-24px"],
              fontSize: [5, 6, 7],
              marginTop: ["14rem",0,0],
            },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="nodeJS" width={6} color="#3C873A" left="85%" top="75%" />
        <SVG icon="css3" width={8} color="#264de4" left="70%" top="20%" />
        <SVG icon="htm5" width={8} color="#F16529" left="25%" top="5%" />
        <SVG icon="php" hiddenMobile width={24} color="#8993be" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="mysql" hiddenMobile width={16} color="#F29111" left="20%" top="90%" />
        <SVG icon="htm5" width={12} color="#F16529" left="90%" top="30%" />
        <SVG icon="js" width={16} color="#F7DF1E" left="70%" top="90%" />
        <SVG icon="htm5" hiddenMobile width={16} color="#F16529" left="18%" top="75%" />
        <SVG icon="php" width={16} color="#8993be" left="75%" top="10%" />
        <SVG icon="css3" hiddenMobile width={8} color="#264de4" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="mysql" hiddenMobile width={24} color="#F29111" left="4%" top="20%" />
      <SVG icon="php" width={12} color="#8993be" left="80%" top="60%" />
      <SVG icon="nodeJS" width={6} color="#3C873A" left="10%" top="10%" />

      <SVG icon="js" width={8} color="#F7DF1E" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects
