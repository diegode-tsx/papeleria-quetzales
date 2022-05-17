import React, { useState, useEffect } from "react";
import Commerce from '../libs/Commerce'
import ProductsList from '../components/Commerce/ProductList'




export default function Home() {  
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetchProducts();
        setLoading(true);
    }, []);


    /**
     * Fetch products data from Chec and stores in the products data object.
     * https://commercejs.com/docs/sdk/products
     */
    const fetchProducts = () => {
        Commerce.products.list().then((products) => {
          setProducts(products.data);
          console.log(products.data)
        }).catch((error) => {
          console.log('There was an error fetching the products', error)
        });
    }
    if (loading) return showHome();
    else return <h1>Loading...</h1>;

    function showHome(){
        console.log(products)
        return (
            <div>
                <ProductsList 
                    products={products}
                />
            </div>
        )
    }
    
}