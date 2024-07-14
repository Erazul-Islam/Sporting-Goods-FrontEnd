import React from 'react';
import { useGetlatestProductsQuery } from '../../redux/feature/ProductsApi';
import { Link } from 'react-router-dom';
import { animated, useSprings } from '@react-spring/web';

const Featured: React.FC = () => {

    const { data: products = [] } = useGetlatestProductsQuery({});
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const [springs, api] = useSprings(products.length, index => ({
        transform: 'scale(1) rotate(0deg)',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        opacity: 0,
        transformContent: 'translateY(10px)',
        config: { tension: 300, friction: 10 },
    }));

    React.useEffect(() => {
        if (hoveredIndex !== null) {
            api.start(i => {
                if (i === hoveredIndex) {
                    return {
                        transform: 'scale(1.05) rotate(3deg)',
                        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
                        opacity: 1,
                        transformContent: 'translateY(0px)',
                    };
                } else {
                    return { opacity: 0, transformContent: 'translateY(10px)' };
                }
            });
        } else {
            api.start({
                transform: 'scale(1) rotate(0deg)',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                opacity: 0,
                transformContent: 'translateY(10px)',
            });
        }
    }, [hoveredIndex, api]);


    return <div>
        <h1 className="text-5xl font-extrabold text-center mb-8 mt-8 font-Sofia text-white">Featured</h1>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:ml-48">
            {products.map((item: any, index: any) => (
                <animated.div
                    key={index}
                    className="relative rounded-tl-[50px] rounded-br-[50px] w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform-gpu cursor-pointer"
                    style={{
                        transform: springs[index].transform,
                        boxShadow: springs[index].boxShadow,
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="h-2/3 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
                    <animated.div
                        className="absolute inset-0 flex items-center justify-center text-white text-center p-4"
                        style={{
                            opacity: springs[index].opacity,
                            transform: springs[index].transformContent,
                            backgroundColor: 'rgba(0,0,0,0.8)',
                        }}
                    >
                        <div>
                            <p className="text-lg font-semibold mb-2">Name: {item.name}</p>
                            <p className="text-sm mb-2">Category: {item.category}</p>
                            <p className="text-sm mb-2">Stock Quantity: {item.stock_quantity}</p>
                            <p className="text-sm mb-2">Brand: {item.brand}</p>
                            <p className="text-sm mb-2">Description: {item.description}</p>
                            <p className="text-sm mb-2">Price: ${item.price}</p>
                            <Link to={`/products/${item._id}`} className="block mt-4">
                                <animated.button
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                                    style={{
                                        opacity: springs[index].opacity,
                                        transform: springs[index].transformContent,
                                    }}
                                >
                                    View Details
                                </animated.button>
                            </Link>
                        </div>
                    </animated.div>
                </animated.div>
            ))}
        </div>
    </div>
};

export default Featured;