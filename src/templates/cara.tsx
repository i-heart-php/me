import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={7}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={3.5} />
      <About offset={5} factor={1} />
      <Contact offset={6} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
