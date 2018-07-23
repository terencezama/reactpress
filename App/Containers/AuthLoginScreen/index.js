import React, { Component } from 'react'
import {
  Keyboard,
  Image,
  View,
  ScrollView
} from 'react-native';
import {
  RkAvoidKeyboard, RkText, RkButton
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'
import styles from './styles.js'
import LinearGradient from 'react-native-linear-gradient'
import { Colors, Images, Metrics } from '../../Themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginForm from '../../Components/Forms/LoginForm'
import i18n from 'react-native-i18n'
import {loginRequest} from '../../Redux/state/network/actions'

class AuthLoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.loginRequest({
      username:'terence',
      password:'Knight.01'
    })

  }

  _onSubmit = (data) => {
    console.log("before login",data);
    // this.props.login(data)
  }

  render() {
    return (
      <View style={styles.screen}>
        <LinearGradient
          style={styles.background}
          colors={Colors.onboarding.background}
        />
        <KeyboardAwareScrollView>
          <ScrollView
            style={styles.screen}
            ref={component => this.scrollView = component}
          >

            <View style={styles.body}>
              <View>
                <Image style={styles.logo} source={Images.logo} resizeMode={"contain"} />
                <RkText rkType={'center logo'}>{i18n.t('app_name')} </RkText>
              </View>
              <LoginForm style={{ flex: 1 }} onSubmit={this._onSubmit} />

            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest:data=>dispatch(loginRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoginScreen)
