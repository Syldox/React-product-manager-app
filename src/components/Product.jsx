import React, { Component } from 'react'

 class Product extends Component {
    render() {
        const {name, inStock, price} = this.props
        return (
            <div className="card card-body mb-3"> 
                <ul>
                    <li className="list-group-item label">Name: {name}</li>
                    <li className="list-group-item">inStock:{inStock}</li>
                    <li className="list-group-item">Price:{price}</li>
                </ul>
            </div>
        )
    }
}

export default Product
