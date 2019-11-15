// import React from 'react'
// import { Helmet } from "react-helmet"
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout/layout'

// export const SponsorsPageTemplate = ({

// }) => (
//   <>
//     <main>
//       <section>

//       </section>
//       <section>
        
//       </section>
//     </main>   
//   </>
// )

// SponsorsPageTemplate.propTypes = {
// }

// const SponsorsPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark
//   return (
//     <>
//       <Helmet>
//         <title>{frontmatter.meta.metaTitle}</title>
//         <meta name="description" content={frontmatter.meta.metaDescription} />
//       </Helmet>
//       <Layout>
//         <SponsorsPageTemplate />
//       </Layout>
//     </>
//   )
// }

// SponsorsPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default SponsorsPage

// export const pageQuery = graphql`
//   query SponsorsPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         meta{
//           metaTitle
//           metaDescription
//         }
//       }
//     }
//   }
// `
