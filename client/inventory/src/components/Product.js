import React, { Component } from 'react';
import axios from 'axios'

class Product extends Component {
  handleClick(e){
    console.log(e.target)
    this.deleteProduct(e.target.id)
  }
  deleteProduct(id){
    axios.delete(`http://localhost:8080/product/delete/${id}`)
      .then(response => {
          if (!response.data.errmsg) {
            console.log('delete product successful')
            this.props.getProducts();
          } else {
            console.log('delete product failed')
          }
      }).catch(error => {
              console.log('delete error: ')
              console.log(error)
      });
      
  }
  render() {
    const mapped_products = this.props.products.map((a) =>{
      return (
        <div key={a.product_id} className={"ui card ui_product "+a.product_id}>
          <div className="image dimmable">
            <img src="images/product_icon.png"/>
          </div>
          <div className="content">
            <div className="header">{a.product_name}</div>
            <div className="meta">
              <a className="group">{a.product_description}</a>
            </div>
            <div className="description"> Categories : {a.categories.map((c)=>{
              return (
                <a key={c.category_id} className="meta cat"> {c.category_name} </a>
              )
             })}
             </div>
          </div>
          <div className="ui one bottom attached buttons">
            <div id={a.product_id} className=" secondary ui button" onClick={(e)=>{this.handleClick(e)}}> DELETE </div>
          </div>
        </div>
      )
    });
    return (
      <main className="product_div">
        <div className="ui cards">
                {mapped_products}
        </div>
      </main>
    );
  }
}

export default Product;
