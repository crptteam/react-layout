import React from 'react';

import OuterContent from '../styled/OuterContent';
import InnerContent from '../styled/InnerContent';

import defaultTheme from '../theme/defaultTheme';

const Content = props => {
  return (
    <OuterContent filled={props.filled}>
      <InnerContent theme={props.theme || defaultTheme} {...props} />
    </OuterContent>
  );
};

Content.displayName = 'Content';

export default Content;
