import type { ReactNode } from 'react';
import Header from './header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-xl mx-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
