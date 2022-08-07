import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function FullPizza() {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62b9c7c041bf319d22855607.mockapi.io/pizzas/` + id
        );
        setPizza(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam
        porro culpa sequi nihil laudantium esse. Atque numquam minus veritatis
        minima soluta id ipsam vitae, laudantium eos, est facilis sed?
        <h3>{pizza.price} р</h3>
      </p>
    </div>
  );
}
