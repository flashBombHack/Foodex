import React from "react";
import logo from "../../assets/FoodexLogo.svg";

const Sidebar: React.FC = () => {
  const activeLinkClass =
    "border-l-[3px] pt-1 pb-1 font-bold font-sofia-sans border-orange-500 pl-4 text-[#353542]";
  const linkClass =
    "pl-4 font-bold font-sofia-sans text-[#353542] hover:text-black";

  return (
    <aside className="flex flex-col items-center h-screen w-40 bg-white py-10">
      {/* Logo */}
      <img src={logo} alt="Chow Africa Logo" className="mb-20 w-auto h-20" />

      {/* Sidebar Items */}
      <nav className="flex flex-col  w-full space-y-6 px-4">
        <a href="/" className={activeLinkClass}>
          Home
        </a>
        <a href="/join-waitlist" className={linkClass}>
          Join waitlist
        </a>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mt-5 pb-6 px-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex justify-center items-center rounded-md bg-[#F7ECE4] hover:bg-orange-200"
        >
          <i className="text-[#D87023] fab fa-facebook"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex justify-center items-center rounded-md bg-[#F7ECE4] hover:bg-orange-200"
        >
          <i className="text-[#D87023] fab fa-twitter"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex justify-center items-center rounded-md bg-[#F7ECE4] hover:bg-orange-200"
        >
          <i className="text-[#D87023] fab fa-instagram"></i>
        </a>
      </div>

      {/* Gradient Circle Section */}
      <div className="absolute top-[110%] left-0 flex gap-0 mt-auto">
        {/* Vertical Rows */}
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-col items-center gap-0">
            {/* Circles in Each Column */}
            {[...Array(4)].map((_, colIndex) => {
              // Calculate opacity based on the position
              const opacity = 0.04 + (0.04 * colIndex);
              return (
                <div
                  key={colIndex}
                  className="w-[60px] h-[60px] border-2 border-orange-500 rounded-full"
                  style={{ opacity }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
