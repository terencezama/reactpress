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
import RegisterForm from '../../Components/Forms/RegisterForm'
import i18n from 'react-native-i18n'
import {registerRequest} from '../../Redux/state/network/actions'
import navigator from '../../Services/NavigationService'
class AuthRegisterScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.registerRequest({
      username:'terencee',
      password:'Knight.01',
      email:'terence.estore@gmail.com'
    })
  }



  _onSubmit = (data) => {
    console.log(data);

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
              <RegisterForm style={{ flex: 1 }} onSubmit={this._onSubmit}
              onLogin={()=>{navigator('AuthLoginScreen',this.props.nav.routes,this.props.navigation);}}
              onForgotPassword={()=>{navigator('AuthForgotPasswordScreen',this.props.nav.routes,this.props.navigation);}}
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
    nav:state.nav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest:data=>dispatch(registerRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRegisterScreen)
