import React from 'react';
import {
  DropDownButton,
  DropDownSources,
} from 'components';
import './Header.scss';

export default () => (
  <div className="Header">
    <DropDownButton title="About">
      <DropDownSources />
    </DropDownButton>
  </div>
);
