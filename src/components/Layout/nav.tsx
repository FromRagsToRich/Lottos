import Link from 'next/link';
import React from 'react';
import { MAX_WIDTH, PRIMARY_TEXT_COLOR } from 'src/constants';
import { useRouter } from 'next/router';
import { cls } from '@lib/bindClassName';

const isActivePath = (currentPathname: string) => (targetPathname: string) => {
  return currentPathname === targetPathname;
};

const routes = [
  { path: '/', name: '로또' },
  { path: '/statistics', name: '통계' },
];

function Nav() {
  const { pathname } = useRouter();
  const isActive = isActivePath(pathname);

  return (
    <nav className={`${MAX_WIDTH} w-full overflow-hidden fixed bottom-0 h-16`}>
      <div className="w-full h-full bg-gray-100 flex rounded-lg  overflow-hidden">
        {routes.map((route) => (
          <Link key={route.name} className="flex-1" href={route.path}>
            <div
              className={cls(
                'flex h-full items-center justify-center',
                isActive(route.path)
                  ? `font-bold ${PRIMARY_TEXT_COLOR} bg-gray-200`
                  : '',
              )}
            >
              {route.name}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
