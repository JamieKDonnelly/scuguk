import React from 'react'
import { Helmet } from "react-helmet"
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout/layout'
import PageHero from '../../components/PageHero/pageHero'

export const ThanksPageTemplate = ({
  heroImage
}) => (
  <>
    <PageHero Title="Thanks!" Image={heroImage} />
    <div className="pageContent pageContent__noAnimate contact">  
      <div className="pageContent__inner">         
        <div className="theme__box theme__box--small">
          <div className="container">
            <div className="content">
              <h2>Success!</h2>
              <p>Thanks for submitting the Contact Form, we've got your details and will be in touch soon!</p>
              <Link className="btn" to="/">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
 )

const ThanksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>    
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thanks</title>
        <meta name="description" content="Thanks for getting in touch" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Layout>
        <ThanksPageTemplate heroImage={frontmatter.heroImage} />
      </Layout>
    </>
  )
}

export default ThanksPage

// export const pageQuery = graphql`
//   query ThanksPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
//       frontmatter {
//         heroImage {
//           childImageSharp {
//             fluid(maxWidth: 1080, quality: 80) {
//               ...GatsbyImageSharpFluid_withWebp_noBase64
//             }
//           }
//         } 
//       }
//     }
//   }
// `