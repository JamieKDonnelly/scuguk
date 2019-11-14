import React from 'react'
import { Helmet } from "react-helmet"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

export const ContactPageTemplate = ({
  heroImage,
  title,
  description,
  landlineNumber,
  mobileNumber,
  email
}) => (
  <>
    <PageHero Title={title} Image={heroImage}/>
    <div className="pageContent pageContent__noAnimate contact">  
      <div className="pageContent__inner">         
        <div className="theme__box theme__box--small">
          <div className="container"> 
            <section>
              <p>{description}</p>
              <ul>
                <li>
                  <h3>Phone</h3>
                  <ul>
                    <li>
                        <a href={`tel:${landlineNumber}`}>{landlineNumber}</a>
                    </li>
                    <li>
                      <a href={`tel:${mobileNumber}`}>{mobileNumber}</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>Email</h3> 
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              </ul>
            </section>
            < ContactForm />
          </div>
        </div>
      </div>
    </div>
  </>
 )

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.meta.metaTitle}</title>
        <meta name="description" content={frontmatter.meta.metaDescription} />
      </Helmet>
      <Layout>
        <ContactPageTemplate
          heroImage={frontmatter.heroImage}
          title={frontmatter.title}
          description={frontmatter.description}
          landlineNumber={frontmatter.landlineNumber}
          mobileNumber={frontmatter.mobileNumber}
          email={frontmatter.email}
        />
      </Layout>
    </>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        title
        description
        landlineNumber
        mobileNumber
        email
        meta{
          metaTitle
          metaDescription
        }
      }      
    }
  }
`