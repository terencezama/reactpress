import {TabNavigator} from 'react-navigation'
import {ProductsScreen, CategoriesScreen} from '../Containers'
import ShopNavigation from './ShopNavigation'
export default TabNavigator({
    shop: ShopNavigation,
    settings: ProductsScreen,
  },{
    // headerMode:'None'
  });