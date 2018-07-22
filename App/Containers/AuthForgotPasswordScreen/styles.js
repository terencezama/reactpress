import { RkStyleSheet } from 'react-native-ui-kitten'
import {Metrics} from '../../Themes'
export default RkStyleSheet.create(theme => ({
    background: {
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
    },
    screen: {
        flex: 1,
        // backgroundColor: theme.colors.screen.base
    },
    logo: {
        width: Metrics.screenWidth / 3,
        alignSelf: 'center',
        opacity:0.9,
        marginBottom: 8,
        marginTop: 20+30,
    },
    imageContainer:{
        alignItems: 'center',
        backgroundColor:'red',
    },
    body:{
        flex:1,
        justifyContent: 'space-around',
        padding: 8,
    },
}));
