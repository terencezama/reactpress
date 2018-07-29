import {TabNavigator} from 'react-navigation'
import {ProductsScreen} from '../Containers'

export default TabNavigator({
    Shop: ProductsScreen,
    Settings: ProductsScreen,
  },{

  });