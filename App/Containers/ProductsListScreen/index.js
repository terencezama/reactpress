import React, { Component } from 'react'
import {
  FlatList,
  VirtualizedList,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'

import ProductActions from '../../Redux/ProductsRedux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './styles'
import { Images } from '../../Themes';

class ProductsListScreen extends Component {

  static navigationOptions = {
    title: 'Article List'.toUpperCase()
  };

  constructor(props) {
    super(props);


    this.state = {
      data: []
    }

  }

  componentWillReceiveProps(nprops) {
    const { products } = nprops
    if (products.payload) {
      let data = this.state.data
      data.push(...products.payload)
      this.setState({ data })
    }

  }

  




  _renderImage = (product) => {
    
    if(product.image){
      return (<Image style={styles.item.image} rkCardImg source={{uri:product.image.url}} resizeMode={'contain'} />)
    }else{
      return (<Image style={styles.item.image} rkCardImg source={Images.image} resizeMode={'contain'} />)
    }
  }
  _renderItem = (item) => {
    // console.log("item",item)
    const product = item.item
    const {name, description, barcode} = product
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() =>{}}>
        <RkCard rkType='horizontal' style={styles.card}>
          {this._renderImage(product)}

          <View rkCardContent>
            <RkText numberOfLines={1} rkType='header6'>{name}</RkText>
            <RkText rkType='secondary6 hintColor'>{description}</RkText>
            <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{"barcode"}</RkText>
          </View>
        </RkCard>
      </TouchableOpacity>
    )
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { data } = this.state
    return (
      <View>
        <VirtualizedList
          data={[]}
          getItemCount={(d) => data.length}
          getItem={(d, index) => {
            return data[index];
          }}
          keyExtractor={(item, index) => {
            return index+"";
          }}
          renderItem={this._renderItem}
          style={styles.container}
           />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // props:
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(ProductActions.productsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListScreen)
