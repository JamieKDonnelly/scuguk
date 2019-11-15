import React from 'react'
import { Helmet } from "react-helmet"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'

export const IndexPageTemplate = ({
  heading,
  intro
}) => (
  <>
    <section>
      <div class="container">
        <h1>{heading}</h1>
        <p>{intro}</p>        
      </div>
    </section>  
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
          subTitle={frontmatter.heading}
        />
      </Layout>
    </>
  )
}

IndexPageTemplate.propTypes = {
  intro: PropTypes.string,
  heading: PropTypes.string,  
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
        intro
        heading
      }
    }
  }
`
