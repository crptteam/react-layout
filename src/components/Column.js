import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Inner from "../styled/InnerColumn";
import Outer from "../styled/OuterColumn";

const Column = props => {
  const { style, children, ...otherProps } = props;

  return (
    <Outer {...otherProps}>
      <Inner style={style}>{children}</Inner>
    </Outer>
  );
};

Column.displayName = "Column";

Column.propTypes = {
  col: PropTypes.number
};

export default withTheme(Column);
