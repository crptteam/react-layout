import React from "react";
import styled from "styled-components";

import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  box-sizing: border-box;
  background-color: ${props => props.background};
  color: ${props => props.color};
  padding-top: 23px;
  padding-bottom: 23px;
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
  display: table-cell;
`;

const InnerHeader = props => {
  const mergedHeader = innerMerge(
    {},
    defaultTheme.PageLayout.Header,
    (props.theme && props.theme.PageLayout && props.theme.PageLayout.Header) ||
      {}
  );

  const theme = getThemeAsPlainObjectByKeys(mergedHeader);

  return <Elem {...theme} {...props} />;
};

export default InnerHeader;
