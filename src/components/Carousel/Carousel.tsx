import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '260px',
  color: '#fff',
  lineHeight: '260px',
  textAlign: 'center',
  maxHeight:'560px',
  background: '#364d79',
  marginBottom: '60px'
};

const App: React.FC = () => (
  <Carousel className='mt-14' autoplay>
    <div>
      <h3 style={contentStyle}>
        10%
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default App;


