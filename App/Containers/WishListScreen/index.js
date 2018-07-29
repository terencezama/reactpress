import React, { Component } from 'react'
import {
  Keyboard
} from 'react-native';
import {
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'
import styles from './styles.js'


class WishListScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={ (e) => true}
        onResponderRelease={ (e) => Keyboard.dismiss()}>
        {/* screen components goes here */}
      </RkAvoidKeyboard>
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

export default connect(mapStateToProps, mapDispatchToProps)(WishListScreen)
