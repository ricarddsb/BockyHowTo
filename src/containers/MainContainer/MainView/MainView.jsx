// import disconnect from 'disconnect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { mainActions, apiActions } from 'actions';
import arrayHelper from 'helpers';
import { InputForm, SearchButton } from 'components';
import './MainView.scss';

class MainView extends Component {
  static propTypes = {
    items: PropTypes.array,
  }

  static defaultProps = {
    items: [],
  }
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleDoFetchButtonClick = this.handleDoFetchButtonClick.bind(this);
  }

  checkIfItemIsFilled(data) {
    const { items } = this.props;
    return arrayHelper.objectIsfilled(data, items);
  }

  handleInputChange(inputName, inputValue, typeInput) {
    this.setState({
      [inputName]: inputValue,
    });
  }

  handleSaveButtonClick() {
    const data = this.state;
    const { timesClicked } = this.props;
    data.index = timesClicked;
    this.props.mainActions.searchApplication(data, this.checkIfItemIsFilled(data));
  }

  handleDoFetchButtonClick() {
    /* const Discogs = disconnect.Client;
    const token = 'yhrwLTOEQyfgSjPnERJjSgmoVWQrjDikKwsXesKC';
    const authSession = new Discogs({ userToken: token });
    const db = authSession.database();
    db.getRelease(176126, (err, data) => console.log('data', data));
    const col = authSession.user().collection();
    console.log('1rst col', col); */
    this.props.apiActions.fetchDataRequest('https://api.discogs.com/releases/249504');
  }

  render() {
    return (
      <div className="MainView">
        <InputForm
          onChange={this.handleInputChange}
          placeholder="Insert a name"
          name="name"
          label="Name: "
        />
        <InputForm
          onChange={this.handleInputChange}
          placeholder="Insert a surname"
          name="surname"
          label="Surname: "
        />
        <div className="ButtonView">
          <SearchButton
            title="Click Me"
            onClick={this.handleSaveButtonClick}
          />
          <SearchButton
            title="Do fetch"
            onClick={this.handleDoFetchButtonClick}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch),
    apiActions: bindActionCreators(apiActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    items: state.mainManager.items,
    timesClicked: state.mainManager.timesClicked,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainView);
