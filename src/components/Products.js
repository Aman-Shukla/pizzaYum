import Product from "./product";
import { useState ,useEffect,useContext} from "react";
import { CartContext } from "../CartContext";

const Products = ()=>{

    const {name} = useContext(CartContext);

    const [products, setProducts] = useState([]);
useEffect(() => {
   fetch('/api/products')
   .then(response => response.json())
   .then(products => {
    setProducts(products);
   });
}, []);
       

   

    return(
        <div className="container mx-auto pb-24 ">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 mt-8 gap-24">
                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
               
              
              

            </div>

        </div>

    )
}
export default Products;