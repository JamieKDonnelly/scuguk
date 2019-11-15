import React from 'react'
import { Helmet } from "react-helmet"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import Hero from '../components/PageHero/pageHero'
import Box from '../components/Box/box'

export const IndexPageTemplate = ({
  heroImage,
  heading,
  intro
}) => (
  <>
    <Hero heroImage={heroImage} heading={heading} />
    <main>      
      <Box />
      <Box />
    </main>
  </>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <Helmet>
        <title>{frontmatter.meta.metaTitle}</title>
        <meta name="description" content={frontmatter.meta.metaDescription} />
      </Helmet>
      <Layout>
        <IndexPageTemplate
          intro={frontmatter.intro}
          heading={frontmatter.heading}
          heroImage={frontmatter.heroImage}
        />
      </Layout>
    </>
  )
}

IndexPageTemplate.propTypes = {
  intro: PropTypes.string,
  heading: PropTypes.string,  
  heroImage: PropTypes.string
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        meta{
          metaTitle
          metaDescription
        }
        heroImage
        intro
        heading
      }
    }
  }
`
