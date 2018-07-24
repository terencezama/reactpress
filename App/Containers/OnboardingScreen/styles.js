import { RkStyleSheet } from 'react-native-ui-kitten'
import {Metrics} from '../../Themes'
export default RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: Metrics.screenWidth / 2,
    alignSelf: 'center',
    opacity: 0.9,
    marginBottom: 8,
    marginTop: 20 + 30,
  },
}));
