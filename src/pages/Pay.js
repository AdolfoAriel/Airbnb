import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Pay() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cardCVC, setCardCVC] = useState('');
const payment =()=>{
  return alert('your payment was received')
}
  function handleSubmit(event) {
    event.preventDefault();
    // Lógica para enviar la información de pago al servidor
  }

  return (
    <div className="payment-page">
      <h1>Realizar Pago</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-number">Número de Tarjeta:</label>
        <input
          type="text"
          id="card-number"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />

        <label htmlFor="card-name">Nombre en la Tarjeta:</label>
        <input
          type="text"
          id="card-name"
          value={cardName}
          onChange={(event) => setCardName(event.target.value)}
        />

        <label htmlFor="card-expiration">Fecha de Vencimiento:</label>
        <input
          type="text"
          id="card-expiration"
          value={cardExpiration}
          onChange={(event) => setCardExpiration(event.target.value)}
        />

        <label htmlFor="card-cvc">CVC:</label>
        <input
          type="text"
          id="card-cvc"
          value={cardCVC}
          onChange={(event) => setCardCVC(event.target.value)}
        />

        <button onClick={payment} type="submit">Realizar Pago</button>
      </form>
    </div>
  );
}

export default Pay