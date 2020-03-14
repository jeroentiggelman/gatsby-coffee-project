import React from "react"
import { graphql } from "gatsby"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from '../components/home/Info'
import { Menu } from '../components/home/Menu'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Regular Joe's"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq:
    "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu: allContentfulCoffeeItem {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image {
          fixed (width: 50, height: 50) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
}
`

export default IndexPage
