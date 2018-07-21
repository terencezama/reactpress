import {RkStyleSheet
} from 'react-native-ui-kitten';

export default RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
  },
  post: {
    marginTop: 13
  },
  item:{
    image:{
      margin: 8,
      backgroundColor: 'white'
    }
  }
}));