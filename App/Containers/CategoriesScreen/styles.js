import {RkStyleSheet} from 'react-native-ui-kitten'
import { Metrics } from '../../Themes';

export default RkStyleSheet.create(theme => ({
    screen: {
        padding: 16,
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: theme.colors.screen.base
      },
      itemCell:{
          width:Metrics.screenWidth,
          height:Metrics.screenWidth*0.3,
          marginBottom: 4,
          backgroundColor:'white',
          justifyContent:'center',
          alignItems: 'center',
      }
}));
