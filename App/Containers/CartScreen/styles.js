import {RkStyleSheet} from 'react-native-ui-kitten'

export default RkStyleSheet.create(theme => ({
    screen: {
        padding: 16,
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: theme.colors.screen.base
      },
}));
