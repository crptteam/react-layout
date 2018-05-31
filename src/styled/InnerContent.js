import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';
import {COLORS} from '../constants';

const Elem = styled.div`
  display: table-cell;
  height: auto;
  box-sizing: border-box;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 26px;
  padding-top: 33px;
  background-color: ${props => props.background};
  color: ${props => props.colored};
`;

const InnerContent = props => {
  const theme = getThemeAsPlainTextByKeys(
    (props.theme && props.theme.Content) || defaultTheme.Content,
    props.colored ? props.colored : COLORS.default
  );

  return <Elem {...theme} {...props} />;
};

export default InnerContent;
