import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './InputForm.scss';

class InputForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
  }

  static defaultProps = {
    name: '',
    placeholder: '',
    label: '',
  }

  constructor(props) {
    super(props);

    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  handleOnInputChange(event) {
    const { name, onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange(name, event.target && event.target.value, name);
    }
  }

  render() {
    const { placeholder, label } = this.props;
    return (
      <div className="InputForm" >
        <label className="Label" htmlFor="12">
          { label }
          <input
            className="InputElement"
            onChange={this.handleOnInputChange}
            placeholder={placeholder}
            maxLength={16}
          />
        </label>
      </div>
    );
  }
}

export default InputForm;
