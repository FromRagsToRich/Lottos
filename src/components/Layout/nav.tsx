import Link from 'next/link';
import React from 'react';
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
    <nav className={`max-w-xl w-full overflow-hidden fixed bottom-0 h-12 px-2`}>
      <div className="w-full h-full bg-gray-100 flex rounded-lg overflow-hidden">
        {routes.map((route) => (
          <Link key={route.name} className="flex-1" href={route.path}>
            <div
              className={cls(
                'flex h-full items-center justify-center',
                isActive(route.path)
                  ? `font-bold text-purple-400 border-b-4 border-purple-400 bg-gray-200`
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
