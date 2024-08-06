import React from "react";
import Ingredient from "./Ingredient";

/*

 <Ingredient 
        amount={ingredient.amount}
        measurement={ingredient.measurement}
        name={ingredient.name} />
<Ingredient amount=500, measurement="그램", name="연어" />


let ingredient = {
  amount: 500,
  measurement: "그램",
  name: "연어"
}

let { amount, measurement, name } = {...ingredient} 

{...ingredient} 
*/


export default function IngredientsList({ list }) {
  return (
    <ul className="ingredients">
      { list.map((ingredient, i)=>(
          <Ingredient key={i} {...ingredient} />
          // <Ingredient amount={500} measurement="그램" name="연어" />
      )) }
    </ul>
  );
}

IngredientsList.displayName = "IngredientsList";