import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  // height: '560px',
  // color: '#fff',
  // lineHeight: '260px',
  // textAlign: 'center',
  // maxHeight: '560px',
  // marginBottom: '60px'
};

const App: React.FC = () => (
  <Carousel className='mt-14' autoplay>
    <div>
      <h3 style={contentStyle}>
        <img className='w-full ' src="https://i.ibb.co/X52LXjf/7a1e72d87b38f1e906fc04e1098ae6c289c2cd6e-2000x694.webp" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img className='w-full' src="https://i.ibb.co/Nncpv38/912bd6276f9ba1b8be878226717c197b97ab6836-2000x694.webp" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <div>
          <img className='w-full' src="https://i.ibb.co/LYmxZkM/7907559407e33f2a137c4c048ed437a55dae6a4b-2000x694.webp" alt="" />
          <div className=''>
            <h1 className='4xl text-black'>INCOMING BRAND NEW STYLES</h1>
          </div>
        </div>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img className='w-full' src="https://i.ibb.co/kGppVFC/4ecbad22c10850a48dc6591f755c85733a9ba58e-2000x694.webp" alt="" />
      </h3>
    </div>
  </Carousel>
);

export default App;


