import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { Metrics } from '../../Themes'
import { RkText, RkButton } from 'react-native-ui-kitten'
import PropTypes from 'prop-types'
export default class Error extends Component {

    // state = {
    //     visible: false
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.visible != prevState.visible){
    //         return {visible:nextProps.visible}
    //     }
    //     return null;
    // }



    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => { }}
            >
                <View style={styles.background}>
                    <MIcon name={'error-outline'} size={Metrics.screenWidth / 2} color={"#ffffff"} />
                    <RkText rkType={'errorView'}>{this.props.message || ''}</RkText>
                    <RkButton
                        rkType={'xlarge auth' }
                        style={{ marginTop: 10, }}
                        onPress={this.props.onClose}
                    >
                        Ok
                    </RkButton>
                </View>
            </Modal>
        );
    }
}

Error.propTypes = {
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string,
    visible: PropTypes.bool.isRequired
}

