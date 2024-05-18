import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  margin: 0 auto;
`;

const BlogContainer = ({ blogs }) => {
  console.log(blogs);
  return (
    <Container>
      {/* Map through the blogs array and render a BlogPost component for each item */}
      {blogs.data.map(blog => (
        <StyledLink to={`/blog/${blog.id}`} key={blog.id}>
          {/* Pass the blog data as props to the BlogPost component */}
          <BlogPost title={blog.attributes.blogTitle} desc={blog.attributes.blogDesc} img={blog.attributes.coverImg.data.attributes.url} content={blog.attributes.blogContent} />
        </StyledLink>
      ))}
    </Container>
  );
};

export default BlogContainer;
