import React from 'react';
import { Card } from 'antd';
import { useGetProductsQuery } from '../../redux/feature/ProductsApi';

const Featured: React.FC = () => {

    const { data: products = [], isLoading } = useGetProductsQuery({});

    return <div>
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
                            {/* <Link to={`/products/${item._id}`}><button>View Details</button></Link> */}
                        </div>
                    </Card>
                ))
            }
        </div>
    </div>
};

export default Featured;