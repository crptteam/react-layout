import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  display: table-cell;
  background-color: ${props => props.background};
  color: ${props => props.color};
  padding-top: 33px;
  padding-bottom: 45px;
  padding-left: 80px;
  padding-right: 80px;
  box-sizing: border-box;
`;

const InnerFooter = props => {

  const theme = getThemeAsPlainTextByKeys(props.theme && props.theme.Footer || defaultTheme.Footer);

  return <Elem {...theme} {...props} />;
};

export default InnerFooter;
