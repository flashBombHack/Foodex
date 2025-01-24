import { ReactComponent as StarIcon } from "../../assets/StarIconBlack.svg";
import Person from "../../assets/Person.svg";
import ThumbUp from "../../assets/ThumbUp.svg";
import Writup from "../../assets/Writup.svg";
import { foodData as mockFoodData } from "../../data/foodData.ts";
import React, { useState, useEffect } from "react";

const HomeExtension: React.FC = () => {
    const [foodCards, setFoodData] = useState<typeof mockFoodData>([]);

    useEffect(() => {
        setFoodData(mockFoodData);
    }, []);

    return (
        <div className="flex flex-col w-full mt-10">

            <div className="relative flex flex-col text-center items-center justify-center mx-auto z-10 text-black mt-20">

                <div className="flex text-center items-center justify-center space-x-3">
                    <StarIcon className="w-4 h-4 text-black" />
                    <p className="text-[15px] font-pangram font-bold uppercase">
                        Join the chow africa waitlist
                    </p>
                    <StarIcon className="w-4 h-4 text-black" />
                </div>
                <p className="text-[48px] md:text-[64px] font-pangram font-normal">
                    tired of eating the
                </p>
                <div className="text-[30px] md:text-[40px] shadow-lg text-white text-center bg-[#D87023] rounded-[40px] px-3 py-0 border-[5px] border-black font-sofia-sans font-normal">
                    🍛 same dishes everyday? 🍝
                </div>

                <p className="text-[16px] md:text-[20px] font-sofia-sans font-normal w-[90%] md:w-[60%] mt-3">
                    Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your next dish.
                </p>
            </div>

            <div className="bg-[#FFFAF2] sm:pr-16 py-16 px-0 sm:px-8 mt-20 relative overflow-hidden rounded-[20px]">

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* Left Panel: Food Cards */}
                    <div className="grid grid-cols-3 gap-2 w-[95%] sm:w-1/2 z-20">
                        {foodCards.map((food, index) => {

                            let gradientClass = "";

                            if (
                                (index >= 1 && index <= 2) ||
                                (index === 3 || index === 5) ||
                                (index === 6 || index === 7)
                            ) {
                                if (index >= 3 && index <= 5) {
                                    gradientClass = "opacity-20";
                                } else if (index >= 6 && index <= 7) {
                                    gradientClass = "opacity-10";
                                } else {
                                    gradientClass = "opacity-30";
                                }
                            }

                            return (
                                <div
                                    key={index}
                                    className={`marquee-content w-[90] sm:w-[180px] p-2 pb-3 bg-white shadow-md rounded-[15px] flex-shrink-0 ${gradientClass}`}
                                >
                                    <div className="bg-[#F4F3E8] rounded-[15px] h-[110px] flex items-center">
                                        <img
                                            src={food.image}
                                            alt={food.title}
                                            className="w-full h-[90px] rounded-md my-auto"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-[11px] font-pangram font-semibold text-[#3C3937]">
                                        {food.title}
                                    </h3>
                                    <div className="px-1 mt-2 font-pangram w-[50%] py-1 text=[#49280F] bg-[#D6D5CA] rounded-[15px] text-[8px] uppercase">
                                        🍲 {food.category}
                                    </div>
                                    <div className="flex text-[#858786] font-pangram mt-2">
                                        <img
                                            src={ThumbUp}
                                            className="w-auto h-2 rounded-md my-auto mr-1"
                                        />
                                        <p className="text-[8px] mr-3">{food.picks} picks</p>
                                        <div className="my-auto w-1 h-1 rounded-full bg-[#858786] mr-3"></div>
                                        <p className="text-[8px]">Approx. ₦{food.price}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Panel */}
                    <div className="relative w-full sm:w-2/4 flex justify-center items-center z-20 mt-8 sm:mt-0">

                        <img
                            src={Person}
                            alt="Person"
                            className="rounded-lg w-[90%] h-auto shadow-lg"
                        />


                        <div className="absolute top-32 sm:top-40 font-sofia-sans right-4 sm:-right-12 border-white border-2 rounded-lg bg-[#D87023] text-white text-[10px] sm:text-[11px] px-2 py-2 shadow-lg">
                            <div className="font-bold p-1 rounded-full bg-[#77441E] w-[15%]">💵</div>
                            <div>
                                You can buy all for{" "}
                                <span className="font-bold text-[#01FFC2]">₦2,500</span> at Yaba
                            </div>
                        </div>


                        <div className="absolute bottom-24 sm:bottom-40 left-3">

                            <div className="bg-[#009F79] w-[140px] sm:w-[170px] text-white border-white border-2 font-sofia-sans text-[10px] sm:text-[11px] px-1 py-2 rounded-md shadow-lg flex items-center">
                                <div className="font-bold p-1 rounded-full bg-[#1E735E] w-[15%]">👍🏽</div>
                                <div className="ml-1">Picked by 314 people today</div>
                            </div>
                        </div>


                        <div className="absolute bottom-[60px] sm:bottom-[100px] left-8 sm:left-14 flex flex-col space-y-4">
                            <div className="bg-[#009F79] w-[140px] sm:w-[170px] text-white border-white border-2 font-sofia-sans text-[10px] sm:text-[11px] px-1 py-2 rounded-md shadow-lg flex items-center">
                                <div className="font-bold p-1 rounded-full bg-[#1E735E] w-[15%]">🧅</div>
                                <span className="ml-1">Exclude onions.</span>
                            </div>
                        </div>


                        <div className="absolute bottom-[20px] sm:bottom-[40px] left-12 sm:left-24 flex flex-col space-y-4">
                            <div className="bg-[#009F79] w-[140px] sm:w-[170px] text-white border-white border-2 font-sofia-sans text-[10px] sm:text-[11px] px-1 py-2 rounded-md shadow-lg flex items-center">
                                <div className="font-bold p-1 rounded-full bg-[#1E735E] w-[15%]">🥩</div>
                                <span className="ml-1">Must include turkey</span>
                            </div>
                        </div>
                    </div>
                </div>


                <img
                    src={Writup}
                    alt="Top Left Decoration"
                    className="absolute top-[65px] left-[-30px] w-auto h-20 z-10"
                />


                <img
                    src={Writup}
                    alt="Bottom Right Decoration"
                    className="absolute bottom-[100px] right-[-20px] w-auto h-20 z-10"
                />
            </div>

            <div className="bg-white border w-[90%] sm:w-full mb-10 rounded-[20px] shadow-lg p-6 px-10 flex sm:flex-row flex-col sm:space-y-0 space-y-20 justify-between items-center mt-10 mx-auto">

                <div>
                    <h3 className="font-pangram text-[#353542] sm:text-[35px] text-[47px] font-semibold">
                        Signup to <span className="px-4  bg-[#5F63E1] font-sofia-sans border-2 border-black text-white rounded-[40px] ">chowafrica</span> and say
                    </h3>
                    <h3 className="text-gray-800 font-semibold sm:text-[35px] text-[47px] mt-2 flex sm:flex-row flex-col">
                        <span className="px-4 w-[68%] sm:w-auto bg-black font-sofia-sans border-2 border-[#009F79] rounded-[40px] text-white  mr-2">
                            goodbye 👋
                        </span>  to mealtime stress.
                    </h3>
                </div>


                <button className="bg-[#00A380] sm:text-md text-[25px] border-2 border-white font-sofia-sans text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-[#008066]">
                    JOIN WAITLIST
                </button>
            </div>
        </div>
    );
};

export default HomeExtension;

