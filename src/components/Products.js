import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "./Products.module.css";
import LoadingBar from "./LoadingBar";

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            this.setState({
                products:response.data,
            })
        })
    }
  render() {
      const {products} = this.state;
    return (
      <div  className={styles.container}>
          {
              products.length ? 
              products.map((product) => (<Card key={product.id} image={product.image} name={product.title} cost={`${product.price} $`} />))
              :
              <LoadingBar />
          }
        
      </div>
    );
  }
}

export default Products;
