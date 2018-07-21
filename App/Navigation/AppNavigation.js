import { StackNavigator } from 'react-navigation';
import {
    OnboardingScreen,
    AuthLoginScreen
} from '../Containers';
import styles from './Styles/NavigationStyles';
const PrimaryNav = StackNavigator({
    AuthLoginScreen: { screen: AuthLoginScreen },
    OnboardingScreen: { screen: OnboardingScreen },
}, {
    headerMode: 'none',
    initialRouteName: 'OnboardingScreen',
    navigationOptions: { headerStyle: styles.header }
});
export default PrimaryNav;