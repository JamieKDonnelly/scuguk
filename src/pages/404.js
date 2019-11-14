import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'

export const NotFoundPageTemplate = ({}) => (
  <>
    <h2><span role="img" aria-label="Thinking face emoji">🤔</span></h2>
    <p>We couldn't cook up a page for the URL you entered!</p>
    <p>Please check the URL, or use the menu to find the page you're after.</p>
    <Link className="btn" to="/">
      Back to home
    </Link>
  </>
 )

const NotFoundPage = ({}) => {
  return (
    <>   
      <Helmet>
        <meta charSet="utf-8" />
        <title>404</title>
        <meta name="description" content="This is the 404 page" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Layout>
        <NotFoundPageTemplate />
      </Layout>
    </>
  )
}

export default NotFoundPage
