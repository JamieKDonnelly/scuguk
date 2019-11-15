// import React from 'react'
// import { Helmet } from "react-helmet"
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout/layout'
// import PageHero from '../components/PageHero/pageHero'

// export const EventPageTemplate = ({
//   heading,
//   description,  
//   additionalInfo,
//   image,
//   courses,
//   fromPrice,
//   showFromPrice
// }) => {
//   return (
//     <> 
//       <PageHero Title={heading} Image={image} />
//       <div className="pageContent pageContent__noAnimate menuSingle">
//         <div className="pageContent__inner"> 

//           <article className="theme__box theme__box--small">
            
//             <section className="container">   
//               <h3>{description}</h3>
//               <p className="menus__info"><span></span>{additionalInfo}</p>
//               {courses.map((course) => (
//                 <div className="menuRoll__course" key={course.title}>
//                   <h3>{course.title}</h3>       
//                   <ul className="menuRoll__courseItems">
//                     {course.courseItems.map((courseItem) => (
//                       <li key={courseItem.title}>{courseItem.title}</li>                    
//                     ))}
//                   </ul>       
//                 </div>
//               ))}
//             </section>

//             <div className={`menus__fromPrice menus__showFromPrice--${showFromPrice}`}>
//               <p><span>from</span> £{fromPrice} <span>pp</span></p>
//             </div>  

//           </article>
          
//         </div>
//       </div> 
//     </>
//   )
// }

// EventPageTemplate.propTypes = {
//   heading: PropTypes.string,
//   description: PropTypes.string,  
//   additionalInfo: PropTypes.string,
//   image: PropTypes.object,
//   course: PropTypes.object,
//   fromPrice: PropTypes.number,
//   showFromPrice: PropTypes.bool,
// }

// const Event = ({ data }) => {
//   const { markdownRemark: menu } = data

//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>{menu.frontmatter.meta.metaTitle}</title>
//         <meta name="description" content={menu.frontmatter.meta.metaDescription} />
//       </Helmet>
//       <Layout>
//         <EventPageTemplate
//           heading={menu.frontmatter.heading}
//           description={menu.frontmatter.description}
//           additionalInfo={menu.frontmatter.additionalInfo}
//           image={menu.frontmatter.image}          
//           courses={menu.frontmatter.courses}    
//           fromPrice={menu.frontmatter.fromPrice}   
//           showFromPrice={menu.frontmatter.showFromPrice}    
//         />
//       </Layout>
//     </>
    
//   )
// }

// Event.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// }

// export default Event

// export const pageQuery = graphql`
//   query EventByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         heading
//         description
//         additionalInfo
//         image {
//           childImageSharp {
//             fluid(maxWidth: 1080, quality: 80) {
//               ...GatsbyImageSharpFluid_withWebp_noBase64
//             }
//           }
//           publicURL
//         }
//         fromPrice
//         showFromPrice
//         courses{
//           title
//           courseItems{
//             title
//           }
//         } 
//         meta{
//           metaTitle
//           metaDescription
//         }
//       }
//     }
//   }
// `