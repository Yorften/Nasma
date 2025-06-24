"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
    const mainRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.scrollDist',
                    start: '0 0',
                    end: '100% 100%',
                    scrub: 1,
                },
            })
                .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
                .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
                .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
                .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
                .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
                .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
                .fromTo('.mountFg', { y: -50 }, { y: -600 }, 0)
                // At the halfway point of the scroll, start fading the scene out
                .to(mainRef.current, { autoAlpha: 0, duration: 2.5 }, 0.8)
                // ** THE FIX **: At the same time it fades out, move it to the back
                .to(mainRef.current, { zIndex: 0, duration: 2.5 }, 0.8);

            // --- ARROW HOVER ANIMATIONS ---
            const arrowBtn = document.querySelector('#arrow-btn');

            if (arrowBtn) {
                arrowBtn.addEventListener('mouseenter', () => {
                    gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' })
                })

                arrowBtn.addEventListener('mouseleave', () => {
                    gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' })
                })

                arrowBtn.addEventListener('click', () => {
                    gsap.to(window, { scrollTo: innerHeight, duration: 1.5, ease: 'power1.inOut' })
                })
            }
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* This div creates the scrollable distance that drives the animation */}
            <div className="scrollDist" style={{ height: '200vh' }}></div>

            {/* The 'main' element is fixed to the viewport */}
            <div ref={mainRef} style={{
                position: 'fixed',
                width: '100%',
                height: '100vh',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
                <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <mask id="m">
                        <g className="cloud1">
                            <rect fill="#fff" width="100%" height="801" y="799" />
                            <image href="/parallax/cloud1Mask.jpg" width="1200" height="800" />
                        </g>
                    </mask>

                    <image className="sky" href="/parallax/sky.jpg" width="1200" height="590" />
                    <image className="mountBg" href="/parallax/mountBg.webp" width="1200" height="800" />
                    <image className="mountMg" href="/parallax/mountMg.png" width="1200" height="800" />
                    <image className="cloud2" href="/parallax/cloud2.webp" width="1200" height="800" />
                    <image className="mountFg" href="/parallax/mountFg.png" width="1200" height="800" />
                    <image className="cloud1" href="/parallax/cloud1.png" width="1200" height="800" />
                    <image className="cloud3" href="/parallax/cloud3.png" width="1200" height="800" />

                    <text fill="#fff" x="350" y="200" fontSize="99px" textAnchor="middle" style={{ transform: 'translateX(250px)' }}>اكتشف</text>
                    <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />

                    <g mask="url(#m)">
                        <rect fill="#fff" width="100%" height="100%" />
                    </g>


                    <rect id="arrow-btn" width="100" height="100" opacity="0" x="550" y="220" style={{ cursor: 'pointer' }} />
                </svg>
            </div>
        </>
    );
};

export default Hero;