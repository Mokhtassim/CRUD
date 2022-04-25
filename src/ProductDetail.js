import React from "react";
import {withRouter} from "react-router-dom"

class ProductDetail extends React.Component{
constructor (props) {
    super(props);
    this.state = {
        product : []
    }
}
componentDidMount(){
    const productId = this.props.match.params.productId;
    fetch('https://api.publicapis.org/entries')
    .then(item => item.json())
    .then(data => {
        this.setState(
            {
                product:data.entries.find(product => product.API === productId)
            });
            console.log(data.entries)
    });
}

render(){
    const {product} = this.state;
    return (

        <div>
            <h3>Detail</h3>
            <p>API : {product.API}</p>
            <p>Auth : {product.Auth}</p>
            <p>Category : {product.Category}</p>
            <p>Description : {product.Description}</p>
           <p>Link : <a href="{product.Link}">{product.Link}</a></p>
        </div>

        );
}

}

export default withRouter(ProductDetail);