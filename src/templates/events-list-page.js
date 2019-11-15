// import React from 'react'
// import { Helmet } from "react-helmet"
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout/layout'
// import PageHero from '../components/PageHero/pageHero'
// import MenuRoll from '../components/EventsList/eventsList'

// export const EventsListPageTemplate = ({
//   heroImage,
//   heading
// }) => (
//   <>
//     <PageHero Title={heading} Image={heroImage}/> 
//     <div className="pageContent pageContent__noAnimate">
//       <div className="pageContent__inner"> 
//         <MenuRoll />    
//       </div> 
//     </div> 
//   </>
// )


// const EventsListPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark
//   return (
//     <>    
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{frontmatter.meta.metaTitle}</title>
//         <meta name="description" content={frontmatter.meta.metaDescription} />
//       </Helmet>
//       <Layout>
//         <EventsListPageTemplate
//           heroImage={frontmatter.heroImage}
//           heading={frontmatter.heading}
//         />
//       </Layout>
//     </>
//   )
// }

// EventsListPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default EventsListPage

// export const pageQuery = graphql`
//   query EventsListPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "all-menus-page" } }) {
//       frontmatter {
//         heroImage {
//           childImageSharp {
//             fluid(maxWidth: 1080, quality: 80) {
//               ...GatsbyImageSharpFluid_withWebp_noBase64
//             }
//           }
//         } 
//         heading
//         meta{
//           metaTitle
//           metaDescription
//         }
//       }
//     }
//   }
// `