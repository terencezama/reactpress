import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import LottieView from 'lottie-react-native'
import PropTypes from 'prop-types'
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
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <LottieView
                        style={{ flex: 1, }}
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