import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../node_modules/font-awesome/css/font-awesome.css';


 class Product extends Component {

    state = {
        showProductInfo: false,
    };

    render() {
        const {name, inStock, price} = this.props;
        const {showProductInfo} = this.state
        return (
            <div className="card card-body mb-3"> 
            <h4> 
                <i className="fa fa-mobile"> Name: {name}  <i  
                 onClick={()=> this.setState({showProductInfo: !this.state.showProductInfo})}
                 className="fa fa-sort-down" style={{cursor: 'pointer'}}></i></i>
            </h4>
            {showProductInfo ?  (<ul>
                    <li className="list-group-item">inStock:{inStock}</li>
                    <li className="list-group-item">Price:{price}</li>
                </ul>) : null }
               
            </div>
        )
    }
}


Product.propTypes={
    product: PropTypes.object.isRequired
}
export default Product
