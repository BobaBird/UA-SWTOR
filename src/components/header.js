import React from 'react';
import { Link } from 'gatsby';
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About/">About</Link>
          </li>
          <li>
            <Link to="/Calendar/">Calendar</Link>
          </li>
          <li>
            <Link to="/Forums/">Forums</Link>
          </li>
          <li>
            <Link to="/Discord/">Discord</Link>
          </li>
          <li>
            <Link to="/Extra-Life/">Extra Life</Link>
          </li>
          <li>
            <Link to="/Gallery/">Gallery</Link>
          </li>
          <li>
            <Link to="/Elder-Scrolls/">Elder Scrolls</Link>
          </li>
        </ul>

    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
