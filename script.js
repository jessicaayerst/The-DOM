// // var headingElement = document.querySelector("#main-heading");

// // headingElement.innerHTML = "Hello, world!";

// // // Lightning Exercise #1
// // // Hello, world
// // // In your index.html file, add an h1 element with an id of #hello-container.
// // // In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
// // // Use document.querySelector to target your #hello-container
// // // User the .innerHTML property to insert the value of your greeting variable into your #hello-container element.
// // // Collapse


// // var greetC2 = "Hello, Cohort 2!";
// // document.querySelector("#helloC2").innerHTML = greetC2;

// // var greeting = "Hello, World!";
// // document.querySelector("#hello-container").innerHTML = greeting;




// var currentSpecial = {
//     name: "Fried Green Tomato BLT",
//     description: "So good you'll cry",
//     price: 9.99
//   }
  



//   var htmlString = `
//   <h3 class="dish-name">${currentSpecial.name}</h3>
//   <p class="dish-description">
//     ${currentSpecial.description}
//   </p>
//   <h5 class= "dish-price">${currentSpecial.price}</h5>
// `


// document.querySelector("#daily-special").innerHTML = htmlString;



// var menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]

// for(var i = 0; i < menuItemsArray.length; i++){
//     // target the menu items container and add a bullet for each item in the array
//     document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`
  
//   }

//   += means add to what is already there, do not replace it instead it just adds to it.add

// Lightnight Exercise #2
// Keeping track of chores
// In your index.html file, create an empty <ul> element and give it an id of #chores-container
// In your JavaScript file, declare a new variable called choresArray. This should be an array of chores you do regularly.
// Loop through your choresArray. For each chore, create a new <li> element and insert it into the #chores-container element.
// You should end up with a bulleted list of all your regular chores.


var choresArray = ["wash dishes", "do laundry", "sweep and mop", "change kitty litter", "wash and brush dogs", "clean pool"]

for(var i = 0; i < choresArray.length; i++){
    document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
}

