import React from 'react';
import styled from 'styled-components';
import BlogContainer from '../components/BlogContainer';
import FAQContainer from '../components/FAQContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F8F6F0;
  width: 100%;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
`;

const Home = ({blogs}) => {
    
  return (
    <Container>
      <Header />
      <Main>
        <BlogContainer blogs={blogs}/>
        <FAQContainer />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
