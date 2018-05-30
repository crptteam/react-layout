import React from 'react';
import defaultTheme from '../theme/defaultTheme';

import OuterHeader from '../styled/OuterHeader';
import InnerHeader from '../styled/InnerHeader';

const Header = props => (
  <OuterHeader>
    <InnerHeader theme={props.theme || defaultTheme} {...props} />
  </OuterHeader>
);

Header.displayName = 'Header';

export default Header;
