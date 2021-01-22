import React, {useState, useEffect} from "react";
import "./itemListContainer.css";
export default function App() {
  const [productos, setProductos] = useState()
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=fordfocus&limit=10")
      .then(response => response.json())
      .then(data => setProductos(data.results));
  }, []);
  console.log(productos)
  return (
    <div className="containerr">
      {productos?.map((producto) => {
        return (
          <div className="producto">
          <img src={producto.thumbnail} alt="producto ML" style={{height: '100px'}}/>
          <span>{`$${producto.price} pesos`}</span>
          <span>{producto.address.city_name}</span>
          </div>)
      })}
    </div>
  );
}
