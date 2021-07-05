// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
 // Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush) => {
    if (state.mushrooms){
      oneMush.style.visibility= 'visible';
    } else {
      oneMush.style.visibility= 'hidden';
    }
  };
 
}
// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {document.querySelectorAll('.green-pepper').forEach((OneGreenPep) => {
  if (state.greenPeppers) {
    OneGreenPep.style.visibility = 'visible';
  } else {
    oneGrennpep.style.visibility = 'hidden';
  }
});
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
var sauce= document.querySelector('.sauce sauce-white') ;
sauce.remove (sauce-white);
sauce.append(sauce-white);

}


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {

  var crust=document.querySelector ('.crust crust-gluten-free');
   crust.remove (crust-gluten-free);
   crust.append (crust-gluten-free);
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  var btnPepper= document.querySelector('.btn.btn-pepperoni');
  btnPepper.remove ()
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn btn-mushrooms active").addEventListener('click', function () {
  state.mushrooms=!
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
