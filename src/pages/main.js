import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import Api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt'
  };

  state = {
    productInfo: {},
    docs: [],
    page: 1,
    loading: false
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    this.setState({ loading: true });
    const response = await Api.get(`/products?page=${page}`);
    const { docs, ...productInfo } = response.data;
    this.setState({ docs: [...this.state.docs, ...docs], productInfo, page, loading: false });
  };

  loadMore = () => {
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) {
      return;
    }
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  renderFooter = () => (
    this.state.loading ?
    <View style={styles.loader}>
      <ActivityIndicator size="large" />
    </View> : null
  );

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { docs } = this.state;
    return (
      <View style={styles.cotainer}>
        <FlatList
          contentContainerStyle={styles.list}
          data={docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  productButtonText: {
    fontSize: 16,
    color: '#DA552F',
    fontWeight: 'bold'
  },
  loader: {
    alignItems: 'center',
    marginBottom: 20
  }
});
