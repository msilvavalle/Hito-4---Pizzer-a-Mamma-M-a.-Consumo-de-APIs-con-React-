import { useEffect, useState } from "react";
import napolitana from "../assets/pizzas/napolitana.jpg";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/pizzas/p001"
      );

      const data = await response.json();

      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <div className="container my-5">
      <div className="card">
        <div className="row g-0">

          <div className="col-md-6">
          <img
  src={pizza.img}
  alt={pizza.name}
  className="img-fluid rounded-start"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = napolitana;
  }}
/>
          
          </div>

          <div className="col-md-6">
            <div className="card-body">

              <h2 className="text-capitalize">
                Pizza {pizza.name}
              </h2>

              <p>
                {pizza.desc}
              </p>

              <h5>Ingredientes:</h5>

              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>

              <h3 className="mt-3">
                Precio: ${pizza.price.toLocaleString("es-CL")}
              </h3>

              <button className="btn btn-dark mt-3">
                Añadir 🛒
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pizza;