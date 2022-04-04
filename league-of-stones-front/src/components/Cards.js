import React, { useState, useEffect } from "react";
import { getAllChampions } from "../utils/Query";
import "./Cards.css";
const Cards = () => {
  const [allChampions, setChampions] = useState();
  const [deckChampions, setdeckChampions] = useState([]);
  const [deckBool, setdeckBool] = useState(false);
  const [deck20, setdeck20] = useState(false);
  const [validationBoolDeck, setvalidationBoolDeck] = useState(false);
  //   useEffect(() => {PrepareCardOne2()}, [allChampions]);
  useEffect(() => {
    getData2();
    function getData2() {
      fetch("http://localhost:3001/cards")
        .then((response) => response.json())
        .then((data) => {
          console.log("data2", data);
          setChampions(data);
        })
        .catch(function (error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    }
  }, []);
  function handleCards(key, champion, index) {
    console.log("champion,key and 1", champion, key);
    console.log(deckChampions, "deckChampions handle");
    setdeckBool(true);
    if (deckChampions.length >= 20) {
      setdeck20(true);
    
    } else {
      setdeckChampions([...deckChampions, champion]);
      if (index !== -1) {
        console.log("sup", index);
        const test = allChampions.splice(index, 1);
        console.log("ChampionsWithoutIndex", ChampionsWithoutIndex);
       
        const ChampionsWithoutIndex = allChampions.filter(item => item.id !== champion.id)
        console.log("test",ChampionsWithoutIndex)
        setChampions([ ...ChampionsWithoutIndex]);
        // setChampions([...allChampions, ...ChampionsWithoutIndex]);
        console.log("sup", allChampions);
      } else {
        console.log(index);
      }
    }

    // console.log("champion,key and 2",champion,key )
    // console.log(deckChampions,"deckChampions handle 2" )
  }

  function PrepareCardOne() {
    if (allChampions) {
      const tableau = allChampions.map((champion, index) => {
        return (
          <div className="col">
            <div
              key={champion.key}
              className="card py-0 px-0 mx-auto col-xs-3 col-sm-3 col-md-3 col-lg-3 cards"
              onClick={(e) => handleCards(champion.key, champion, index)}
            >
              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                  champion.key +
                  "_0.jpg"
                }
                className="card-img-top"
              />

              <p className="my-0 px-1 py-1 bg-dark text-white">
                {champion?.info?.defense ? (
                  <>defense : {champion.info.defense}</>
                ) : (
                  <></>
                )}
              </p>
              <p className="my-0 px-1 py-1 bg-dark text-white">
                {champion?.info?.attack ? (
                  <> attack : {champion.info.attack}</>
                ) : (
                  <></>
                )}
              </p>
              <p className="my-0 px-1 py-1 bg-dark text-white">
                {champion?.info?.attack ? <> {champion.name}</> : <></>}
              </p>
            </div>
          </div>
        );
      });

      return tableau;
    }
  }

  function handlesupDeskCard(e,champion ,  index){
    console.log("sup", index)
    setChampions([...allChampions, champion]);
    if (index !== -1) {
      console.log("sup", index);
      const jesaispaspq = deckChampions.splice(index, 1);
      const ChampionsWithoutIndex = deckChampions.filter(item => item.id !== champion.id)
      console.log("test",ChampionsWithoutIndex)
      // console.log("ChampionsWithoutIndex", ChampionsWithoutIndex);
      setdeckChampions([ ...ChampionsWithoutIndex]);
      console.log("sup", deckChampions);
    } else {
      console.log(index);
    }
    if(deckChampions.length==0){
      setdeckBool(false)
    }
  }


  function PrepareCardDesk() {
    console.log("deckChampions", deckChampions);
    if (deckBool) {
      const tableau = deckChampions.map((champion, index) => {
        return (
          <div  className="col">
            <div
              key={champion.key}
              className="card py-0 px-0 mx-auto col-xs-3 col-sm-3 col-md-3 col-lg-3 cards"
              onClick={(e) => handlesupDeskCard(champion.key, champion, index)}
            >
              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                  champion.key +
                  "_0.jpg"
                }
                className="card-img-top"
              />

              <p className="my-0 px-1 py-1 bg-dark text-white">
                {champion?.info?.defense ? (
                  <>defense : {champion.info.defense}</>
                ) : (
                  <></>
                )}
              </p>
              <p className="my-0 px-1 py-1 bg-dark text-white">
                {champion?.info?.attack ? (
                  <> attack : {champion.info.attack}</>
                ) : (
                  <></>
                )}
              </p>
              <p className="my-0 px-1 py-1 bg-dark text-white">
                {champion?.info?.attack ? <> {champion.name}</> : <></>}
              </p>
            </div>
          </div>
        );
      });

      return tableau;
    }
  }

  return (
   
    <div>
       {validationBoolDeck ? <>
        {deckBool && (
            <div class="col">
              <div class="row">
                {deckBool && (
                  <div className="row bg-dark text-light">
                    
                    <h1>deck</h1>
                   { validationBoolDeck &&(
                     <h3>Vous avez validé le deck </h3>
                   )}
                    <PrepareCardDesk></PrepareCardDesk>
                  </div>
                )}
              </div>
            </div>
          )}
       
       </>:<>
      <h2>Champions Disponible </h2>
      <div class="container">
        <div class="row ">
          <div class="col">
            <div class="row">
              <PrepareCardOne></PrepareCardOne>
            </div>
          </div>
          {deckBool && (
            <div class="col">
              <div class="row">
                {deckBool && (
                  <div className="row bg-dark text-light">
                    {deck20 && (
                      <button onClick={(e)=>setvalidationBoolDeck(true)} type="button" class="btn btn-success">
                        Success
                      </button>
                    )}
                    <h1>deck</h1>
                   { validationBoolDeck &&(
                     <h3>Vous avez validé le deck </h3>
                   )}
                    <PrepareCardDesk></PrepareCardDesk>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      </>}
    </div>

  );
};

export default Cards;
