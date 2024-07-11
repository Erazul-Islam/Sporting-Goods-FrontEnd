import { Button, Card } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useGetProductsQuery } from "../../redux/feature/ProductsApi";

const SingleProduct = () => {

    const { _id } = useParams()

    const { data: products = [], isLoading } = useGetProductsQuery({})

    const [product, setProduct] = useState({})

    useEffect(() => {
        const findProduct = products.find((product: { _id: string | undefined; }) => product._id == _id)
        setProduct(findProduct)
    }, [_id, products])

    const handleAddToCart = async () => {
        try {
            const response = await axios.post('http://localhost:5000/cart', { productId: product?._id, name: product.name, category: product.category, stock_quantity: product.stock_quantity, brand: product.brand, description: product.description, price: product.price, image: product.image });
            if (response.status === 200) {
                Swal.fire({
                    title: "Great job!",
                    text: "Product added successfully!",
                    icon: "success"
                });
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };



    return (
        <div>
            <Card
                className='bg-gradient-to-r from-custom-blue to-custom-purple'
                style={{ width: 340 }}
                cover={<img className="h-44" alt={product.name} src={product.image} />}
            >
                <div className="text-white text-center">

                    <p>Name: {product.name}</p>
                    <p>Category: {product.category}</p>
                    <p>Stock Quantity: {product.stock_quantity}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <Button onClick={handleAddToCart}>Add to cart</Button>
                </div>
            </Card>
        </div>
    );
};

export default SingleProduct;