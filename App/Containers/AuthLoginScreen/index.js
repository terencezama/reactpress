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
import {Loading} from '../../Components'

class AuthLoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    loading : false
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(){


  }

  _onSubmit = (data) => {
    console.log("before login",data);
    this.setState({
      loading:true 
    })
    // this.props.login(data)
  }

  render() {
    return (
      <View style={styles.screen}>
      <Loading isLoading={this.state.loading}/>
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
              onRegister={()=>{this.props.navigation.push('AuthRegisterScreen')}}
              onForgotPassword={()=>{this.props.navigation.push('AuthForgotPasswordScreen')}}
              />

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
