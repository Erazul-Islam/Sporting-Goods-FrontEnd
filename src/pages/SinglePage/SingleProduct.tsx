import { Button } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useGetProductsQuery } from "../../redux/feature/ProductsApi";

const SingleProduct = () => {

    const { _id } = useParams()

    const { data: products = [] } = useGetProductsQuery({})

    const [product, setProduct] = useState<any>({})
    const [quantity, setQuantity] = useState<number>(0)


    useEffect(() => {
        const findProduct = products.find((product: { _id: string | undefined; }) => product._id == _id)
        setProduct(findProduct)
        handleQuantity(findProduct?._id)
    }, [_id, products])

    const handleQuantity = async (productId: string | undefined) => {
        if (productId) {
            const res = await axios.get(`http://localhost:5000/carts/${productId}`)
            if (res.status === 200) {
                setQuantity(res.data.quantity || 0)
            }
        }
    }



    const handleAddToCart = async () => {
        if (quantity < product.stock_quantity) {
            try {
                const response = await axios.post('http://localhost:5000/cart', { productId: product?._id, name: product.name, category: product.category, stock_quantity: product.stock_quantity, brand: product.brand, description: product.description, price: product.price, image: product.image, quantity: 1 });
                if (response.status === 200) {
                    Swal.fire({
                        title: "Great job!",
                        text: "Product added successfully!",
                        icon: "success"
                    });
                    setQuantity(prevQuantity => prevQuantity + 1)
                } else if (response.status === 400) {
                    Swal.fire({
                        title: "Error!",
                        text: response.data.message,
                        icon: "error"
                    });
                }
            } catch (error) {
                console.error("Error adding product to cart:", error);
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while adding the product to the cart.",
                    icon: "error"
                });
            }
        }
    };



    return (
        <div >
            <h1 className="text-5xl font-extrabold text-center mt-12 mb-12 font-Sofia text-white">Product Details</h1>
            <div className="mt-8 md:ml-[500px] ml-[50px] bg-custom-purple lg:w-2/4 pl-16 pt-7 pb-7 rounded-tl-[50px] rounded-br-[50px]">
                <div>
                    <img className=" ml-auto mr-auto md:w-2/3 rounded-tr-[50px] rounded-bl-[50px] " src={product?.image} alt="" />

                    <div className="text-white text-left">
                        <div className="flex mt-8 pl-32 pr-32 justify-between">
                            <div>
                                <div>
                                    <h1 className="text-xl font-Merriweather text-white">Name:</h1>
                                    <p className="text-yellow-600">{product?.name}</p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-Merriweather text-white">Category:</h1>
                                    <p className="text-yellow-600">{product?.category}</p>
                                </div>
                                <div>
                                    <h1 className="text-xl font-Merriweather text-white">Stock Quantity:</h1>
                                    <p className="text-yellow-600">{product?.stock_quantity}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl font-Merriweather text-white">Brand:</h1>
                                    <p className="text-yellow-600">{product?.brand}</p>
                                </div>

                                <div>
                                    <h1 className="text-xl font-Merriweather text-white">Price: $</h1>
                                    <p className="text-yellow-600">{product?.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-xl font-Merriweather text-white">Description:</h1>
                            <p className="text-yellow-600">{product?.description}</p>
                        </div>
                        <div className="text-center">
                            <Button className="mt-4 rounded-tr-[25px] w-24 rounded-bl-[25px] text-white h-10 bg-custom-button" disabled={quantity >= product?.stock_quantity} onClick={handleAddToCart}>{quantity >= product?.stock_quantity ? "Out of Stock" : "Add to cart"}</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProduct;