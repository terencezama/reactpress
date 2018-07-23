import { StackNavigator } from 'react-navigation';
import {
    OnboardingScreen,
    AuthLoginScreen,
    AuthRegisterScreen,
    AuthForgotPasswordScreen
} from '../Containers';
import styles from './Styles/NavigationStyles';
const PrimaryNav = StackNavigator({
    OnboardingScreen: { screen: OnboardingScreen },
    AuthLoginScreen: { screen: AuthLoginScreen },
    AuthRegisterScreen: { screen: AuthRegisterScreen },
    AuthForgotPasswordScreen: { screen: AuthForgotPasswordScreen },
    
}, {
    headerMode: 'none',
    initialRouteName: 'AuthLoginScreen',
    navigationOptions: { headerStyle: styles.header }
});
export default PrimaryNav;