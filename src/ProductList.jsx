import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Indoor",
    plants: [
      { name: "Aloe Vera", price: 10, image: "image1.jpg" },
      { name: "Snake Plant", price: 15, image: "image2.jpg" },
    ],
  },
  {
    category: "Outdoor",
    plants: [
      { name: "Rose", price: 12, image: "image3.jpg" },
      { name: "Tulip", price: 18, image: "image4.jpg" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>

          {category.plants.map((plant, idx) => (
            <div key={idx}>
              <img src={plant.image} alt={plant.name} width="100" />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button onClick={() => dispatch(addItem(plant))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;

