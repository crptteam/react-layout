import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";
import { COLORS } from "../constants";

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
  const mergedFooter = innerMerge(
    {},
    defaultTheme.PageLayout.Footer,
    (props.theme && props.theme.PageLayout && props.theme.PageLayout.Footer) ||
      {}
  );

  const theme = getThemeAsPlainTextByKeys(mergedFooter);

  return <Elem {...theme} {...props} />;
};

export default InnerFooter;
