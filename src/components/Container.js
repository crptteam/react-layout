import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from "styled-components";

import OuterContainer from '../styled/OuterContainer';

const Container = props => {
  const { children, gutter, justify, fillWidth, ...otherProps } = props;

  const childrenWithProps = React.Children.map(children, (child, i) =>
    React.cloneElement(child, {
      gutter: gutter,
      first: i === 0,
      last: i === children.length - 1
    })
  );

  return (
    <OuterContainer
      gutter={gutter}
      justify={justify}
      fillWidth={fillWidth}
      {...otherProps}
    >
      {childrenWithProps}
    </OuterContainer>
  );
};

Container.displayName = 'Container';

Container.propTypes = {
  gutter: PropTypes.number,
  justify: PropTypes.string,
  fillWidth: PropTypes.bool
};

export default withTheme(Container);
