import React, { Component } from 'react';
import axios from 'axios'

import Header from './components/Header'
import Product from './components/Product'
import Categories from './components/Categories'
class App extends Component {
  constructor(){
    super()
    this.state={
      categories: [],
      products: [],
    }
  }
  componentDidMount(){
    this.getProducts();
    this.getCategories();
  }

getProducts(){
    axios.get(`http://localhost:8080/product/all`)
    .then(response => {
        if (!response.data.errmsg) {
          this.setState({products : response.data})
          console.log(response.data)
          console.log('get products successful')
        } else {
          console.log('get products failed')
        }
    }).catch(error => {
            console.log('error: ')
            console.log(error)
    })
}
getCategories(){
  axios.get(`http://localhost:8080/category/all`)
  .then(response => {
      if (!response.data.errmsg) {
        this.setState({categories : response.data})
        console.log(response.data)
        console.log('get categories successful')
      } else {
        console.log('get categories failed')
      }
  }).catch(error => {
          console.log('error: ')
          console.log(error)
  })
}

updateProducts(p){
  this.setState({products : p});
}
  render() {
    return (
      <div className="App">
        <Header />
        <Categories  categories={this.state.categories} updateProducts={this.updateProducts.bind(this)} getProducts={this.getProducts.bind(this)} getCategories={this.getCategories.bind(this)}/>
        <Product products={this.state.products} getProducts={this.getProducts.bind(this)} />
      </div>
    );
  }
}

export default App;
