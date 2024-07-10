import { Card, Input, Select, Button, Spin } from "antd";
import { useGetProductsQuery } from "../../redux/feature/ProductsApi";
import React, { useEffect, useState } from "react";
import { TProduct } from "./Product.interface";


const AllProduct: React.FC = () => {

    const { Search } = Input;
    const { Option } = Select;

    const { data: products = [], isLoading } = useGetProductsQuery({});
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ category: '', brand: '', price: '', rating: '' });
    const [filteredProducts, setFilteredProducts] = useState<TProduct[]>(products);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) {
            setLoading(true);
        } else {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            let filtered = products
                .filter((product: TProduct) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .filter((product: TProduct) => (filters.category ? product.category === filters.category : true))
                .filter((product: TProduct) => (filters.brand ? product.brand === filters.brand : true))
                .filter((product: TProduct) => (filters.rating ? product.rating >= parseFloat(filters.rating) : true))
                .sort((a: TProduct, b: TProduct) => {
                    if (filters.price === 'low-high') {
                        return a.price - b.price;
                    } else if (filters.price === 'high-low') {
                        return b.price - a.price;
                    } else {
                        return 0;
                    }
                });

            setFilteredProducts(filtered);
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [products, searchQuery, filters]);

    const handleFilterChange = (name: string, value: string) => {
        setFilters({ ...filters, [name]: value });
    };

    const clearFilters = () => {
        setFilters({ category: '', brand: '', price: '', rating: '' });
        setSearchQuery('');
    };


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="text-center">
                <Search
                    placeholder="Search for products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: 300, marginBottom: 20 }}
                />
                <div style={{ marginBottom: 20 }}>
                    <Select
                        placeholder="Select Category"
                        onChange={(value) => handleFilterChange('category', value)}
                        value={filters.category}
                        style={{ width: 150, marginRight: 10 }}
                    >
                        <Option value="">All Categories</Option>
                        <Option value="Cricket">Cricket</Option>
                        <Option value="Basketball">Basketball</Option>
                        <Option value="Tennis">Tennis</Option>
                    </Select>
                    <Select
                        placeholder="Select Brand"
                        onChange={(value) => handleFilterChange('brand', value)}
                        value={filters.brand}
                        style={{ width: 150, marginRight: 10 }}
                    >
                        <Option value="">All Brands</Option>
                        <Option value="Nike">Nike</Option>
                        <Option value="Adidas">Adidas</Option>
                        <Option value="Wilson">Wilson</Option>
                    </Select>
                    <Select
                        placeholder="Sort by Price"
                        onChange={(value) => handleFilterChange('price', value)}
                        value={filters.price}
                        style={{ width: 150, marginRight: 10 }}
                    >
                        <Option value="">Default</Option>
                        <Option value="low-high">Price: Low to High</Option>
                        <Option value="high-low">Price: High to Low</Option>
                    </Select>
                    <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-48 ">
                {loading ? (
                    <Spin className="text-center items-center " size="large" style={{ margin: 'auto' }} />
                ) :
                    filteredProducts.map((item, index) => (
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
                                <button>View Details</button>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default AllProduct;