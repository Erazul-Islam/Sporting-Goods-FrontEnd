import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const InteractiveLogoWithTag = () => {
  const [hovered, setHovered] = React.useState(false);

  const mainLogoProps = useSpring({
    transform: hovered ? 'scale(1.2)' : 'scale(1)',
    config: { tension: 170, friction: 12 },
  });

  const tagProps = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? 'translateY(0px)' : 'translateY(-20px)',
    config: { tension: 170, friction: 12 },
  });

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div
        className="p-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full shadow-2xl text-center cursor-pointer transform-gpu"
        style={mainLogoProps}
      >
        <span className="block text-white text-2xl font-pacifico">Style</span>
      </animated.div>
      <animated.div style={tagProps} className="mt-4">
        <span className="block text-white text-xl font-semibold">makes perfect</span>
      </animated.div>
    </div>
  );
};

export default InteractiveLogoWithTag;
