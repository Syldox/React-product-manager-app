import React, { Component } from 'react';
import Product from './Product'

class Products extends Component {

    state={
        products:[
            {
                id:1,
                name:'Oneplus 7 pro',
                inStock:10,
                price: '$100.00'
            },
            {
                id:2,
                name:'iphone 11 pro',
                inStock:5,
                price:'$200.00'
            },
            {
                id:3,
                name:'sumsung Galaxy s10',
                inStock:8,
                price:'$300.00'
            }
        ]
    }
    render() {
        const {products} = this.state
        return (
          <React.Fragment>
               <h1>Products <i className="fas fa-store"></i></h1>
              {products.map(product =>(
                  <Product key={product.id} name ={product.name} inStock={product.inStock} price={product.price}/>
              ))}
          </React.Fragment>
        )
    }
}

export default Products;
