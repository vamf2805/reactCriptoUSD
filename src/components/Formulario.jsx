import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({
  criptomoneda,
  setCriptomoneda,
  moneda,
  setMoneda,
  cotizarCripto,
  error,
  total,
}) => {
  const [listaCripto, setListaCripto] = useState([]);

  useEffect(() => {
    const consultarLista = async () => {
      const resultado = await fetch(
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=4&tsym=USD'
      );
      const datos = await resultado.json();

      setListaCripto(datos.Data);
    };
    consultarLista();
  }, []);

  return (
    <form onSubmit={cotizarCripto}>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md bg-rojo">
        <div className="mb-4 bg-rojo text-blanco">
          <h2 className="text-2xl font-bold mb-4 bg-rojo">
            Convertidor de USD a Criptomonedas
          </h2>
          <p className="text-lg font-bold mb-4 bg-rojo">
            Ingresar el valor en USD
          </p>
          <input
            value={moneda}
            onChange={(e) => setMoneda(e.target.value)}
            className="bg-negro w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-4"
            type="number"
          />

          <p className="text-lg font-bold mb-4 bg-rojo">
            Seleccionar la criptomoneda
          </p>
          <select
            onChange={(e) => setCriptomoneda(e.target.value)}
            value={criptomoneda}
            className="w-full p-2 text-sm text-gray-700 border text-white border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-4"
          >
            <option value="">Seleccionar criptomoneda</option>
            {listaCripto.map((item) => (
              <option key={item.CoinInfo.Id} value={item.CoinInfo.Name}>
                {item.CoinInfo.FullName}
              </option>
            ))}
          </select>
        </div>

        {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
        <input
          value="Convertir"
          type="submit"
          className="bg-marron w-full p-2 text-sm text-white rounded-lg hover:bg-blue-700 focus:ring-blue-500 focus:border-blue-500"
        />
        {total > 0 ? (
          <p className="mt-4 text-blanco bg-rojo">
            El valor al cambio de USD es
            <label className="font-bold bg-rojo text-blanco">{total}</label>
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default Formulario;
