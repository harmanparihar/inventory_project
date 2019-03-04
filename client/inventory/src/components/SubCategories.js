import React, { Component } from 'react';
import axios from 'axios'
import backend_path from './backend'
class SubCategories extends Component {
  state={
    sub_categories:[],
  }
  handleClick(e){
    console.log(e.target)
    this.findProducts(e.target.id);
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
        if(!a.subcategories || a.subcategories.length<1){
          return (
            <li key={a.id} className={"sub_category "+a.category_id}>
              <div id={a.id} className="item" onClick={(e)=>{this.handleClick(e)}}>{a.name}</div>
            </li>
          )
        } else{
          return (
          <li key={a.id} className={"sub_category "+a.category_id}>
              <div id={a.id} className="item" onClick={(e)=>{this.handleClick(e)}}>{a.name} <i className="dropdown icon"></i></div>
                <div className="sub_2">
                <SubCategories categories={a.subcategories} updateProducts={this.props.updateProducts} getProducts={this.props.getProducts} />
                </div>
            </li>
          )
        }
        
    });
    return (
      <main>
        <ul className="subcategories_div">
                {mapped_categories}
        </ul>
      </main>
    );
  }
}

export default SubCategories;
