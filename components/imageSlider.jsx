"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ImageSlider = () => {
    const [images, setImages] = useState([
        "/image/jonathan-borba-LnggkK8864c-unsplash.jpg",
        "/image/juan-encalada-6mcVaoGNz1w-unsplash.jpg",
        "/image/dino-reichmuth-A5rCN8626Ck-unsplash.jpg",
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-full">
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    // width={1000}
                    // height={1000}
                    fill={true}
                    alt={`Image ${index + 1}`}
                    className={`absolute top-0 left-0
                     w-full h-full transition-opacity duration-1000 ${
                         index === currentImageIndex
                             ? "opacity-100"
                             : "opacity-0"
                     }`}
                />
            ))}
            <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
    );
};

export default ImageSlider;
