import React from 'react';
import { Page, NavItem } from '../types';

interface HeaderProps {
  cafeName: string;
  navItems: NavItem[];
  currentPage: Page;
  navigateTo: (page: Page, params?: { eventId?: string }) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ cafeName, navItems, currentPage, navigateTo, isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <>
      <header className="bg-white shadow-sm fixed w-full z-50 top-0 left-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => navigateTo(Page.HOME)}
            className="handwritten text-2xl font-bold text-primary focus:outline-none"
            aria-label="ホームへ戻る"
          >
            {cafeName}
          </button>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`nav-link handwritten text-lg font-medium text-primary hover:text-opacity-80 transition-colors ${currentPage === item.page ? 'active' : ''}`}
                aria-current={currentPage === item.page ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="メニューを開閉"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <i className="ri-close-line ri-lg"></i> : <i className="ri-menu-line ri-lg"></i>}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-16 left-0 z-40 shadow-md"> {/* Adjust top to match header height */}
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={`mobile-${item.page}`}
                onClick={() => navigateTo(item.page)}
                className="handwritten text-lg font-medium py-2 border-b border-gray-100 text-primary text-left w-full hover:bg-primary hover:bg-opacity-10 transition-colors"
                aria-current={currentPage === item.page ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;