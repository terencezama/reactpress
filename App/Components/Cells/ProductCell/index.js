import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { Images } from '../../../Themes'
import PropTypes from 'prop-types'

export default class ProductCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            product:{}
        };
    }

    render() {
        const { item, imageStyle, titleStyle, priceStyle } = this.props;
        let image = null;
        if (item.images && item.images.length>0){
            image = {uri:item.images[0].src}
        }else{
            image = Images.placeholder;
        }
        return (
            <View>
                <Image source={image} resizeMode={'contain'} style={imageStyle} onLoadEnd={()=>{this.setState({imageLoaded:true})}} />
                <RkText style={titleStyle}>{item.name}</RkText>
                <RkText style={priceStyle}>{item.price}</RkText>
            </View>
        );
    }
}

ProductCell.PropTypes = {
    item: PropTypes.object.isRequired,
    imageStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    priceStyle: PropTypes.object,
}

ProductCell.defaultProps = {
    title: 'title here',
    price: 'Rs 100.00',
    image: 'https://dummyimage.com/300x160/fff/000/',
    imageStyle: { width: 100, height: 100, backgroundColor: 'white' }
}