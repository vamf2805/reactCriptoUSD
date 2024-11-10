import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';

function App() {
  const [moneda, setMoneda] = useState(1);
  const [criptomoneda, setCriptomoneda] = useState('');
  const [criptoValor, setCriptoValor] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const calcularCripto = async () => {
      if (moneda === '') return;

      //Consultar la API para la cotizacion
      const resultado = await fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${criptomoneda}&tsyms=USD`
      );
      const data = await resultado.json();
      setCriptoValor(data.USD);
    };
    calcularCripto();
  }, [moneda, criptomoneda]);

  const cotizarCripto = (e) => {
    e.preventDefault();
    //Validacion de campos
    if (moneda === '' || criptomoneda === '') {
      setError(true);
      console.log('Todos los campos son obligatorios');
      return;
    } else {
      setError(false);
      setTotal(moneda / criptoValor);
    }
  };

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-2">
          <Formulario
            moneda={moneda}
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
            crptomoneda={criptomoneda}
            cotizarCripto={cotizarCripto}
            error={error}
            total={total}
          />

          <Cotizacion />
        </div>
      </div>
    </>
  );
}

export default App;
