/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        p: {
          fontFamily: `Raleway`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
        ".Typist": {
          fontFamily: `'Cutive Mono', monospace`,
          fontWeight: `900`,
          fontSize: `4.75rem`,
          lineHeight: `.9;`,
          wordSpacing: "-24px"
        },

      })}
    />
    <SEO />
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
