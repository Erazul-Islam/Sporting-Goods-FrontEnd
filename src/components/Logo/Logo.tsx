import { useSpring, animated } from "@react-spring/web";

const Logo = () => {

    const styles = useSpring({
        loop: { reverse: true },
        from: { opacity: 0, transform: 'scale(0.8) translateY(-20px)', color: '#ff69b4' },
        to: { opacity: 1, transform: 'scale(1.2) translateY(0px)', color: '#61dafb' },
        config: { duration: 800 },
    });

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#282c34' }}>
            <animated.div style={styles}>
                <h1 style={{ fontSize: '4rem', fontFamily: 'Arial, sans-serif', margin: 0 }}>
                    Apex Athletic Co.
                </h1>
            </animated.div>
        </div>
    );
};

export default Logo;