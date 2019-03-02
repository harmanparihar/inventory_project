import React, { Component } from 'react';
import axios from 'axios'
import SubCategories from "./SubCategories"
class Categories extends Component {
  handleClick(e){
    console.log(e.target)
    this.findProducts(e.target.id);
  }
  
  findProducts(id){
    axios.get(`http://localhost:8080/category/find/${id}`)
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
      if(!a.parent_category){
        return (
          <div key={a.category_id}>
          <div className={"ui_category "+a.category_id}>
          
            <div id={a.category_id} className="" onClick={(e)=>{this.handleClick(e)}}>{a.category_name}</div>
          </div>
          <SubCategories updateProducts={this.props.updateProducts} parent_category={a.category_id} />
          </div>
        )
      } else{
        return null;
      }
    });
    return (
      <main>
        <div className="categories_div">
                <div  className={"ui_category"}>
                <div onClick={this.props.getProducts}>Categories : All</div>
                </div>
                {mapped_categories}
        </div>
      </main>
    );
  }
}

export default Categories;
