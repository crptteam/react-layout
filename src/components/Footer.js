import React from 'react';
import { withTheme } from "styled-components";

import OuterFooter from '../styled/OuterFooter';
import InnerFooter from '../styled/InnerFooter';

const Footer = props => (
  <OuterFooter>
    <InnerFooter theme={props.theme} {...props} />
  </OuterFooter>
);

Footer.displayName = 'Footer';

export default withTheme(Footer);
