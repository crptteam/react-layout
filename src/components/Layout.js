import React from "react";
import { withTheme } from "styled-components";
import OuterLayout from "../styled/OuterLayout";

const Layout = props => {
  return <OuterLayout {...props} />;
};

export default withTheme(Layout);
