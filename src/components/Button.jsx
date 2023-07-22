const Button = (props) => {
  const { text, type, fn } = props;
  return (
    <button
      type={type}
      onClick={fn}
      className="border-2 px-8 py-3 rounded-md border-gray-700 hover:bg-gray-700 bg-gray-900"
    >
      {text}
    </button>
  );
};

export default Button;
