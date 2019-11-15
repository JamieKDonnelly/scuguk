// import React from 'react'
// import { Helmet } from 'react-helmet'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout/layout'

// export const AboutPageTemplate = ({

// }) => (
//   <main>   
//     <div className="container">
//       <h1>About Page</h1>
//       <section></section>
//       <section></section>
//     </div>    
//   </main>
// )

// AboutPageTemplate.propTypes = {
// }

// const AboutPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark
//   return (
//     <>
//       <Helmet>
//         <title>{frontmatter.meta.metaTitle}</title>
//         <meta name="description" content={frontmatter.meta.metaDescription} />
//         <meta name="robots" content="noindex, nofollow" />   
//       </Helmet>
//       <Layout>
//         <AboutPageTemplate />
//       </Layout>
//     </>
//   )
// }

// AboutPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default AboutPage

// export const pageQuery = graphql`
//   query AboutPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
//       frontmatter {
//         meta{
//           metaTitle
//           metaDescription
//         }
//       }
//     }
//   }
// `
