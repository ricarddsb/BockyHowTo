import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './DropDownButton.scss';

class DropDownButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      contentDisplayed: false,
    };

    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseLeave() {
    this.setState({
      contentDisplayed: false,
    });
  }

  handleMouseEnter() {
    this.setState({
      contentDisplayed: true,
    });
  }

  render() {
    const { contentDisplayed } = this.state;
    const { children, title } = this.props;

    const displayContentType =
      contentDisplayed ? 'DropDownButton-content-displayed' : 'DropDownButton-content';

    return (
      <div
        className="DropDownButton-title"
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
      >
        <div className="DropDownButton-title">
          {title}
        </div>
        <div className={displayContentType} >
          { contentDisplayed && children }
        </div>
      </div>
    );
  }
}

export default DropDownButton;

