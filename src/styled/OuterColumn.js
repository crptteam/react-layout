import React from 'react';
import styled from 'styled-components';

const Elem = styled.div`
  padding-left: ${props =>
    props.first ? '0' : props.gutter ? +props.gutter / 2 + 'px' : 0};
  padding-right: ${props =>
    props.last ? '0' : props.gutter ? +props.gutter / 2 + 'px' : 0};
  zoom: 1;
  js-display: flex;
  display: flex;
  width: ${props => (props.col ? 100 / 24 * +props.col + '%' : 'auto')};
  max-width: ${props => (props.col ? 100 / 24 * +props.col + '%' : 'auto')};
  flex-grow: 1;
  box-sizing: border-box;
  flex-basis: ${props => (props.col ? 'auto' : 0)};
`;

const OuterColumn = props => {
  return <Elem {...props} />;
};

export default OuterColumn;
