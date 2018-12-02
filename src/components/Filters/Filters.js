import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filters.css';
import arrow_up_icon from '../../assets/icons/arrow_up.svg';

export default class Filters extends Component {
  static propTypes = {
    indexLastMember: PropTypes.number.isRequired, 
    totalNoOfPages: PropTypes.number.isRequired,
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="filters">
        {/* {this.props.lists} */}
        <div className="filters__select">
          <div className="filters__select__company">
            <select>
            <option>Company {this.props.selectedMemberCount}</option>
              {this.props.renderCompanyFilter}
            </select>
          </div>
          <div className="filters__select__status">
            <select 
              name="status" 
            >
              <option value="NA">Status</option>
              <option value="closed">Closed</option>
              <option value="active">Active</option>
              <option value="idle">Idle</option>
            </select>
          </div>
        </div>
        <div className="filters__pagination">
          <div className="filters__pagination__number">
            <span className="filters__pagination__number__opacity">Viewing&nbsp;</span>
            <span> {this.props.indexFirstMember + 1} - </span> 
              { this.props.indexLastMember > this.props.totalNoOfPages 
                ? <span> {this.props.totalNoOfPages} </span> 
                  :  <span> {this.props.indexLastMember} 
                    </span>
              }
            <span className="filters__pagination__number__opacity">&nbsp;of&nbsp;</span>
            <span>{this.props.totalNoOfPages}</span>
          </div>
          <div className="filters__pagination__button">
            { this.props.indexFirstMember > 0 && <button className="filters__pagination__button__arrow" onClick={this.props.previousPage}>
              <img src={arrow_up_icon} className="filters__pagination__button__arrow__prev" alt="prev" />
            </button> }
            { this.props.indexLastMember < this.props.totalNoOfPages - 1 && <button className="filters__pagination__button__arrow" onClick={this.props.nextPage}>
              <img src={arrow_up_icon} className="filters__pagination__button__arrow__next" alt="next" />
            </button> }
          </div>
        </div>
      </div>
    );
  }
}
