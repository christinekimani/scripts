const test = document.getElementById("test");

test.innerText="My next move is unknown";

// creating a newElement
const kimani = document.createElement("h1");
const headingtitle = document.createTextNode("I found My Next Move");

kimani.appendChild(headingtitle);
const printtoDom = document.getElementById("newElement");
printtoDom.appendChild(kimani);


// creating a favoriteDish
const favoriteDish =document.createElement("h2");
const dishHeading = document.createTextNode("My Favorite Dish Is Githeri");


favoriteDish.appendChild(dishHeading);
const printtoDish =document.getElementById("printtoDish");
printtoDom.appendChild(favoriteDish);

// one for pets
const pets = document.createElement("h2");
const petsHeading = document.createTextNode("I hate animals ");

pets.appendChild(petsHeading);
const printtopets = document.createElement("printtopets");
    printtoDom.appendChild(pets);

    // colors
    const colors = document.createElement("h2");
    const colorsheading = document.createTextNode("Pink is Fun");

    colors.appendChild(colorsHeading);
    const printtocolors = document.createElement("printtocolors");
        printtoDom.appendChild(colors);
    