import React, { Component } from 'react';

import { connect } from "react-redux";
import { checkfilter } from '../../actions/filter_check_Actions';
import Selectbox from '../Selectbox';

const sortBy = [
  { value: '',           label: 'Select'  },
  { value: 'true', label: 'Free ship' },
  { value: 'false', label: 'Not free ship' },
]

class Sort extends Component {

  handleSort = (value) => {
    this.props.checkfilter(value);
  }

  render() {
    return (
      <div className="sort">
        Is free shipping ? : <Selectbox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { checkfilter })(Sort);
