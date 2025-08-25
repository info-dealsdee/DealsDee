import React from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';

const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div className="h-16" />,
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;