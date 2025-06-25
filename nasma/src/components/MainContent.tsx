"use client";

import React from 'react';

const MainContent = () => {

    return (
        <div
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/navbar_bg_3.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >

            {/* Fading clouds effect at the top */}
            <div className="absolute top-0 left-0 w-full h-1/2 z-10">
                {/* A solid gradient from white to transparent to start the fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
            </div>


            <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-up drop-shadow-lg text-white text-shadow-lg" dir="rtl">
                    نسمة: مستقبل التصميم المستدام
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-medium mb-10 opacity-0 animate-fade-in-up delay-300 drop-shadow text-white text-shadow-lg" dir="rtl">
                    نقدم حلولاً إبداعية ومبتكرة، تجمع بين الجمال والوظائفية، لتحويل رؤيتك إلى واقع ملموس يحافظ على البيئة.
                </p>
                <button
                    className="cursor-pointer bg-white text-coastal px-10 py-4 rounded-full text-lg md:text-xl font-bold shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out opacity-0 animate-fade-in-up delay-600 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                    dir="rtl"
                >
                    ابدأ مشروعك الآن
                </button>
            </div>

            {/* Decorative wave at the bottom */}
            <div className="absolute bottom-0 left-0 w-full z-0">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="block fill-current text-white opacity-10">
                    <path d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>

            {/* Tailwind CSS keyframes for animations */}
            <style jsx>{`
                @keyframes fadeInUptoMove {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUptoMove 1s ease-out forwards;
                }
                .delay-300 { animation-delay: 0.3s; }
                .delay-600 { animation-delay: 0.6s; }
            `}</style>
        </div>
    );
};

export default MainContent;
