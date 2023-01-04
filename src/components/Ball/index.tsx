import { cls } from '@lib/bindClassName';
import React from 'react';

const createBallBackgroundColorByNumber = (lottoNumber: number = 1) => {
  if (lottoNumber < 10)
    return `from-amber-400 via-amber-500 to-amber-600  text-gray-100`;
  if (lottoNumber < 20)
    return `from-blue-400 via-blue-500 to-blue-600  text-gray-100`;
  if (lottoNumber < 30)
    return `from-red-400 via-red-500 to-red-600  text-gray-100`;
  if (lottoNumber < 40)
    return `from-slate-500 via-slate-700 to-slate-900  text-gray-100`;
  if (lottoNumber < 46)
    return `from-green-400 via-green-500 to-green-600  text-gray-100`;

  return `from-fuchsia-400 via-fuchsia-500 to-fuchsia-600  text-gray-100`;
};

function Ball({ lottoNumber }: { lottoNumber: number }) {
  const bgColor = createBallBackgroundColorByNumber(lottoNumber);

  return (
    <div
      className={cls(
        'w-20 h-20 rounded-full flex justify-center items-center font-bold',
        'bg-gradient-to-r',
        bgColor,
      )}
    >
      Ball
    </div>
  );
}

export default Ball;
