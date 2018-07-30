import React, { Component } from 'react'
import {
  Keyboard,
  FlatList
} from 'react-native';
import {PulseIndicator} from 'react-native-indicators'
import {
  RkAvoidKeyboard,
  RkText
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'
import styles from './styles.js'
import ProductCell from '../../Components/Cells/ProductCell'
import {productsRequest,productsInitial} from '../../Redux/state/network/actions'
import {Colors} from '../../Themes'
class ProductsScreen extends Component {
  // static navigationOptions = {
  //   // header: null
  //   title: 'Products',
  // };
  static navigationOptions = ({ navigation }) => ({
    title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'Products': navigation.state.params.title,
});

  state = {
    products: [],
    loadMore: false,
    endLoad:false,
  }

  constructor(props) {
    super(props);
    this.page = 1;
    this.category = null;
  }

  componentDidMount(){
    const {navigation } = this.props;
    if(navigation.state.params && navigation.state.params.category){
      this.category = navigation.state.params.category;
      this.props.navigation.setParams({ 
        title: `${this.category.name} (${this.category.count})`,
        headerRight: (<RkText>Nice</RkText>)
       })

      if(this.category.count <=10){
        this.setState({endLoad:true});
      }
      this._performRequest();
    }else{
      this._performRequest();
    }
    
  }

  componentWillUnmount(){
    this.props.productsInitial();
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.products.response) {
      let products = prevState.products;
      if(products.slice(-1)[0]=='loading'){
        products.splice(-1,1);
      }

      if(nextProps.products.response.length == 0){
        return {loadMore: false, endLoad:true}
      }
      
      products.push(...nextProps.products.response);
      return { 
        products: products,
        loadMore: false
       }
    }
    return null;
  }

  _performRequest = () => {
    let param = {
      page:this.page,
    }
    if(this.category){
      param.category = this.category.id;
    }
    
    this.props.productsRequest(param);
  }

  _onEndReached = e => {
    if (!this.state.loadMore&& !this.state.endLoad) {
      this.setState({
        loadMore: true,
        products: [...this.state.products, 'loading']
      });
      this.page += 1;
      this._performRequest()
      
    }
  }

  _renderItem = (item) => {
    const category = item.item;
    if (category == 'loading') {
      return (<PulseIndicator  color={Colors.primary} />)
    }

    return (<ProductCell item={item.item} />)
  }
  
  render() {
    return (
      <FlatList 
        data={this.state.products || []}
        extraData={this.state}
        renderItem={this._renderItem}
        onEndReached={() => this._onEndReached()}
        onEndReachedThreshold={0.9}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productsRequest : params => dispatch(productsRequest(params)),
    productsInitial: () => dispatch(productsInitial()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen)
