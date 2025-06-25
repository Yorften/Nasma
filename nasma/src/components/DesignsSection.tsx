"use client";

import React, { useRef } from 'react';

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

interface ImageData {
    src: string;
    alt: string;
    colSpan?: number;
    rowSpan?: number;
}

const DesignsSection: React.FC = () => {
    const generateImages = (): ImageData[] => {
        const categories: { [key: string]: number } = {
            bowl: 7,
            chairs: 1,
            cup: 3,
            room: 9,
        };
        const generated: ImageData[] = [];

        for (const [prefix, count] of Object.entries(categories)) {
            for (let i = 1; i <= count; i++) {
                generated.push({
                    src: `/${prefix}-${i}.jfif`,
                    alt: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} Design ${i}`,
                });
            }
        }
        return generated;
    };

    const allImages: ImageData[] = generateImages();

    const visibleGridImages: ImageData[] = allImages.slice(0, 16).map((img, index) => {
        const newImg: ImageData = { ...img };
        if (index === 0) newImg.colSpan = 2;
        if (index === 2) newImg.rowSpan = 2;
        if (index === 4) newImg.colSpan = 2;
        if (index === 5) {
            newImg.colSpan = 2;
            newImg.rowSpan = 2;
        }
        if (index === 6) newImg.rowSpan = 2;
        if (index === 9) newImg.colSpan = 2;
        if (index === 12) newImg.rowSpan = 2;
        if (index === 13) newImg.colSpan = 2;
        if (index === 15) newImg.colSpan = 2;
        return newImg;
    });

    return (
        <section
            id="designs"
            data-theme="light"
            className="relative min-h-screen w-full bg-coastal-linen flex flex-col items-center pb-16 px-4 sm:px-6 lg:px-8 font-inter text-coastal-clay"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                تصاميمنا الملهمة
            </h2>
            <p className="text-lg md:text-xl text-center max-w-2xl mb-12 opacity-80" dir="rtl">
                اكتشف مجموعتنا المختارة من التصاميم الفريدة التي تمزج بين الجمال الطبيعي والابتكار المعماري، لإنشاء مساحات تعكس الفخامة والاستدامة.
            </p>

            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px] mx-auto'
            >
                {visibleGridImages.map((image, index) => (
                    <a
                        key={index}
                        href={image.src}
                        data-sub-html={`<h4>${image.alt}</h4>`}
                        className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group
                            ${image.colSpan ? `col-span-${image.colSpan}` : ''}
                            ${image.rowSpan ? `row-span-${image.rowSpan}` : ''}
                            transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-xl
                        `}
                        style={{ gridColumn: image.colSpan ? `span ${image.colSpan} / span ${image.colSpan}` : 'auto', gridRow: image.rowSpan ? `span ${image.rowSpan} / span ${image.rowSpan}` : 'auto' }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Error'; }}
                        />
                    </a>
                ))}
            </LightGallery>
            <style jsx>{`
                .lg-outer{
                    text-align: right !important;
                }
            `}</style>
        </section>
    );
};

export default DesignsSection;
