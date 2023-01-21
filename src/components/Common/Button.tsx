import { cls } from '@lib/bindClassName';
import { PRIMARY_BG_COLOR } from 'src/constants';

interface Props {
  onClick: () => void;
  text: string;
  value?: string;
  loading?: boolean;
  disabled: boolean;
  [key: string]: any;
}

function Button({ onClick, value, text, loading, disabled, ...props }: Props) {
  const styleByDisabled = disabled
    ? `bg-gray-200 disabled text-black`
    : `${PRIMARY_BG_COLOR} text-white`;
  return (
    <button
      className={cls(
        'w-full h-full py-4 px-4 rounded-lg bold flex justify-center items-center',
        styleByDisabled,
      )}
      onClick={onClick}
      value={value}
      {...props}
    >
      {loading ? '로딩중...' : text}
    </button>
  );
}

export default Button;
