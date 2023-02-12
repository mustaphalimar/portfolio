interface Props {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ text, className, onClick }: Props) {
  return (
    <button
      className={`${className} bg-primaryGreen rounded-lg flex items-center justify-center py-2 px-4`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
