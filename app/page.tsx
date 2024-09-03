"use client";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const LandingPage = () => {
    const adjectives = [
        "Beautiful",
        "Responsive",
        "Modern",
        "Fast",
        "Interactive",
        "Scalable",
        "Smooth",
        "Advanced",
    ];
    const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAdjectiveIndex(
                (prevIndex) => (prevIndex + 1) % adjectives.length,
            );
        }, 1000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full h-screen flex justify-center items-center">
                <div className="flex flex-col justify-evenly items-center h-[50vh] max-w-[1200px] lg:w-full lg:flex-row">
                    <div className="text-4xl font-extrabold w-1/2">
                        <h1>
                            Shane Curtis👋🏻, Building{" "}
                            <TextTransition
                                className="text-primary"
                                springConfig={presets.wobbly}
                            >
                                {
                                    adjectives[
                                        currentAdjectiveIndex %
                                            adjectives.length
                                    ]
                                }
                            </TextTransition>{" "}
                            Web Apps
                        </h1>
                    </div>
                    <p>image here</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
