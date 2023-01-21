import { cls } from '@lib/bindClassName';
import { useVisible } from '@lib/hooks';
import type { ReactNode } from 'react';

type DropdownProps = {
  placeholder: string;
};

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
interface Props {
  placeholder: string;
  items: number;
  onSelect: (value: number) => void;
  selectedValue: number;
  [key: string]: any;
}

function Dropdown({
  className,
  placeholder,
  items,
  onSelect,
  selectedValue,
  ...props
}: Props) {
  const { ref, visible, setVisible } = useVisible<HTMLDivElement>(false);

  const handleOpen = () => {
    setVisible((prev) => !prev);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className={`w-full relative`} onBlur={handleClose}>
      <div
        ref={ref}
        className="rounded-lg h-full p-4 border-2 border-gray-100 bg-gray-100 text-gray-400 font-bold cursor-pointer flex items-center"
        onClick={handleOpen}
      >
        {selectedValue ? selectedValue : placeholder}
      </div>
      <div
        className={cls(
          `${visible ? 'block' : 'hidden'}`,
          'w-full p-2 bg-white',
          'absolute top-16',
          'border-2 border-gray-100',
          'rounded-lg',
        )}
      >
        {Array.from({ length: items }).map((_, i) => (
          <div
            key={`${_}-${i}`}
            onClick={() => onSelect(i + 1)}
            className="px-3 py-1 rounded-lg hover:bg-gray-100 bg-white"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
