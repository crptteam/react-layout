import React from 'react';
import styled from 'styled-components';

const OuterContent = styled.div`
  display: table-row;
  height: ${props => (props.filled ? '100%' : 'auto')};
`;

export default OuterContent;
