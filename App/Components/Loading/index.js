import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import LottieView from 'lottie-react-native'
import PropTypes from 'prop-types'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
export default class Loading extends Component {

    state = {

    }

    componentDidUpdate(){
        if(this.props.isLoading){
            this.animation.play();
        }
    }



    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.isLoading}
                onRequestClose={() => { }}
            >
                <View style={styles.background}>
                    <LottieView
                        style={styles.animationView}
                        ref={animation => {
                            this.animation = animation;
                        }}
                        source={require('./animation.json')}
                    />
                </View>
            </Modal>
        );
    }
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired
}