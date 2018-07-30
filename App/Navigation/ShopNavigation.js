import { StackNavigator } from 'react-navigation';
import {Platform} from 'react-native'
import {
    CategoriesScreen,
    ProductsScreen,
} from '../Containers';
import styles from './Styles/NavigationStyles';
import TabNavigation from './TabNavigation'

const PrimaryNav = StackNavigator({
    CategoriesScreen: { screen: CategoriesScreen },
    ProductsScreen: { screen: ProductsScreen },
}, {
    headerMode: 'float',
    initialRouteName: 'CategoriesScreen',
    navigationOptions: { 
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle
    }
});
export default PrimaryNav;