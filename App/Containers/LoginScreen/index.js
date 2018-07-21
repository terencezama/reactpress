import React, { Component } from 'react'
import {
  Keyboard, View, Image
} from 'react-native';
import {
  RkAvoidKeyboard,
  RkText
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'
import styles from './styles.js'
import LoginForm from '../../Components/Forms/LoginForm'
import {Images} from '../../Themes'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  _onSubmit = () =>{

  }
  
  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={ (e) => true}
        onResponderRelease={ (e) => Keyboard.dismiss()}>
        <View style={{alignItems: 'center'}}>
          {/* {renderIcon()} */}
          <Image style={styles.image} source={Images.logo}/>
          <RkText rkType='h1'>PMS</RkText>
        </View>
        {/* screen components goes here */}
        <LoginForm  onSubmit={this._onSubmit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
