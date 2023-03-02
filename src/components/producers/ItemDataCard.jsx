export const ItemDataCard = ({ docNumber, name, phoneNumber }) => {
  return (
    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
      <h3>
        <span className='font-bold'>Name: </span> {name}
      </h3>
      <p className='w-full'>
        <span className='font-bold'>Documento: </span> {docNumber}
      </p>
      <p className='w-full'>
        <span className='font-bold'>Teléfono: </span> {phoneNumber}
      </p>
    </div>
  );
};
