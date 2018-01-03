import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './User.scss';

class User extends Component {
  static renderData(item, onClick) {
    return (
      <div key={item.index} className="table-row" >
        <div className="text">{item.name}</div>
        <div className="text">{item.surname}</div>
        <div className="text">
          <button
            value={item.index}
            className="text"
            onClick={() => onClick(item.index)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  static propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    items: [],
  }

  render() {
    const { items, onClick } = this.props;
    return (
      <div className="table">
        <div className="table-row header">
          <div className="text">First Name</div>
          <div className="text">Last Name</div>
          <div className="text" />
        </div>
        { items.map((item, index) => User.renderData(item, onClick)) }
      </div>
    );
  }
}

export default User;

/*
class User extends Component {
  static renderData(item, onClick) {
    return (
      <tr key={item.index} >
        <td className="UserBody">{item.name}</td>
        <td className="UserBody">{item.surname}</td>
        <td className="UserBody">
          <button
            value={item.index}
            className="delete"
            onClick={() => onClick(item.index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  static propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    items: [],
  }

  render() {
    const { items, onClick } = this.props;
    return (
      <table className="UserTable">
        <thead >
          <tr>
            <th className="UserHeader">Name</th>
            <th className="UserHeader">Surname</th>
            <th className="UserHeader">Delete Person</th>
          </tr>
        </thead>
        <tbody>
          { items.map((item, index) => User.renderData(item, onClick)) }
        </tbody>
      </table>
    );
  }
}
*/
