import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const OuterWrapper = styled.div`
  background: black;
  padding-top: 0;
  color: #fff;
  min-height: 100vh;
`;

const Container = styled.div`
  margin 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  a {
    color: #fff;
  }
`;

const About = () => (
  <OuterWrapper>
    <Layout>
      <Container>
        <h1>About</h1>
        <p>Welcome to the About page.</p>
      </Container>
    </Layout>
  </OuterWrapper>   
)

export default About
