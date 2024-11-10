const Error = ({ mensaje }) => {
  return (
    <p className="bg-red-700 text-white py-4 px-4 mt-4 mb-4 uppercase font-bold text-center">
      {mensaje}
    </p>
  );
};
export default Error;
