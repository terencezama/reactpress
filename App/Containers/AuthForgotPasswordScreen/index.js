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
import ForgotPasswordForm from '../../Components/Forms/ForgotPasswordForm'
import i18n from 'react-native-i18n'
class AuthForgotPasswordScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  _onSubmit = (data) => {
    console.log(data);
    this.navigation.push
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
              <ForgotPasswordForm style={{ flex: 1 }} onSubmit={this._onSubmit} />

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForgotPasswordScreen)
