import React from "react"
import { graphql } from "gatsby"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from '../components/home/Info'
import { Menu } from '../components/home/Menu'
import Products  from '../components/home/Products'
import Contact  from '../components/home/Contact'

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
    <Products />
    <Contact />
  </Layout>
)

// GatsbyContentfulFixed_tracedSVG is broken in Netlify
// see https://stackoverflow.com/questions/58974472/gatsby-contentful-netlify-how-to-render-tracedsvg-images-in-production
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
