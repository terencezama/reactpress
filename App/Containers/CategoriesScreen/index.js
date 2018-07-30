import React, { Component } from 'react'
import {
  Keyboard,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import {PulseIndicator} from 'react-native-indicators'
import {
  RkAvoidKeyboard, RkText
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'
import styles from './styles.js'
import { categoriesRequest } from '../../Redux/state/network/categories/actions'
import {Colors} from '../../Themes'


class CategoriesScreen extends Component {
  static navigationOptions = {
    // header: null
    title: 'Shop'
  };

  state = {
    categories: ['loading'],
    loadMore:true,
    endLoad:false,
  }

  constructor(props) {
    super(props);
    this.page = 1;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.categories.response) {
      let categories = prevState.categories;
      if(categories.slice(-1)[0]=='loading'){
        categories.splice(-1,1);
      }
      if(nextProps.categories.response.length == 0){
        return {loadMore: false, endLoad:true}
      }
      categories.push(...nextProps.categories.response);
      return { 
        categories: categories,
        loadMore: false
       }
    }
    return null;
  }

  _performRequest = () => {
    this.props.categoriesRequest({
      parent:0,
      page:this.page,
      orderBy:'name'
    })
  }

  componentDidMount() {
    this._performRequest();
  }

  _onItemPress = item => {
    this.props.navigation.navigate('ProductsScreen',{category:item});
  }

  _loadMore = () => {

  }

  _renderItem = (item) => {
    const category = item.item;
    if (category == 'loading') {
      return (<PulseIndicator  color={Colors.primary} />)
    }

    return (
      <TouchableOpacity style={styles.itemCell} onPress={()=>{this._onItemPress(item.item)}}>
        <RkText rkType={'h1'}> {category.name} </RkText>
        {/* <RkText> {category.count} </RkText> */}
      </TouchableOpacity>
    )
  }

  render() {
    const { categories } = this.state;
    return (
      <FlatList
        renderItem={this._renderItem}
        data={categories}
        extraData={this.state}
        onEndReached={() => {
          if (!this.state.loadMore && !this.state.endLoad) {
            this.setState({
              loadMore: true,
              categories: [...this.state.categories, 'loading']
            });
            this.page += 1;
            this._performRequest()
            
          }
        }}
        onEndReachedThreshold={0.9}
        // contentInset={{top:0,bottom:20,left:0,right:0}}
      />

    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    categoriesRequest: params => dispatch(categoriesRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen)
