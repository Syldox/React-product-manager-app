import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Product extends Component {

    state = {
        showProductInfo: false
    };

    render() {
        const {name, inStock, price} = this.props;
        const {showProductInfo} = this.state
        return (
            <div className="card card-body mb-3"> 
            <h4> 
                <i className="fas fa-mobile-alt"></i>
                    Name: {name}
                <i  
                 onClick={()=> this.setState({showProductInfo: !this.state.showProductInfo})} className="fas fa-sort-down"></i>
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
