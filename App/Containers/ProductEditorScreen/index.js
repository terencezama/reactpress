import React, { Component } from 'react'
import {
  Keyboard
} from 'react-native';
import {
  RkAvoidKeyboard
} from 'react-native-ui-kitten';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import styles from './styles.js'
import ProductForm from '../../Components/Forms/ProductForm'

class ProductEditorScreen extends Component {
  static navigationOptions = {
    header: "Edit Product"
  };

  constructor(props) {
    super(props);
  }

  _onSubmit = (data) => {
    console.log(data);

  }
  
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.screen}
        >
        {/* screen components goes here */}
        <ProductForm onSubmit={this._onSubmit} />
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditorScreen)
