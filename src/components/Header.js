import React from "react";
import defaultTheme from "../theme/defaultTheme";
import { withTheme } from "styled-components";
import OuterHeader from "../styled/OuterHeader";
import InnerHeader from "../styled/InnerHeader";

const Header = props => (
  <OuterHeader>
    <InnerHeader theme={props.theme} {...props} />
  </OuterHeader>
);

Header.displayName = "Header";

export default withTheme(Header);
