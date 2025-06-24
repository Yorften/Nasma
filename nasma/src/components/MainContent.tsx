"use client";

import React from 'react';

const MainContent = () => {

    return (
        <div
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url('/navbar_bg.jpg')`,
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


            {/* The actual content, with a higher z-index to appear on top of everything */}
            <div className="relative z-20 text-center">
                <h2 className="text-5xl text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    محتوى الصفحة الفعلي
                </h2>
                <p className="text-gray-200 mt-4">
                    (The Real Page Content with Navbar Goes Here)
                </p>
            </div>
        </div>
    );
};

export default MainContent;
