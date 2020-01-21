import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import axios from 'axios';
import items from './items';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { Button } from 'react-native-elements';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: {
        id: '',
        name: '',
      },
      isDisabled: false
    }
  }

  fieldRef = React.createRef();
 
  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
  };

  _handlePress() {
    let { current: field, } = this.fieldRef;
    let { selectedItems } = this.state;
    let kodeBank = selectedItems.id;
    let noRek = field.value();

    if (!noRek && !kodeBank) {
        alert("datanya masukin dong")
    } else if (!noRek) {
        alert("nomor rekeningnya mana sob?")
    } else if (!selectedItems.id) {
        alert("banknya woiiii")
    } else {
        axios.get(`https://api.riskymakira.com/cek-norek?kodeBank=${kodeBank}&noRek=${noRek}`)
    .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
    }
  }

  render() {
    return (
            <Fragment>
            <SearchableDropdown
                onItemSelect={(item) => {
                this.setState({ selectedItems: item });
                }}
                containerStyle={{ 
                    paddingHorizontal: 20,
                    paddingTop: 180
                }}
                itemStyle={{
                padding: 10,
                marginTop: 1,
                backgroundColor: 'rgb(0, 145, 234)',
                borderColor: '#bbb',
                borderRadius: 5,
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 260 }}
                items={items}
                resetValue={false}
                textInputProps={
                {
                    placeholder: "Cari nama bank",
                    underlineColorAndroid: "transparent",
                    style: {
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,
                    }
                }
                }
                listProps={
                {
                    nestedScrollEnabled: true,
                }
                }
            />
            <TextField
                label='Nomor Rekening'
                keyboardType='phone-pad'
                formatText={this.formatText}
                onSubmitEditing={this.onSubmit}
                ref={this.fieldRef}
                containerStyle={{ 
                    paddingHorizontal: 50,
                    paddingBottom: 50
                }}
                style={{
                    borderColor: '#ccc',
                    borderRadius: 5
                }}
            />
            <Button
                title="Check"
                containerStyle={{ 
                    paddingHorizontal: 50,
                }}
                onPress={() => this._handlePress()}
            />
        </Fragment>
    );
    }
}

export default App;