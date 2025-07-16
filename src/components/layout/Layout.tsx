import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <div className='flex justify-center p-3 items-center gap-2 bg-white text-gray-600'>
        <p className='flex gap-1 items-center'>
          Created and Designed by{' '}
          <a href='https://webbound.dev'>
            <img
              src='/assets/webbound.png'
              className='w-auto h-3'
              alt='WebBound'
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Layout;