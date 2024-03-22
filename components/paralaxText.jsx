import { useRef } from "react";
import React from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, colors, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        if (velocityFactor.get() !== 0) {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();

            baseX.set(baseX.get() + moveBy);
        }
    });

    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x: baseX }}>
                <h2 className="h1 flex">
                    {children.map((text, index) => (
                        <span key={index} className={`${colors[index]}`}>
                            {text}{' '}
                        </span>
                    ))}
                </h2>
                <h2 className="h1 flex">
                    {children.map((text, index) => (
                        <span key={index} className={`${colors[index]}`}>
                            {text}{' '}
                        </span>
                    ))}
                </h2>
                <h2 className="h1 flex">
                    {children.map((text, index) => (
                        <span key={index} className={`${colors[index]}`}>
                            {text}{' '}
                        </span>
                    ))}
                </h2>
                <h2 className="h1 flex">
                    {children.map((text, index) => (
                        <span key={index} className={`${colors[index]}`}>
                            {text}{' '}
                        </span>
                    ))}
                </h2>
                <h2 className="h1 flex">
                    {children.map((text, index) => (
                        <span key={index} className={`${colors[index]}`}>
                            {text}{' '}
                        </span>
                    ))}
                </h2>
                <h2 className="h1 flex">
                    {children.map((text, index) => (
                        <span key={index} className={`${colors[index]}`}>
                            {text}{' '}
                        </span>
                    ))}
                </h2>
            </motion.div>
        </div>
    );
}

export default function ParalexText() {
    return (
        <div>
            <ParallaxText baseVelocity={-50} colors={['text-gray', 'text-black']}>
                {['Brand strategy &', 'Website']}
            </ParallaxText>
            <ParallaxText baseVelocity={20} colors={['text-black', 'text-gray']}>
                {['graphics', '& Content develphics']}
            </ParallaxText>
            <ParallaxText baseVelocity={-50} colors={['text-black', 'text-gray']}>
                {['Support subscriptions', '& De']}
            </ParallaxText>
        </div>

    
    );
}
