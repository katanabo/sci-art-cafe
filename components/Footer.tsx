import React from 'react';

interface FooterProps {
  cafeName: string;
}

const Footer: React.FC<FooterProps> = ({ cafeName }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <a href="#" onClick={(e) => { e.preventDefault(); /* Ideally navigate to home */}} className="handwritten text-xl font-bold text-primary hover:text-opacity-80 transition-colors">
              {cafeName}
            </a>
            <p className="mt-2 text-sm text-gray-600">知的好奇心と感性が共鳴する空間</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-primary transition-colors">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-twitter-x-line ri-lg"></i>
              </div>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-primary transition-colors">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-instagram-line ri-lg"></i>
              </div>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-primary transition-colors">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-facebook-circle-line ri-lg"></i>
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {cafeName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;