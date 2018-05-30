import React from 'react';
import styled from 'styled-components';

const Elem = styled.div`
  position: relative;
  height: auto;
  zoom: 1;
  js-display: flex;
  display: flex;
  box-sizing: border-box;
  align-items: ${props => (props.justify ? props.justify : 'flex-start')};
  justify-content: stretch;
  width: ${props => (props.fillWidth ? '100%' : 'auto')};
`;

const OuterContainer = props => {
  return <Elem {...props} />;
};

export default OuterContainer;
