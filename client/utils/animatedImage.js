import React from 'react';
import { animated, useSpring } from "react-spring";

const AnimatedImage = ({ imageUrl, name }) => {

    const calc = (x, y) => [
        -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 2) / 20,
        1.1,
    ];

    const trans = (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 500, friction: 40 },
    }));

    return (
        <animated.img
            src={imageUrl}
            alt={name}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.to(trans) }}
        />
    )
}

export default AnimatedImage;
