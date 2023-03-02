export const InputLabel = ({ text, label, onChangeHandler }) => {
  const textLowerCase = label.toLowerCase();

  return (
    <div className='flex flex-col'>
      <label
        className='text-secondary text-sm cursor-pointer'
        htmlFor={`input-${textLowerCase}`}>
        {label}
      </label>
      <input
        type='text'
        id={`input-${textLowerCase}`}
        name={`input-${textLowerCase}`}
        className='outline-none border-b-2 w-72'
        placeholder={`Ingrese el ${label.toLowerCase()}`}
        onChange={onChangeHandler}
        value={text}
      />
    </div>
  );
};
