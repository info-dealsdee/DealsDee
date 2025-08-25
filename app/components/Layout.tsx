import React from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import PageTransition from './PageTransition';

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
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;