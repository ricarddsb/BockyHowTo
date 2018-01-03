import React from 'react';
import PropTypes from 'prop-types';
import './SearchButton.scss';

const SearchButton = props => (
  <div>
    <button
      className="SearchButton"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  </div>
);

SearchButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

SearchButton.defaultProps = {
  onClick: '',
  title: '',
};

export default SearchButton;
