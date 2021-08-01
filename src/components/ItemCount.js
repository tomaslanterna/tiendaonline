import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

function ItemCount() {
  const [cont, setCont] = useState(0);
  var fecha = new Date();
  useEffect(() => {
    fecha = Date.now();
  }, [cont]);

  return (
    <div>
      <p>
        Vas clickeando {cont} veces, fecha {fecha.toLocaleString()}
      </p>
      <button onClick={() => setCont(cont + 1)}>Click aqui</button>
    </div>
  );
}

export default ItemCount
