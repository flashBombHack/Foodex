import React, { useState } from 'react';
import Sidebar from './Sidebar.tsx';
import ContentContainer from './ContentContainer.tsx';
import { ReactComponent as CloudIcon } from '../../assets/CloudIcon.svg';
import { ReactComponent as CloudIcon1 } from '../../assets/CloudIcon1.svg';
import logo from '../../assets/FoodexLogo.svg';

const Layout: React.FunctionComponent = () => {
    const [selectedItem, setSelectedItem] = useState<string>('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSelect = (item: string) => {
        setSelectedItem(item);
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative flex flex-col bg-white">
            {/* Background Clouds */}
            <CloudIcon1 className="absolute z-10 sm:bottom-[1150px] bottom-[2150px] left- w-auto sm:h-[120px] h-[80px] animate-floating" />
            <CloudIcon className="absolute z-10 sm:bottom-[1150px] bottom-[2150px] -right-0 w-auto sm:h-[170px] h-[80px] animate-floating-reverse" />

            {/* Top Bar (Visible only on mobile) */}
            <div className="flex items-center justify-between p-4 bg-white z-10 md:hidden">
                {/* Logo (Left End) */}
                <img src={logo} alt="Chow Africa Logo" className="w-auto h-14" />

                {/* Right Section: Hamburger + Button */}
                <div className="flex items-center space-x-2">
                    <button className="bg-[#D87023] font-sofia-sans text-white px-4 py-1 mr-5 rounded-[40px] font-medium">
                        Join Waitlist
                    </button>
                    <button className="text-2xl text-black" onClick={handleSidebarToggle}>
                        <i className="fas fa-bars" />
                    </button>
                </div>
            </div>

            {/* Main Layout */}
            <div className="relative flex">
                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full'
                        } md:static md:translate-x-0 md:block`}
                >
                    <Sidebar />
                </div>

                {/* Content Container with Fade-Up Animation */}
                <div className="flex-1 animate-fadeUp">
                    <ContentContainer selectedItem={selectedItem} />
                </div>
            </div>

            {/* Overlay to close sidebar (only on mobile) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={handleSidebarToggle}
                />
            )}
        </div>
    );
};

export default Layout;
