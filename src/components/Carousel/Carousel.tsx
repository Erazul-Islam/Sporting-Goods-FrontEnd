// import { Carousel } from 'antd';



// const contentStyle: React.CSSProperties = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };


// const Carousel: React.FC = () => (
//     <Carousel autoplay>
//         <div>
//             <h3 style={contentStyle}>1</h3>
//         </div>
//         <div>
//             <h3 style={contentStyle}>2</h3>
//         </div>
//         <div>
//             <h3 style={contentStyle}>3</h3>
//         </div>
//         <div>
//             <h3 style={contentStyle}>4</h3>
//         </div>
//     </Carousel>
// );

// export default Carousel;

import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  maxHeight:'160px',
  background: '#364d79',
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