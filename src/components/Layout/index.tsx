import type { ReactNode } from 'react';
import { MAX_WIDTH } from 'src/constants';
import Header from './header';
import Nav from './nav';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${MAX_WIDTH} mx-auto`}>
      <Header />
      <main>{children}</main>
      <Nav />
    </div>
  );
};

export default Layout;
