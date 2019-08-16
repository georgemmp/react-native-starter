import React from 'react';
import { WebView } from 'react-native-webview';

const Product = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.item.url }} />
);

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.title  
});

export default Product; 
