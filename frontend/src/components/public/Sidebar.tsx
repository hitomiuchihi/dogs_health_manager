import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-yellow-200 h-full p-6 shadow-lg">
            <nav>
                <ul className="space-y-4">
                    <li><a href="#home" className="block text-green-800 hover:text-green-500">Home</a></li>
                    <li><a href="#about" className="block text-green-800 hover:text-green-500">About</a></li>
                    <li><a href="#services" className="block text-green-800 hover:text-green-500">Services</a></li>
                    <li><a href="#contact" className="block text-green-800 hover:text-green-500">Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;

