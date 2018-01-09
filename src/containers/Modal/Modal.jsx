import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { errorActions } from 'actions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  static propTypes = {
    errorType: PropTypes.object,
    showModal: PropTypes.bool,
  }

  static defaultProps = {
    errorType: {},
    showModal: false,
  }

  constructor(props) {
    super(props);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnClose() {
    this.props.errorActions.closeModal();
  }

  render() {
    const { errorType, showModal } = this.props;

    const styles = {
      modal: {
        display: (showModal) ? null : 'none',
        backgroundColor: '#222',
      },
    };
    if (!showModal) {
      return null;
    }
    return (
      <div style={styles.modal} className="modal-wrapper">
        <div>
          {errorType.message}
        </div>
        <button onClick={this.handleOnClose} className="modal-item">
          Close
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorType: state.errorManager.errorType,
    showModal: state.errorManager.isOpen,
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
