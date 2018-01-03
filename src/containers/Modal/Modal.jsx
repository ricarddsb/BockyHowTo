import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { errorActions } from 'actions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  static propTypes = {
    errorType: PropTypes.object,
    isOpen: PropTypes.bool,
  }

  static defaultProps = {
    errorType: {},
    isOpen: false,
  }

  constructor(props) {
    super(props);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnClose() {
    this.props.errorActions.closeModal();
  }

  render() {
    const { errorType, isOpen } = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <div>
        {errorType.message}
        <button onClick={this.handleOnClose} >
          Close
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorType: state.errorManager.errorType,
    isOpen: state.errorManager.isOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    errorActions: bindActionCreators(errorActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
