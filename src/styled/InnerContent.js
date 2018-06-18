import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";
import { COLORS } from "../constants";

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
  const merged = innerMerge(
    {},
    defaultTheme.PageLayout,
    props.theme && props.theme.PageLayout ? props.theme.PageLayout : {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedContent = innerMerge(
    {},
    (defaultTheme.PageLayout && defaultTheme.PageLayout.Content) || {},
    (props.theme && props.theme.PageLayout && props.theme.PageLayout.Content) ||
      {}
  );

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      mergedContent,
      props.colored ? props.colored : COLORS.default
    )
  );

  return <Elem {...theme} {...props} />;
};

export default InnerContent;
