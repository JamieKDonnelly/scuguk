import React from 'react'
import { Helmet } from "react-helmet"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'

export const IndexPageTemplate = ({
  heroImage,
  heading,
  intro
}) => (
  <>
    <section className="hero" style={{backgroundImage: `url(${heroImage})`}}>
    </section>
    <main>
      <section className="theme__box theme__box--small">
        <div className="container">
          <h1>{heading}</h1>
          <p>{intro}</p>
        </div>
      </section> 
      <section className="theme__box">
        <div className="container">
          <h1>{heading}</h1>
          <p>{intro}</p>
        </div>
      </section> 
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
