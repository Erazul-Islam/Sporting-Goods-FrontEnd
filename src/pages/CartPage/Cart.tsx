import { Button, Card } from "antd";
import { useGetCartQuery } from "../../redux/feature/ProductsApi";
import Swal from 'sweetalert2'
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {

    const { data: products = [], isLoading, refetch } = useGetCartQuery({});

    const quantity = products.length

    const handleDelete = (_id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(`http://localhost:5000/carts/${_id}`)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your cancelletion has been cancelled.",
                        icon: "success"
                    });
                    refetch()
                } catch (err) {
                    console.log(err)
                }
            }
        });
    }


    const totalPrice = products.reduce((acc: number, product: any) => acc + product.price, 0)

    const priceAfterVat = totalPrice + totalPrice * .15


    return (
        <div className="flex">
            <div>
                <h1>Quantity: {quantity}</h1>
                <h1>Total Price: ${totalPrice.toFixed(2)} </h1>
                <h1>price After VAT: {priceAfterVat.toFixed(2)}</h1>
                <Link to={`/checkout`}><Button >Proceed</Button></Link>
            </div>
            <div className="grid grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-48 ">
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
                                <Button onClick={() => handleDelete(item._id)}>Remove</Button>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;