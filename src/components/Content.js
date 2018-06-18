import React from 'react';
import { withTheme } from "styled-components";

import OuterContent from '../styled/OuterContent';
import InnerContent from '../styled/InnerContent';


const Content = props => {
  return (
    <OuterContent filled={props.filled}>
      <InnerContent theme={props.theme} {...props} />
    </OuterContent>
  );
};

Content.displayName = 'Content';

export default withTheme(Content);
