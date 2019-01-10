import React, { Component } from 'react';

import { connect } from "react-redux";

import { updateFilters } from '../../actions/filterActions';

import Checkbox from '../Checkbox';


const availableSizes = [
  'XS',
  'S',
  'M',
  'ML',
  'L',
  'XL',
  'XXL',
];


class Filter extends Component {

  componentWillMount() {
    // mảng các phần tử không chùng nhau
    this.selectedCheckboxe = new Set();
  }

  toggleCheckbox = (label) => {
    //xóa dữ liệu
    if (this.selectedCheckboxe.has(label)) {
      this.selectedCheckboxe.delete(label);
  } else {
     //thêm dữ liệu
      this.selectedCheckboxe.add(label);
    }
    //lưu dữ liệu được chọn vào
    this.props.updateFilters(Array.from(this.selectedCheckboxe));
 }

  // foreach this shit
  createCheckboxes = () => (
    availableSizes.map(this.createCheckbox)
  )

  //sending sigle object label from availableSizes
  createCheckbox = (label) => (
   <Checkbox
       classes="filters-available-size"
       label={label}
       handleCheckboxChange={this.toggleCheckbox}
       key={label}
   />
  )
  render() {
    return (
      <div>
        <h4 className="title">Sizes:</h4>
        {this.createCheckboxes()}

      </div>
    );
  }
}


const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { updateFilters })(Filter);
