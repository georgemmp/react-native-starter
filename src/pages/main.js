import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

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

  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { docs } = this.state;
    return (
      <View>
        <FlatList 
          data={docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
