import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  background-color: #E8DFCA;
  margin-top: 40px;
  justify-content: center;
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
`;



const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        &copy; 2024 Acme Inc. All rights reserved.
      </Copyright>
      
    </FooterContainer>
  );
};

export default Footer;
