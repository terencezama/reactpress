import React, { Component } from 'react'
import {
  Keyboard,
  View
} from 'react-native';
import {
  RkAvoidKeyboard,
  RkText
} from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import styles from './styles.js'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import { Metrics, Colors } from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import i18n from 'react-native-i18n'
class OnboardingScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        style={styles.screen}
        colors={Colors.onboarding.background}
      >
        <MIcon name={'add-shopping-cart'} size={Metrics.screenWidth / 2} color={Colors.onboarding.logo} />
        <View style={styles.content}>
          <RkText rkType={'logo'}>
          {i18n.t('app_name')}
          </RkText>
          <RkText style={{color:'white'}} >
            {i18n.t('onboarding_desc')}
          </RkText>
        </View>
      </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)
