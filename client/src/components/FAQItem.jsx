import { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AccordionTrigger = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid grey;
  
`;

const AccordionContent = styled.div`
  font-size: 1rem;
  margin:  0.5rem;
  color: #6b7280;
  display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};
`;

const FAQItem = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleAccordion = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTrigger onClick={toggleAccordion}>
        <p>What is serverless architecture?</p>
        <KeyboardArrowDownIcon sx={{ padding: '1rem' }} onClick={toggleAccordion} />
      </AccordionTrigger>
      <AccordionContent collapsed={collapsed}>
        Serverless architecture is a cloud-computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. Developers can build and run applications and services without the need to manage infrastructure.
      </AccordionContent>
    </div>
  );
};

export default FAQItem;
