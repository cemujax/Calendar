import React from 'react';
import styled from 'styled-components/macro';

const PageTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  min-width: 968px;
  width: 95%;
  margin: 0 auto;
`;

export default PageTemplate;
