// import React from 'react'
// import { Helmet } from "react-helmet"
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout/layout'
// import PageHero from '../components/PageHero/pageHero'

// export const ContactPageTemplate = ({
//   heroImage,
//   heading,
//   description
// }) => (
//   <>
//     <PageHero Title={title} Image={heroImage}/>
//     <div className="pageContent pageContent__noAnimate contact">  
//       <div className="pageContent__inner">         
//         <div className="theme__box theme__box--small">
//             < ContactForm />
//         </div>
//       </div>
//     </div>
//   </>
//  )

// const ContactPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{frontmatter.meta.metaTitle}</title>
//         <meta name="description" content={frontmatter.meta.metaDescription} />
//       </Helmet>
//       <Layout>
//         <ContactPageTemplate
//           heroImage={frontmatter.heroImage}
//           heading={frontmatter.heading}
//           description={frontmatter.description}
//         />
//       </Layout>
//     </>
//   )
// }

// ContactPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default ContactPage

// export const pageQuery = graphql`
//   query ContactPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
//       frontmatter {
//         heading
//         description
//         heroImage {
//             childImageSharp {
//               fluid(maxWidth: 1080, quality: 80) {
//                 ...GatsbyImageSharpFluid_withWebp_noBase64
//               }
//             }
//         }
//         meta{
//           metaTitle
//           metaDescription
//         }
//       }      
//     }
//   }
// `