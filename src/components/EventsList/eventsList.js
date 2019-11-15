import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

class EventsList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: menus } = data.allMarkdownRemark

    return (
      <>
        {menus && menus.map(({ node: menu }) => (
          <article className="theme__box theme__box--small menus" key={menu.id}>

            <section className="menus__hero">
              <div className="backgroundContainer">
                <BackgroundImage Tag="span"
                    fluid={menu.frontmatter.image.childImageSharp.fluid}
                ></BackgroundImage>
              </div>
            </section>           

            <section className="menus__content">
              <div className="container">  
                  <h2>
                    <Link to={menu.fields.slug}>
                      {menu.frontmatter.heading}
                    </Link>
                  </h2>
                <h3>{menu.frontmatter.description}</h3>
                <p className="menus__info"><span></span>{menu.frontmatter.additionalInfo}</p>  
                {menu.frontmatter.courses.map((course) => (
                  <div className="menuRoll__course" key={course.title}>
                    <h3>
                      {course.title}
                    </h3>       
                    <ul className="menuRoll__courseItems">
                      {course.courseItems.map((courseItem) => (
                        <li key={courseItem.title}>
                          {courseItem.title}
                        </li>                    
                      ))}
                    </ul>
                  </div>
                ))}
                <div className={`menus__fromPrice menus__showFromPrice--${menu.frontmatter.showFromPrice}`}>
                  <p><span>from</span> £{menu.frontmatter.fromPrice} <span>pp</span></p>
                </div> 

              </div>           
            </section> 

          </article>
        ))}
      </>
    )
  }

}

EventsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EventsListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "menu-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                heading
                description
                additionalInfo
                image {
                  childImageSharp {
                    fluid(maxWidth: 1080, quality: 75) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                  publicURL
                } 
                fromPrice
                showFromPrice
                courses{
                  title
                  courseItems{
                    title
                  }
                } 
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <MenuRoll data={data} count={count} />}
  />
)