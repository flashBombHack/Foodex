import React, { useState, useEffect } from "react";
import { ReactComponent as StarIcon } from "../../assets/StarIcon.svg";
import { foodData as mockFoodData } from "../../data/foodData.ts";
import Mockup from "../../assets/Mockup.svg";
import ThumbUp from "../../assets/ThumbUp.svg";
import HomeExtension from "./HomeExtension.tsx";

const Home: React.FC = () => {
    const [currentText, setCurrentText] = useState("Asap!");
    const phrases = ["Asap!", "Now! Now!", "as e dey hot!", "kia kia!"];
    const [fadeIn, setFadeIn] = useState(true);
    const [lineAnimationKey, setLineAnimationKey] = useState(0);
    const [textOffset, setTextOffset] = useState(0);

    const [foodData, setFoodData] = useState<typeof mockFoodData>([]);
    useEffect(() => {
        setFoodData(mockFoodData);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTextOffset(-20);
            setTimeout(() => {
                setCurrentText(prev => {
                    const nextIndex = (phrases.indexOf(prev) + 1) % phrases.length;
                    return phrases[nextIndex];
                });
                setFadeIn(true); // Start fade-in
                setTextOffset(0); // Reset the "Find chow" text position to original
                setLineAnimationKey(prev => prev + 1); // Trigger line animation reset
            }, 500); // Matching fade time

        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white">
            <div className="relative flex items-center justify-center h-auto bg-[#0E0E0E] sm:rounded-[15px] overflow-hidden">
                {/* Background Circles */}
                <div
                    className="absolute inset-0 w-full h-full grid"
                    style={{
                        gridTemplateColumns: "repeat(auto-fill, 100px)",
                        gridTemplateRows: "repeat(auto-fill, 100px)",
                    }}
                >
                    {[...Array(500)].map((_, index) => (
                        <div
                            key={index}
                            className="w-[100px] h-[100px] border-[2px] border-[#1A1A1A] rounded-full"
                            style={{ backgroundColor: "transparent" }}
                        />
                    ))}
                </div>

                <div className="flex flex-col w-full">
                    {/* Content */}
                    <div className="relative mx-auto z-10 text-white mt-10 sm:mt-20 px-4 sm:px-0">
                        {/* Text with Star Icons */}
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            <p className="text-[12px] sm:text-[15px] font-pangram font-bold uppercase">
                                Join the chow africa waitlist
                            </p>
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>

                        <div className="flex flex-wrap sm:flex-nowrap justify-center">
                            <div
                                className="flex-shrink-0 transition-all duration-500 ease-in-out"
                                style={{ transform: `translateX(${textOffset}px)` }}
                            >
                                <p className="font-medium font-pangram text-[35px] sm:text-[80px]">
                                    Find chow,
                                </p>
                            </div>

                            {/* Animated text */}
                            <div className="relative ml-2 sm:ml-4">
                                <p
                                    key={currentText}
                                    className={`font-medium z-30 mt-2 text-[35px] sm:text-[80px] text-[#009F79] font-courgette transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"
                                        } animate-typing`}
                                >
                                    {currentText}
                                </p>
                                <span
                                    key={lineAnimationKey}
                                    className="absolute z-10 bottom-[10px] sm:bottom-[20px] left-0 h-[4px] sm:h-[7px] animate-line-typing"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #D87023 10%, #D87023 50%, transparent 100%)",
                                        borderRadius: "5px",
                                        opacity: 0.9,
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex mt-4 sm:mt-5 mx-auto w-[400px] sm:w-[550px] text-center items-center justify-center space-x-2">
                            <p className="font-sofia-sans text-[14px] sm:text-[19px]">
                                The patient dog eats leftovers. Be the first to know when we launch.
                                Join our Waitlist 😎
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-10">
                            {/* Text Field */}
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="font-sofia-sans w-[250px] sm:w-[300px] px-5 py-4 sm:py-3 text-black text-[13px] sm:text-[15px] placeholder-black bg-[#F2F3F7] border border-[#D6DAD9] rounded-[15px] focus:outline-none"
                            />

                            {/* Button */}
                            <button
                                className="uppercase font-sofia-sans px-8 sm:px-8 py-2 sm:py-3 text-white text-[13px] sm:text-[15px] font-light bg-[#009F79] border-[2px] border-white rounded-[30px] hover:bg-[#007F63] transition-all duration-300"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </div>

                    <div className="w-[100%] relative flex justify-center items-center py-8 mt-40">

                        <div className="absolute z-30 sm:h-220 h-100 sm:right-40 right-10 bg-transparent">
                            <img
                                src={Mockup}
                                alt="Phone Mockup"
                                className="w-auto sm:h-220 h-140 object-cover"
                            />
                        </div>

                        {/* Marquee Wrapper animate-marquee */}
                        <div className="lg:w-[1200px] sm:w-[600px] w-[400px] overflow-hidden relative z-20">
                            {/* Marquee Wrapper */}
                            <div className="marquee-wrapper">
                                {foodData.length > 0 ? (
                                    <div className="flex animate-marquee space-x-4">
                                        {[...foodData, ...foodData].map((food, index) => (
                                            <div
                                                key={index}
                                                className="marquee-content w-[280px] p-3 pb-8 bg-white shadow-md rounded-[15px] flex-shrink-0"
                                            >
                                                <div className="bg-[#F4F3E8] rounded-[15px] h-[180px] flex items-center">
                                                    <img
                                                        src={food.image}
                                                        alt={food.title}
                                                        className="w-full h-[120px] rounded-md my-auto"
                                                    />
                                                </div>
                                                <h3 className="mt-4 text-[15px] font-pangram font-semibold text-[#3C3937]">{food.title}</h3>
                                                <div className="px-2 mt-2 font-pangram w-[42%] py-1 text=[#49280F] bg-[#D6D5CA] rounded-[15px] text-[10px] uppercase">
                                                    🍲 {food.category}
                                                </div>
                                                <div className="flex text-[#858786] font-pangram mt-2">
                                                    <img
                                                        src={ThumbUp}
                                                        className="w-auto h-4 rounded-md my-auto mr-1"
                                                    />
                                                    <p className="text-[13px] mr-3">{food.picks} picks</p>
                                                    <div className="my-auto w-1 h-1 rounded-full bg-[#858786] mr-3"></div>
                                                    <p className="text-[13px]">Approx. ₦{food.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>

                        </div>
                        {/* Orange Circle */}
                        <div
                            className="absolute opacity-40 left-[-60px] bottom-10 bg-transparent border-[8px] border-[#D87023] w-[400px] h-[400px] rounded-full z-10"
                        ></div>
                    </div>

                </div>
            </div>

            <HomeExtension />
        </div>

    );
};

export default Home;
