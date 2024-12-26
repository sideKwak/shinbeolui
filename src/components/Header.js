import React from 'react';
import logo from '../img/logo1.png'; // 로고 이미지

function Header() {
    return (
      <header
        className="text-gray-800 py-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 shadow-md"
        style={{ position: 'sticky', top: 0, zIndex: 100 }} // 고정 위치
      >
        <div
          className="container mx-auto flex justify-between items-center"
          style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}
        >
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 mr-4" />
            <span className="text-1xl tracking-widest text-black">....</span>
          </div>
          <nav>
            <ul className="flex space-x-6 text-black">
              <li>
                <a href="#" className="text-lg hover:text-yellow-300 transition duration-300">
                  =
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;