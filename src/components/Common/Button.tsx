interface Props {
  onClick: () => void;
  text: string;
  value?: string;
  loading?: boolean;
  [key: string]: any;
}

function Button({ onClick, value, text, loading, ...props }: Props) {
  return (
    <button
      className="w-full bg-purple-400 py-3 px-4 rounded-lg text-white bold"
      onClick={onClick}
      value={value}
      {...props}
    >
      {loading ? '로딩중...' : text}
    </button>
  );
}

export default Button;
