import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Comments from '../components/Comments';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#F8F6F0;
  min-height: 100vh; /* Ensure the container spans the entire viewport height */
`;
const Wrapper = styled.div`
  max-width: 50%;
  margin: auto; /* Center the wrapper horizontally */
  flex: 1; /* Ensure the content takes up remaining vertical space */
`;
const CoverImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 40px;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin: 3rem 0;
`;
const Desc = styled.h3`
  font-size: 1.5rem;
`;
const Content = styled.p`
  font-size: 1.3rem;
  margin: 3rem 0;
`;

const BlogContentPage = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(`http://localhost:1337/api/blogs/${id}?populate=*`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching blog data. Please try again later.</p>;

  // Access the nested data object
  const blogData = data.data || {};

  // Destructure the blog data
  const { blogTitle, blogDesc, blogContent } = blogData.attributes || {};
  const { url } = blogData.attributes.coverImg.data.attributes || {};

  return (
    <Container>
      <Header />
      <Wrapper>
        {url && <CoverImage src={`http://localhost:1337`+url} alt="Cover Image" />}
        <Title>{blogTitle}</Title>
        <Desc>{blogDesc}</Desc>
        {blogContent && blogContent.map((paragraph, index) => (
          <Content key={index}>{paragraph.children[0].text}</Content>
        ))}
        <Comments />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default BlogContentPage;
