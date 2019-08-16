import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt'
  };

  state = {
    docs: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await Api.get('/products');
    const { docs } = response.data;
    console.log(docs);
    this.setState({ docs });
  };

  render() {
    const { docs } = this.state;
    return (
      <View>
        <Text>Pagina Main</Text>
        {docs.map(items => (
          <Text key={items._id}>{items.title}</Text>
        ))}
      </View>
    );
  }
}
