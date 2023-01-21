import type { ReactNode } from 'react';
import Header from './header';
import Nav from './nav';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`max-w-xl mx-auto`}>
      <Header />
      <main>{children}</main>
      <Nav />
    </div>
  );
};

export default Layout;
