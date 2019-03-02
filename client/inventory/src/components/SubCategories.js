import React, { Component } from 'react';
import axios from 'axios'

class SubCategories extends Component {
  state={
    sub_categories:[],
  }
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
  getSubCategories(id){
    axios.get(`http://localhost:8080/category/sub/${id}`)
      .then(response => {
          if (!response.data.errmsg) {
            console.log('get sub categories successful')
            this.setState({sub_categories: response.data});
          } else {
            console.log('get sub categories failed')
          }
      }).catch(error => {
              console.log('get sub categories error: ')
              console.log(error)
      });
  }
  componentDidMount(){
    this.getSubCategories(this.props.parent_category);
  }
  render() {
    const mapped_categories = this.state.sub_categories.map((a) =>{
        return (
          <div key={a.category_id} className={"sub_category "+a.category_id}>
            <div id={a.category_id} className="" onClick={(e)=>{this.handleClick(e)}}>{a.category_name}</div>
          </div>
        )
    });
    return (
      <main>
        <div className="subcategories_div">
                {mapped_categories}
        </div>
      </main>
    );
  }
}

export default SubCategories;
