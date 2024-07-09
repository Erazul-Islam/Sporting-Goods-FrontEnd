import React from 'react';
import { Card } from 'antd';

const Featured: React.FC = () => (
    <div className='lg:ml-36 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        <Card className='bg-gradient-to-r from-custom-blue to-custom-purple'
            style={{ width: 340 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <div>
                <p>Name:</p>
                <p>Category:</p>
                <p>Stock Quantity:</p>
                <p>Brand:</p>
                <p>Description:</p>
                <p>Price:</p>
                <button>View Details</button>
            </div>
        </Card>
        <Card
            style={{ width: 340 }}
            className='bg-gradient-to-r from-custom-blue to-custom-purple'
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <div>
                <p>Name:</p>
                <p>Category:</p>
                <p>Stock Quantity:</p>
                <p>Brand:</p>
                <p>Description:</p>
                <p>Price:</p>
                <button>View Details</button>
            </div>
        </Card>
        <Card
            className='bg-gradient-to-r from-custom-blue to-custom-purple'
            style={{ width: 340 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <div>
                <p>Name:</p>
                <p>Category:</p>
                <p>Stock Quantity:</p>
                <p>Brand:</p>
                <p>Description:</p>
                <p>Price:</p>
                <button>View Details</button>
            </div>
        </Card>
    </div>
);

export default Featured;