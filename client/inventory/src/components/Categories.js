import React, { Component } from 'react';
import axios from 'axios'
import SubCategories from "./SubCategories"
import backend_path from './backend'

class Categories extends Component {
  handleClick(e,num){ 
    console.log(e.target)
    var els = document.querySelectorAll('.active')
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove('active')
    }
    e.target.className = "active item";
    if(num === 1){
      this.props.getProducts();
    } else{
      this.findProducts(e.target.id);
    }
  }
  
  findProducts(id){
    axios.get(`${backend_path}/category/find/${id}`)
      .then(response => {
          if (!response.data.errmsg) {
            console.log('find products successful')
            this.props.updateProducts(response.data);
          } else {
            console.log('find products failed')
          }
      }).catch(error => {
              console.log('find error: ')
              console.log(error)
      });
  }
  render() {
    const mapped_categories = this.props.categories.map((a) =>{
        return (
          <li className="category_container" key={a.id}>
          <div className={"ui_category "+a.id}>
            <div id={a.id} className="item" onClick={(e)=>{this.handleClick(e)}}>{a.name} <i className="dropdown icon"></i></div>
            <SubCategories categories={a.subcategories} updateProducts={this.props.updateProducts} getProducts={this.props.getProducts} />
          </div>
          </li>
        )
    });
    return (
      <main>
        <ul className="categories_div">
                <li  className={"ui_category all"}>
                <div className="item active" onClick={(e)=>{this.handleClick(e,1)}}>Categories : All</div>
                </li>
                {mapped_categories}
        </ul>
      </main>
    );
  }
}

export default Categories;
