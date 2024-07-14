import { Button, Card } from "antd";
import { useGetCartQuery } from "../../redux/feature/ProductsApi";
import Swal from 'sweetalert2'
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {

    const { data: products = [], refetch } = useGetCartQuery({});

    const quantity = products.length

    const handleDelete = (_id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            color: '#FFFFFF',
            icon: "warning",
            showCancelButton: true,
            background: '#A020F0',
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(`http://localhost:5000/carts/${_id}`)
                    Swal.fire({
                        title: "Removed!",
                        color: '#FFFFFF',
                        background: '#A020F0',
                        text: "Your product has been removed.",
                        icon: "success"
                    });
                    refetch()
                } catch (err) {
                    console.log(err)
                }
            }
        });
    }


    const totalPrice = products.reduce((acc: number, product: any) => acc + Number(product.price), 0)

    const priceAfterVat = totalPrice + totalPrice * .15


    return (
        <div>
            <h1 className="text-white text-center mt-8 mb-8 text-3xl font-Sofia">Your added product</h1>
            <div className="flex justify-between">
                <div className="grid grid-cols-1 mt-7 mb-12 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-48 ">
                    {
                        products.map((item: any, index: any) => (
                            <Card
                                key={index}
                                className='bg-gradient-to-r from-custom-blue to-custom-purple'
                                style={{ width: 340 }}
                                cover={<img className="h-44" alt={item.name} src={item.image} />}
                            >
                                <div className="text-white text-center">
                                    <p>Name: {item.name}</p>
                                    <p>Category: {item.category}</p>
                                    <p>Stock Quantity: {item.stock_quantity}</p>
                                    <p>Brand: {item.brand}</p>
                                    <p>Description: {item.description}</p>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <Button className="mt-4 rounded-tr-[25px] w-24 rounded-bl-[25px] text-white h-10 bg-custom-button" onClick={() => handleDelete(item._id)}>Remove</Button>
                                </div>
                            </Card>
                        ))
                    }
                </div>
                <div className="bg-custom-purple rounded-tl-[50px] rounded-br-[50px] md:w-60 md:mr-56 md:mt-28 md:h-56 ">
                    <div className="pl-8 pt-8 text-white font-Merriweather">
                        <h1>Quantity: {quantity}</h1>
                        <h1 className="mt-4">Total Price: ${Number(totalPrice).toFixed(2)} </h1>
                        <h1 className="mt-4">price After VAT: {Number(priceAfterVat).toFixed(2)}</h1>
                        <Link to={`/checkout`}><Button className="mt-4 rounded-tr-[25px] w-24 rounded-bl-[25px] text-white h-10 bg-custom-button" >Proceed</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;