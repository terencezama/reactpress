import React, { Component } from 'react'
import {
  Keyboard,
  FlatList
} from 'react-native';
import {
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'
import styles from './styles.js'
import ListCell from '../../Components/Cells/ListCell'
import {productsRequest} from '../../Redux/state/network/actions'
class ProductsScreen extends Component {
  static navigationOptions = {
    // header: null
    title: 'Products',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  _renderItem = item => {
    return (<ListCell />)
  }
  
  render() {
    return (
      <FlatList 
        data={[1,2,3,4,5]}
        renderItem={this._renderItem}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // productsRequest = params => dispatch(productsRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen)
