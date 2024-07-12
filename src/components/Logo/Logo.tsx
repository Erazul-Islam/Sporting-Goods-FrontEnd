import { useSpring, animated } from '@react-spring/web';

const InteractiveLogo = () => {
  const [props, set] = useSpring(() => ({
    transform: 'scale(1) rotate(0deg)',
    config: { tension: 170, friction: 12 },
  }));

  return (
    <animated.div
      className="p-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full shadow-2xl text-center cursor-pointer transform-gpu"
      onMouseEnter={() => set({ transform: 'scale(1.2) rotate(360deg)' })}
      onMouseLeave={() => set({ transform: 'scale(1) rotate(0deg)' })}
      style={props}
    >
      <span className="block text-white text-2xl font-pacifico">Taosif Sporting Store</span>
      {/* <span className="block text-white text-1xl font-pacifico font-semibold mt-4">Sporting Store</span> */}
    </animated.div>
  );
};

export default InteractiveLogo;
