import React, { Component } from 'react'
import {
  Keyboard,
  Image,
  View,
  ScrollView,
  Alert
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
import { loginRequest, loginInitial } from '../../Redux/state/network/actions'
import { Loading,Error } from '../../Components'

class AuthLoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    loading: false,
    login: undefined,
    errorVisible: false
  }

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.login !== prevState.login) {
      if(nextProps.login.error){
        return { errorVisible: true };
      }
      
    }
    return null;
  }

  componentDidUpdate(){

  }

  _onSubmit = (data) => {
    this.props.loginRequest(data);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Loading isLoading={this.props.login.fetching} />
        <Error onClose={()=>{this.props.reset()}} visible={this.props.login.error != null} message={this.props.login.error?i18n.t(this.props.login.error.code):'test'} />
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
              <LoginForm style={{ flex: 1 }} onSubmit={this._onSubmit}
                onRegister={() => { this.props.navigation.push('AuthRegisterScreen') }}
                onForgotPassword={() => { this.props.navigation.push('AuthForgotPasswordScreen') }}
              />

            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('login',state.login)
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: data => dispatch(loginRequest(data)),
    reset: data => dispatch(loginInitial(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoginScreen)
