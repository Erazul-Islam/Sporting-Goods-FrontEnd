import React from 'react';
import { useGetlatestProductsQuery } from '../../redux/feature/ProductsApi';
import { Link } from 'react-router-dom';
import { useSpring,animated } from '@react-spring/web';

const Featured: React.FC = () => {

    const { data: products = [] } = useGetlatestProductsQuery({});
   

    return <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-48">
            {
                products.map((item: any, index: any) => {
                    const [hovered, setHovered] = React.useState(false);

                    const cardProps = useSpring({
                        transform: hovered ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0deg)',
                        boxShadow: hovered
                            ? '0px 10px 30px rgba(0, 0, 0, 0.3)'
                            : '0px 5px 15px rgba(0, 0, 0, 0.1)',
                        config: { tension: 300, friction: 10 },
                    });

                    const contentProps = useSpring({
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? 'translateY(0px)' : 'translateY(10px)',
                        config: { tension: 300, friction: 10 },
                    });

                    return (
                        <animated.div
                            key={index}
                            className="relative w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform-gpu cursor-pointer"
                            style={cardProps}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <div className="h-2/3 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
                            <animated.div
                                className="absolute inset-0 flex items-center justify-center text-white text-center p-4"
                                style={{ ...contentProps, backgroundColor: 'rgba(0,0,0,0.8)' }}
                            >
                                <div>
                                    <p className="text-lg font-semibold mb-2">Name: {item.name} </p>
                                    <p className="text-sm mb-2">Category: {item.category} </p>
                                    <p className="text-sm mb-2">Stock Quantity: {item.stock_quantity} </p>
                                    <p className="text-sm mb-2">Brand: {item.brand} </p>
                                    <p className="text-sm mb-2">Description: {item.description}</p>
                                    <p className="text-sm mb-2">Price:  ${item.price} </p>
                                    <Link to={`/products/${item._id}`} className="block mt-4">
                                        <animated.button
                                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                                            style={contentProps}
                                        >
                                            View Details
                                        </animated.button>
                                    </Link>
                                </div>
                            </animated.div>
                        </animated.div>
                    );
                })
            }
        </div>
    </div>
};

export default Featured;