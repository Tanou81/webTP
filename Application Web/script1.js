let Lines = [];
let ul = document.querySelector(".ul");
let ul2 = document.querySelector(".ul2");
let container = document.querySelector(".container");
const formation = "L3 MIASHS parcours informatique SHS";
document.querySelector("p").textContent =
  "Ce cours est destiné aux " + formation;

/*utilisation d’une fonction anonyme*/
document.querySelector(".la").addEventListener("click", function () {
  const monP = document.querySelector("#monP");
  monP.innerHTML = monP.innerHTML + "<p>UN NOUVEAU P</p>";
});

document.querySelector(".le").addEventListener(
  "click",
  function () {
    console.log("la");
    fetch(
      "https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb"
    )
      .then((response) => response.json())
      .then((data) => {
        const lines = data.lines.line;
        Lines = data.lines.line;
        console.log("les lignes ", lines.length);
        // lines.forEach(element => console.log(element));
        for (i = 0; i < lines.length; i++) {
          console.log(lines[i]);
          const name = lines[i].name;
          const shortName = lines[i].shortName;
          const id = lines[i].id;

          // const monP = document.querySelector(".ul");
          const il = document.createElement("li");

          // monP.innerHTML += `<li class="${id}">${shortName} ${name} </li>`;
          il.innerHTML += `${shortName} ${name} `;
          ul.appendChild(il);
          // const monUl = document.querySelector(`.${id}`);
          il.addEventListener("click", function () {
            const element = document.querySelector('ul2');
            element.remove(); // Removes the div with the 'div-02' id
            const ul2 = document.createElement("ul", { class : 'ul2' });
            container.appendChild(ul2)
            arret(id)
          });
          // monP.innerHTML = monP.innerHTML +"<li class=''>" +shortName +" "+ name +"</li>"
        }
      })

      .catch(function (error) {
        console.log(
          "Il y a eu un problème avec l'opération fetch: " + error.message
        );
      });
  }

  
  // function(){
  // if (Lines) {
  //     for (i = 0; i < Lines.length; i++) {
  //       console.log("for")
  //       const monUl = document.querySelector(`.${Lines.id}`);
  //       monUl.addEventListener("click", function () {
  //         console.log("lick");
  //       });
  //     }
  //   }
  // }
);

function arret(id){
    fetch(
        ` https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId=${id}`
      )
        .then((response) => response.json())
        .then((data) => {
           

            console.log("data2", data)
            stops=data.physicalStops.physicalStop
            for (i = 0; i < stops.length; i++) {
                
            const name = stops[i].name
            const il = document.createElement("li");

            // monP.innerHTML += `<li class="${id}">${shortName} ${name} </li>`;
            il.innerHTML += `${name} `;
            ul2.appendChild(il);
            }
        })
        .catch(function (error) {
            console.log(
              "Il y a eu un problème avec l'opération fetch: " + error.message
            
            );
        });
    }