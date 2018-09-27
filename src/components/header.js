import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #4d4d4d;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  // padding: 1.45rem 1.0875rem;
  padding: 1rem 0 0;
  h1 {
    font-weight: 200;
    font-size: 1.7rem;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 30px;
    list-style: none;
    li {
      margin-left: 40px;
      a {
        text-decoration: none;
        justify-content: center;
        color: orange;
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper
    
  >
    <HeaderContainer
      
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>

      <ul>
          <li>
            <Link to="/About/">Go to About page</Link>
          </li>
          <li>
            <Link to="/Calendar/">Go to Calendar page</Link>
          </li>
          <li>
            <Link to="/Forums/">Go to Forums page</Link>
          </li>
          <li>
            <Link to="/Discord/">Go to Discord page</Link>
          </li>
          <li>
            <Link to="/Extra-Life/">Go to Extra life page</Link>
          </li>
          <li>
            <Link to="/Gallery/">Go to Gallery page</Link>
          </li>
          <li>
            <Link to="/Elder-Scrolls/">Go to Elder Scrolls page</Link>
          </li>
        </ul>

    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
