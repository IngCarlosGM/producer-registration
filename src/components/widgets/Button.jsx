export const Button = ({ text, buttonHandler }) => {
  return (
    <button
      className='text-white bg-third flex items-center justify-center p-4 mt-2 h-5 rounded-md hover:text-fourth outline-third'
      onClick={buttonHandler}>
      {text}
    </button>
  );
};
