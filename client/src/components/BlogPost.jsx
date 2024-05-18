import React, { useState } from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Article = styled.article`
  margin: 1rem;
  max-width: 500px;
  height: auto; /* Set height to auto to allow content to adjust */
  border: 0px solid black;
  padding: 10px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden; /* Hide overflow content */
  max-height: calc(350px - 40px); /* Adjust the height to accommodate the Engagement component */
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1``;

const Content = styled.p``;

const Engagement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px; /* Height of the engagement container */
  background-color: #E8DFCA; /* Adjust as needed */
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  padding-top: 5px;
`;

const ExpandLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 800;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
`;

const BlogPost = ({ title, desc, img, content }) => {
  // Hardcoded author, date, views, likes, and comments
  const date = 'April 21, 2024';
  const views = '1.2K';
  const likes = '250';
  const comments = '45';

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const displayParagraphs = expanded ? content.length : 2;

  return (
    <Article>
      <AvatarContainer>
        <span>{date}</span>
      </AvatarContainer>
      <Title>{title}</Title>
      <Content>{desc}</Content>
      {/* Render the blog content */}
      {content.slice(0, displayParagraphs).map((paragraph, index) => (
        <Content key={index}>{paragraph.children[0].text}</Content>
      ))}
      {!expanded && (
        <ExpandLink onClick={toggleExpanded}></ExpandLink>
      )}
      <Engagement>
        <div>
          <Span>{views} views</Span>
        </div>
        <div>
          <Span>{likes} <FavoriteBorderIcon /></Span>
        </div>
        <div>
          <Span>{comments} comments</Span>
        </div>
      </Engagement>
    </Article>
  );
};

export default BlogPost;
