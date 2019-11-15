// import React from 'react'
// import { Helmet } from 'react-helmet'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout/layout'

// export const WorkPageTemplate = () => (
//   <main>
//     <div className="container">
//       <h1>Work Page</h1>
//       <section></section>
//       <section></section>
//     </div>    
//   </main>
// )

// WorkPageTemplate.propTypes = {
// }

// const WorkPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark
//   return (
//     <>
//       <Helmet>
//         <title>{frontmatter.meta.metaTitle}</title>
//         <meta name="description" content={frontmatter.meta.metaDescription} />
//         <meta name="robots" content="noindex, nofollow" />   
//       </Helmet>
//       <Layout>
//         <WorkPageTemplate />
//       </Layout>
//     </>
//   )
// }

// WorkPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default WorkPage

// export const pageQuery = graphql`
//   query WorkPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "work-page" } }) {
//       frontmatter {
//         meta{
//           metaTitle
//           metaDescription
//         }
//       }
//     }
//   }
// `
