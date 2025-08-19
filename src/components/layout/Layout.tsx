import React, { PropsWithChildren } from 'react';
import Header from './Header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-700">
      <Header />
      <main>{children}</main>
      {/* Un Footer pourrait être ajouté ici plus tard */}
    </div>
  );
};

export default Layout;
