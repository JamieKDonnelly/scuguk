import React from 'react'
import { Helmet } from "react-helmet"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import PageHero from '../components/PageHero/pageHero'
import NewsletterForm from '../components/NewsletterForm/newsletterForm'

export const NewsletterPageTemplate = ({
  heading,
  description
}) => (
  <>
    <PageHero heading={heading} theme={"green"} small={true}/>    
    <main>   
      <div className="container">
        <div className="theme__box theme__box--small theme__box--white">
          <NewsletterForm />
        </div>
      </div>            
    </main>
  </>
)

NewsletterPageTemplate.propTypes = {
    heading: PropTypes.string,  
    description: PropTypes.string
}

const NewsletterPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.meta.metaTitle}</title>
        <meta name="description" content={frontmatter.meta.metaDescription} />
      </Helmet>
      <Layout>
        <NewsletterPageTemplate
          heading={frontmatter.heading}
          description={frontmatter.description}
        />
      </Layout>
    </>
  )
}

NewsletterPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NewsletterPage

export const pageQuery = graphql`
  query NewsletterPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "newsletter-page" } }) {
      frontmatter {
        heading
        description
        meta{
          metaTitle
          metaDescription
        }
      }      
    }
  }
`