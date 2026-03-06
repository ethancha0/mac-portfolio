import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const FONT_WEIGHTS = {
    subtitle: {min: 100, max: 400, default: 100}, 
    title: {min: 400, max: 900, default: 400}
};

const renderText = (text: string, className: string, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span 
            key={i} 
            className={className} 
            style={{fontVariationSettings : `'wght' ${baseWeight}` }}
        >
            {char === " " ? '\u00A0' : char}
        </span>
    ))

};

const setupTextHover = (
    container: HTMLElement | null,
    type: keyof typeof FONT_WEIGHTS
) => {
    if(!container) return;

    const letters = container.querySelectorAll<HTMLSpanElement>("span");
    const {min, max} = FONT_WEIGHTS[type];

    const animateLetter = (
        letter: HTMLSpanElement,
        weight: number,
        duration = 0.25
    ) => {
        return gsap.to(letter, {
            duration, 
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const {left: l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w/2));
            const intensity = Math.exp(-(distance ** 2) / 2000)

            animateLetter(letter, min + (max - min) * intensity);

        });
    };
    container.addEventListener("mousemove", handleMouseMove)


};


const Welcome = () => {

    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(() =>{
        setupTextHover(titleRef.current, 'title');
        setupTextHover(subtitleRef.current, "subtitle")
    }, []);

  return (
    <section id="welcome">
        <p ref={subtitleRef}>
            {renderText(
                "Hey, I'm Ethan! Welcome to my",
                'text-3xl font-georama',
                100)}
        </p>


        <h1 ref={titleRef} className="mt-7">
            {renderText(
                "portfolio",
                'text-9xl font-georama italic',
                400

            )}
        </h1>

        <div className="small-screen">
            <p>This Portfolio is designed for desktop/tabled screens only.</p>
        </div>


    </section>
  )
}

export default Welcome
