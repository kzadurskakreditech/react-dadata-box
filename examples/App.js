import React, { Component } from 'react';
import ReactDadataBox from '../src';

import './index.css';
import TestComponent from './TestComponent';

const token = 'ff2eea11bd30f0e52d7107978323e3dcc170d5f1';

class App extends Component {
  state = {
    value: '',
    selectedValues: {}
  };

  handleType = e => this.setState({ value: e.target.value });

  handleChange = data => {
    this.setState({ value: data ? data.value : '' });
  };

  handleSelectedValue = type => selectedData => {
    this.setState(state => ({ ...state, selectedValues: { ...state.selectedValues, [type]: selectedData.data } }));
  };

  render() {
    console.log('state', this.state.selectedValues);
    return (
      <div>
        {/* <input placeholder="адрес" value={this.state.value} onChange={this.handleType} />
        <ReactDadataBox
          className="data"
          token={token}
          placeholder="Адрес"
          type="address"
          query={this.state.value}
          onChange={this.handleChange}
          allowClear
        /> */}
        <ReactDadataBox
          className="data"
          token={token}
          placeholder="Party"
          type="party"
          onChange={this.handleSelectedValue('party')}
        />
        <ReactDadataBox
          className="data"
          token={token}
          placeholder="Bank"
          type="bank"
          onChange={this.handleSelectedValue('bank')}
        />
        <ReactDadataBox
          className="data"
          token={token}
          placeholder="Email"
          type="email"
          onChange={this.handleSelectedValue('email')}
        />
        <ReactDadataBox
          className="data"
          token={token}
          placeholder="ФИО"
          type="fio"
          onChange={this.handleSelectedValue('fio')}
        />
        <ReactDadataBox
          className="data"
          token={token}
          placeholder="Address"
          type="address"
          city={true}
          onChange={this.handleSelectedValue('address')}
        />
        <ReactDadataBox
          className="data"
          token={token}
          placeholder="Passport"
          type="fms_unit"
          city={true}
          onChange={this.handleSelectedValue('fms_unit')}
        />
        {/* TODO: Add later on */}
        {/* <ReactDadataBox
          className="data"
          token={token}
          placeholder="Custom address"
          type="address"
          customInput={params => <TestComponent {...params} className="test" />}
        /> */}
        <h4>Values returned by dadata</h4>
        <pre>{JSON.stringify(this.state.selectedValues, null, '\t')}</pre>
      </div>
    );
  }
}

export default App;
