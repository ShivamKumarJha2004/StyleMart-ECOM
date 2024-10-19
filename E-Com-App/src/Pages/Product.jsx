import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Navigate from '../Components/navigate/Navigate';
import MensRelatedProduct from '../Components/MensRelatedProduct';
import WomenRelatedProduct from '../Components/WomenRealtedProduct'; // Assuming this is for women's products
import KidsRelatedProduct from '../Components/KidRealtedProduct'; // Assuming this is for kids' products

function Product() {
    const { all_products } = useContext(ShopContext); // Destructure correctly here
    const { productId } = useParams();

    // Debugging

    // Check if all_products is defined
    if (!all_products || all_products.length === 0) {
        return <div>Loading...</div>; // Handle loading state
    }

    // Ensure productId is converted to a number before matching
    const product = all_products.find((e) => e.id === Number(productId));

    // Debugging
    // Check if product is found
    if (!product) {
        return <div>Product not found</div>; // Handle case where product is undefined
    }

    return (
        <div>
            {console.log(product)} {/* Now product should log correctly */}
            
            {/* Pass the single product object, not the entire array */}
            <Navigate product={product} />

            {/* Conditionally render based on product category */}
            {product.categories === 'men' && <MensRelatedProduct />}  {/* For men's products */}
            {product.categories === 'women' && <WomenRelatedProduct />}  {/* For women's products */}
            {product.categories === 'kid' && <KidsRelatedProduct />}  {/* For kids' products */}
        </div>
    );
}

export default Product;
