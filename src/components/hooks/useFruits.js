import React, { useEffect, useState } from "react";

const useFruits = () => {
  const [fruitss, setFruitss] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fruit")
      .then((res) => res.json())
      .then((data) => setFruitss(data));
  }, [fruitss]);
  return [fruitss, setFruitss];
};

export default useFruits;
