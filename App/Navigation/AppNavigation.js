import { StackNavigator } from 'react-navigation';
import {
    ProductsListScreen,
    LoginScreen,
    ProductEditorScreen
} from '../Containers';
import styles from './Styles/NavigationStyles';
const PrimaryNav = StackNavigator({
    ProductsListScreen: { screen: ProductsListScreen },
    LoginScreen: { screen: LoginScreen },
    ProductEditorScreen: { screen: ProductEditorScreen }
}, {
    headerMode: 'none',
    initialRouteName: 'ProductEditorScreen',
    navigationOptions: { headerStyle: styles.header }
});
export default PrimaryNav;