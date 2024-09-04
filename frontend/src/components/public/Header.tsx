import React from 'react';
import Logo from './Logo';

const Header = () => {
    return (
        <header className="bg-green-500 text-white p-4 shadow-md">
            {/* containerクラスを削除し、余白を手動で調整 */}
            <div className="flex items-center justify-between px-4">
                {/* 左寄せでLogoとh1を並べる */}
                <div className="flex items-center space-x-4">
                    <Logo />
                    <h1 className="text-2xl font-bold">My Web Application</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
                        <li><a href="#about" className="hover:text-yellow-300">About</a></li>
                        <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
                        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

