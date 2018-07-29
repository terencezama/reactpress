import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { Images } from '../../../Themes'
import PropTypes from 'prop-types'

export default class ListCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false
        };
    }




    render() {
        const { title, price, image, imageStyle, titleStyle, priceStyle } = this.props;
        return (
            <View>
                <Image source={{ uri: image }} resizeMode={'contain'} style={imageStyle} onLoadEnd={()=>{this.setState({imageLoaded:true})}} />
                <RkText style={titleStyle}>{title}</RkText>
                <RkText style={priceStyle}>{price}</RkText>
            </View>
        );
    }
}

ListCell.PropTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    priceStyle: PropTypes.object,
}

ListCell.defaultProps = {
    title: 'title here',
    price: 'Rs 100.00',
    image: 'https://dummyimage.com/300x160/fff/000/',
    imageStyle: { width: 100, height: 100, backgroundColor: 'white' }
}