import React, { Component } from 'react';
import axios from 'axios'

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
      return (
        <div key={a.category_id} className={"ui card "+a.category_id}>
          <div className="ui button" id={a.category_id} onClick={(e)=>{this.handleClick(e)}}>{a.category_name}</div>
        </div>
      )
    });
    return (
      <main>
        <div className="ui four cards">
                <div  className={"ui card "}>
                <div className="ui button" onClick={this.props.getProducts}>All</div>
                </div>
                {mapped_categories}
        </div>
      </main>
    );
  }
}

export default Categories;
