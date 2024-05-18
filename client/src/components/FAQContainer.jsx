// components/FAQContainer.js
import styled from 'styled-components';
import FAQItem from './FAQItem';

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const FAQContainer = () => {
  return (
    <Container>
      <h1>FAQs</h1> 
      <FAQItem />
      <FAQItem />
      <FAQItem />
      {/* Add more FAQItem components as needed */}
    </Container>
  );
};

export default FAQContainer;
