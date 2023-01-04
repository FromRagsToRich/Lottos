import { cls } from '@lib/bindClassName';
import { useVisible } from '@lib/hooks';
import React, { useState } from 'react';

type DropdownProps = {
  placeholder: string;
};

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

function Dropdown() {
  const { ref, visible, setVisible } = useVisible<HTMLDivElement>(false);

  const handleOpen = () => {
    setVisible((prev) => !prev);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="w-full relative" onBlur={handleClose}>
      <div
        ref={ref}
        className="p-4 border-2 border-gray-100 bg-gray-100 text-gray-400 font-bold cursor-pointer"
        onClick={handleOpen}
      >
        Button
      </div>
      <div
        className={cls(
          `${visible ? 'block' : 'hidden'}`,
          'w-full p-4',
          'absolute top-16',
          'border-2 border-gray-100',
        )}
      >
        <div className="p-2 hover:bg-gray-200 rounded-lg">1</div>
      </div>
    </div>
  );
}

export default Dropdown;
