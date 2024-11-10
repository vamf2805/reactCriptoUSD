import { useState, useEffect } from 'react';

const Cotizacion = () => {
  const [valores, setValores] = useState([]);

  useEffect(() => {
    const listacriptos = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=4&tsym=USD'
        );
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        setValores(data.Data); // Asegúrate de que muestra datos en la consola
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    listacriptos();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1">
        {valores.map((item) => (
          <div
            className="bg-rojo rounded-md p-4 my-2 shadow-md max-w-md text-blanco"
            key={item.CoinInfo.Id}
          >
            <h2 className="text-2xl font-bold bg-rojo">
              {item.CoinInfo.FullName} - {item.CoinInfo.Name}
            </h2>
            <p className="bg-rojo">
              Valor actual:{' '}
              <label className="bg-rojo font-bold">{item.RAW.USD.PRICE}</label>{' '}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cotizacion;
