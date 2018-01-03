import React, { Component } from 'react';
import * as mockData from '../../../mockData/mockData.json';
import './DropDownSources.scss';

class DropDownSources extends Component {
  static renderKeywords(item, index) {
    return (
      <div key={index}>
        <span> {item[0]} </span>
        <span>
          <a
            href={item[1]}
            target="_blank"
            rel="noreferrer noopener"
            className="Url"
          >
            {item[0]}
          </a>
        </span>
      </div>
    );
  }

  render() {
    const mockDataObject = mockData;
    return (
      <div>
        <div className="DropDownSources-header">
          <span> keyword </span>
          <span> url </span>
        </div>
        <div className="DropDownSources">
          { mockDataObject.keywords.map((item, index) =>
              DropDownSources.renderKeywords(item, index))
          }
        </div>
      </div>
    );
  }
}

export default DropDownSources;
