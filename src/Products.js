import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component{

    constructor(props){
        super(props);
        this.state= {
            items : []
        }
    }
    componentDidMount() {
    fetch('https://api.publicapis.org/entries')
    .then((item)=> item.json())
    .then(data => {
        console.log(data.entries)
this.setState({
    items:data.entries
})
    })
    }
    render(){
        const {items} = this.state;
        const products = items.slice(0,5).map(product => {
            return (
              <div key={product.API}>
                <h3>
                  <Link to={`/products/${product.API}`}>{product.Description}</Link>
                </h3>
              </div>
            );
          });
        return(
            <div>
                <h2>Products</h2>
                {products}
            </div>
        )
    }
    
}
export default Products;