import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { mainActions } from 'actions';
import { User } from 'components';
import { MainView } from 'containers';
import arrayHelper from 'helpers';
import './MainContainer.scss';

class MainContainer extends Component {
  static propTypes = {
    items: PropTypes.array,
  }

  static defaultProps = {
    items: [],
  };

  constructor(props) {
    super(props);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
  }

  handleDeleteButtonClick(itemIndex) {
    const { items } = this.props;
    this.props.mainActions.deleteUser(arrayHelper.itemToDelete(itemIndex, items));
  }

  render() {
    const listItems = this.props.items;
    return (
      <div className="MainContainer">
        <MainView />
        { this.props.items.length !== 0 &&
          <div className="Users">
            <User
              items={listItems}
              onClick={this.handleDeleteButtonClick}
            />
          </div> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.mainManager.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
