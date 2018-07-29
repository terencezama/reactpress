import { StackNavigator } from 'react-navigation';
import {Platform} from 'react-native'
import {
    OnboardingScreen,
    AuthLoginScreen,
    AuthRegisterScreen,
    AuthForgotPasswordScreen
} from '../Containers';
import styles from './Styles/NavigationStyles';
import TabNavigation from './TabNavigation'

const PrimaryNav = StackNavigator({
    OnboardingScreen: { screen: OnboardingScreen },
    AuthLoginScreen: { screen: AuthLoginScreen },
    AuthRegisterScreen: { screen: AuthRegisterScreen },
    AuthForgotPasswordScreen: { screen: AuthForgotPasswordScreen },
    tab:{screen:TabNavigation}
}, {
    headerMode: Platform.OS == 'ios'? 'float' : 'float',
    initialRouteName: 'tab',
    navigationOptions: { 
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle
    }
});
export default PrimaryNav;