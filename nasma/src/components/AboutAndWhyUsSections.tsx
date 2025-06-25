"use client";

import React from 'react';

const AboutAndWhyUsSections: React.FC = () => {
    return (
        <>
            {/* Custom Tailwind Animations (for fade-in-up effect) */}
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
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-600 { animation-delay: 0.6s; }
            `}</style>

            {/* Who We Are Section */}
            <section
                id="about"
                data-theme="light"
                className="relative min-h-screen w-full bg-seaside-aloe text-coastal-clay py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-inter overflow-hidden"
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-16 md:gap-24">
                    {/* Visual Element (Right-aligned in RTL layout for visual flow) */}
                    <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1 relative animate-fade-in-up delay-200">
                        <img
                            src={"/landscape_about_us_2.png"}
                            alt="Landscape"
                            className='object-cover h-full w-full' />
                    </div>

                    {/* Content (Left-aligned in RTL layout for main text) */}
                    <div className="w-full md:w-1/2 text-center md:text-right order-1 md:order-2 animate-fade-in-up delay-400">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 drop-shadow-sm" style={{ fontFamily: "'Montserrat', sans-serif" }} dir="rtl">
                            من نحن
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-85" dir="rtl">
                            في نسمة، يتجسد شغفنا بتحويل المساحات إلى تحف فنية فريدة، تمزج ببراعة بين نقاء الطبيعة وروعة التصميم المعاصر. نؤمن بأن كل مشروع هو قصة تروى، وكل مساحة هي لوحة تنتظر الإبداع.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed opacity-85" dir="rtl">
                            اكتشفوا وسائد &quot;نسمة&quot; التي تجمع بين الراحة والتصميم المستوحى من الطبيعة الخلابة للمغرب. كل وسادة تحكي فصلاً من فصول السنة، من ربيع المروج إلى صيف الواحات، ومن خريف الأطلس إلى شتاء الشمال.
                            باستخدام تطريز آلي دقيق وأقمشة عالية الجودة، تجسد كل قطعة حكاية بصرية تنقلكم إلى قلب المنظر الطبيعي المغربي، وتمنح ديكور منزلكم لمسة فنية دافئة تحمل معنى وهوية.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section
                id="why-us"
                data-theme="light"
                className="relative min-h-screen w-full bg-coastal-clay py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-inter overflow-hidden"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center drop-shadow-sm animate-fade-in-up" style={{ fontFamily: "'Montserrat', sans-serif" }} dir="rtl">
                    لماذا تختار نسمة؟
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Feature 1: Innovation & Sustainability */}
                    <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl flex flex-col items-center md:items-end text-center md:text-right transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200">
                        <div className="text-6xl mb-6 text-green-300 drop-shadow-lg">
                            <svg className="w-20 h-20 mx-auto md:mr-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4v2h-4zm0 4h4v2h-4z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4" dir="rtl">
                            الابتكار والاستدامة
                        </h3>
                        <p className="text-lg opacity-80 leading-relaxed" dir="rtl">
                            نصمم بيئات متفردة تعانق المستقبل، من خلال حلول معمارية ومواد صديقة للبيئة، لتأثير إيجابي يدوم لأجيال.
                        </p>
                    </div>

                    {/* Feature 2: Holistic Expertise */}
                    <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl flex flex-col items-center md:items-end text-center md:text-right transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400">
                        <div className="text-6xl mb-6 text-orange-300 drop-shadow-lg">
                            <svg className="w-20 h-20 mx-auto md:mr-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 12h-5V5h5v7zm-5 6h5v-5h-5v5zM5 18h5V11H5v7zm0-9h5V5H5v4z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4" dir="rtl">
                            خبرة متكاملة
                        </h3>
                        <p className="text-lg opacity-80 leading-relaxed" dir="rtl">
                            يضم فريقنا نخبة من المهندسين والمعماريين والمصممين، بخبرات عميقة ومتنوعة، لتقديم مشاريع متكاملة تلبي أعلى المعايير.
                        </p>
                    </div>

                    {/* Feature 3: Tailored Design */}
                    <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl flex flex-col items-center md:items-end text-center md:text-right transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-600">
                        <div className="text-6xl mb-6 text-blue-300 drop-shadow-lg">
                            <svg className="w-20 h-20 mx-auto md:mr-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4" dir="rtl">
                            تصميم مخصص
                        </h3>
                        <p className="text-lg opacity-80 leading-relaxed" dir="rtl">
                            كل مشروع نصنعه هو تجسيد لرؤيتك الفريدة، حيث نقدم حلولاً تصميمية مخصصة بعناية فائقة، لتعكس هويتك وتطلعاتك.
                        </p>
                    </div>
                </div>
            </section>

            {/* Credit Section */}
            <section className="w-full py-8 text-center bg-gray-100 text-gray-700 font-inter text-sm">
                <p>
                    Nasma -
                    Parallax credits: {' '}
                    <a href="https://codepen.io/creativeocean/pen/qBbBLyB" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                        Cinematix Hero Section by Creative Ocean
                    </a>
                </p>
            </section>
        </>
    );
};

export default AboutAndWhyUsSections;
