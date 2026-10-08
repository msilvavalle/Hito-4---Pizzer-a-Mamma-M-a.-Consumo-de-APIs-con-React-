import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardPizza from "./components/CardPizza";

const Home = ({ setView }) => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();

      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <main>
      <Header />

      <section className="container my-4">
        <div className="row g-3">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                setView={setView}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;