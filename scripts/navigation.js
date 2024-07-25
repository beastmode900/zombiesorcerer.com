

const container = document.getElementById("bg-container");
const bodyElement = document.body;



//clickable elements HTML
const clickables = {  //use ` (not ') for these because the divs have double quotes and single quotes inside them
    toLeft: `<div class="toLeft clickable" onclick="moveLocation('left')"></div>`,
    toUp: `<div class="toUp clickable" onclick="moveLocation('up')"></div>`,
    toRight: `<div class="toRight clickable" onclick="moveLocation('right')"></div>`,
    toHome: `<div class="toHome clickable" onclick="moveLocation('home')"></div>`,

}

/* basic logic for the array's above and below is that the locations inside of a location (like how home contains left: 1) is set to 
   one meaning that it is somewhere you can get to from that room, and that they need to match the name of the clickable so 
   you can use it as an exact key to choose which divs you want to take from the clickables array, which is how you populate the html
   page with just the things that you want  */

//different locations
const locations = {
    home: {
        toLeft: 1,
        toRight: 1,
        toUp: 1,
        previous: "",
        background: 'url("./assets/images/treepicEdit.png")'
    },

    up: {
        toLeft: 1,
        toRight: 1,
        toHome: 1,
        previous: "",
        background: 'url("./assets/images/IMG_2344.JPG")'
    },

    left: {
        toHome: 1,
        toUp: 1,
        previous: "",
        background: 'url("./assets/images/IMG_2374.JPG")'
    },

    right: {
        toHome: 1,
        toUp: 1,
        previous: "",
        background: 'url("./assets/images/IMG_2375.JPG")'
    },
}

//grab currently clickable elements 
const clickableElements = document.querySelectorAll(".clickable");
let currentLocation = "home";
let previousLocation = "home";

function moveLocation(newLocation){
    // previousLocation = currentLocation; //store last location for back button
    locations[newLocation].previous = currentLocation;
    currentLocation = newLocation; //set currentLocation to where we want to move
 
    const locationDivs = locations[currentLocation];
    const locationHTML = Object.keys(locationDivs)
    .filter((div) => locationDivs[div] === 1)
    .map((div) => clickables[div])
    .join("");

    container.innerHTML = locationHTML;
    container.style.backgroundImage = locationDivs["background"];



}
    moveLocation(currentLocation); //call once to start on home


    function moveLocationWithBack(newLocation){
        // previousLocation = currentLocation; //store last location for back button
        if(newLocation === currentLocation){
            return;
        }
        currentLocation = newLocation; //set currentLocation to where we want to move
     
        const locationDivs = locations[currentLocation];
        const locationHTML = Object.keys(locationDivs)
        .filter((div) => locationDivs[div] === 1)
        .map((div) => clickables[div])
        .join("");
    
        container.innerHTML = locationHTML;
        container.style.backgroundImage = locationDivs["background"];
    
    
    
    }