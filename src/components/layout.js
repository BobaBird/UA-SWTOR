import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <html lang="en" />
        </Helmet>
        <Header siteTitle="Unholy Alliance and Wookiee Mistake Guilds, SWTOR Satele Shan Server" />
        <div
          style={{
            // margin: '0 auto',
            // maxWidth: 960,
            // padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
