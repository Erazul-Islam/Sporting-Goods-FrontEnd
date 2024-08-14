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
      <h3 className='relative' style={contentStyle}>
        <img className='w-full ' src="https://i.ibb.co/X52LXjf/7a1e72d87b38f1e906fc04e1098ae6c289c2cd6e-2000x694.webp" alt="" />
        <p className='absolute md:text-4xl right-6 lg:right-16 font-bold bottom-1/3 md:bottom-1/2'>UP To 60% OFF <br /> <p className='font-thin md:text-3xl'>PRIVATE SALE IS ON</p>
          <br /> <p className='font-thin md:text-3xl'>NO CODE NEDDED. EXCLUSIONS APPLY</p></p>
      </h3>
    </div>
    <div>
      <h3 className='relative' style={contentStyle}>
        <img className='w-full' src="https://i.ibb.co/Nncpv38/912bd6276f9ba1b8be878226717c197b97ab6836-2000x694.webp" alt="" />
        <p className='absolute md:text-4xl left-16 font-bold bottom-1/2'>UP To 40% OFF <br /> <p className='font-thin md:text-3xl'>Big Deal on Kinds</p>
        </p>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <div>
          <img className='w-full' src="https://i.ibb.co/LYmxZkM/7907559407e33f2a137c4c048ed437a55dae6a4b-2000x694.webp" alt="" />
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


