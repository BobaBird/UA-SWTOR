import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const OuterWrapper = styled.div`
  background: black;
  min-height: 100vh;
  padding-top: 0;
  color: #fff;
`;

const Container = styled.div`
  margin 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  a {
    color: #fff;
  }
`;

const Discord = () => (
  <OuterWrapper>
    <Layout>
      <Container>
        <h1>Discord</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Container>
    </Layout>
  </OuterWrapper>
)

export default Discord
