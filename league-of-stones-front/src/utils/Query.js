import { useState } from "react";

/*Get every existing students*/
export const getAllChampions = async () => {
    let res = null
   fetch(
    "http://localhost:3001/cards"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data2", data);
       res = data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

  return res;
};
