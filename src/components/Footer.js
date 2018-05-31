import React from 'react';
import defaultTheme from '../theme/defaultTheme';

import OuterFooter from '../styled/OuterFooter';
import InnerFooter from '../styled/InnerFooter';

const Footer = props => (
  <OuterFooter>
    <InnerFooter theme={props.theme || defaultTheme} {...props} />
  </OuterFooter>
);

Footer.displayName = 'Footer';

export default Footer;
