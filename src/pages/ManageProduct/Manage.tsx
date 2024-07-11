import { Button, Card, Form, Input, Modal } from "antd";
import { useGetProductsQuery } from "../../redux/feature/ProductsApi";
import Swal from 'sweetalert2'
import axios from "axios";

const Manage = () => {


    const { data: products = [], isLoading, refetch } = useGetProductsQuery({});

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
                    axios.delete(`http://localhost:5000/products/${_id}`)
                    Swal.fire({
                        title: "Deleted!",
                        text: "You successfully delete the product",
                        icon: "success"
                    });
                    refetch()
                } catch (err) {
                    console.log(err)
                }
            }
        });
    }

    const handleUpdate = async (_id) => {
        // Example of handling update in a modal
        Modal.confirm({
            title: 'Update Product',
            content: <UpdateForm _id={_id} refetch={refetch} />,
            okText: 'Update',
            cancelText: 'Cancel',
        });
    };

    console.log(handleUpdate)

    const UpdateForm = ({ _id, refetch }) => {
        const [form] = Form.useForm();

        const onFinish = async (values) => {
            try {
                await axios.put(`http://localhost:5000/products/${_id}`, values);
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'Updated!',
                    text: 'Product updated successfully',
                });
            } catch (err) {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update product',
                });
            }
        };

        return (
            <Form form={form} onFinish={onFinish}>
                <Form.Item name="name" label="Name">
                    <Input />
                </Form.Item>
                <Form.Item name="category" label="Category">
                    <Input />
                </Form.Item>
                <Form.Item name="stock_quantity" label="Stock Quantity">
                    <Input />
                </Form.Item>
                <Form.Item name="brand" label="Brand">
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="price" label="Price">
                    <Input />
                </Form.Item>
            </Form>
        );
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-48 ">
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
                                <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                                <Button onClick={() => handleUpdate(item._id)}>Update</Button>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default Manage;