//Define a constructor function that produces objects representing a single food item. Add parameters to the constructor for the given properties and add themas instance variables.
var FoodItem = function(name, calories, vegan, glutenFree){
		this.name       = name
		this.calories   = calories
		this.vegan      = vegan
		this.glutenFree = glutenFree
	
}

var burger = new FoodItem('burger', 500, false, false)
console.log(burger)
console.log('--------------------------------')


// - Define a `stringify` method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. `stringify` should not have any side effects.
// Instantiate three different FoodItems and store each in a separate variable. Call `stringify()` on each instance and print the result to the console.


var lettuce  = new FoodItem('lettuce', 0, true, true);
var beefPatty= new FoodItem('beefPatty', 200, false, true);
var bun      = new FoodItem('bun', 100, true, false);
var tomatoes = new FoodItem('tomatoes', 0, true, true);
var onions   = new FoodItem('onions', 0, true, true);
var crutons  = new FoodItem('crutons', 0, true, false);


	FoodItem.prototype.stringify = function(){
		if (this.vegan === true){
			this.vegan = 'is vegan'
		} else{
			this.vegan = 'is not vegan'
		}

		if(this.glutenFree === true){
			this.glutenFree = 'is gluten free'
		} else{
			this.glutenFree = 'is not gluten free'
		}

		return(`${this.name}, which has ${this.calories} calories, ${this.vegan}, and ${this.glutenFree}`)	

	}

console.log(bun.stringify())
console.log('--------------------------------')

// part 2
// Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.

// PLATE
var Plate = function(name, description, price, ingredients){
	this.name       = name
	this.description= description
	this.price      = price
	this.ingredients= ingredients
}
var lettuce  = new FoodItem('lettuce', 0, true, true);
var beefPatty= new FoodItem('beefPatty', 200, false, true);
var bun      = new FoodItem('bun', 100, true, false);
var tomatoes = new FoodItem('tomatoes', 0, true, true);
var onions   = new FoodItem('onions', 0, true, true);
var crutons  = new FoodItem('crutons', 0, true, false)



	var MichaelsBurgerPlate = new Plate("Michael's Burger Plate" , "Michael's finest", 10, [lettuce.stringify(), beefPatty.stringify(), bun.stringify()] ) //adding a new instance

	var MichaelsSalad = new Plate("Michael's Salad" , "a mediocre salad", 8, [onions.stringify(), crutons.stringify(), tomatoes.stringify()] ) //adding a new instance

		Plate.prototype.stringify = function(){
			return (`Enjoy ${this.name}. It's ${this.description}. It costs ${this.price} dollars, and contains ${this.ingredients}.`)
		}
	
console.log(MichaelsBurgerPlate.stringify())
console.log('--------------------------------')
console.log(MichaelsSalad.stringify())
console.log('--------------------------------')
// MENU

var Menu = function(name, plates){
	this.name = name
	this.plates = plates
}

var lettuce  = new FoodItem('lettuce', 0, true, true);
var beefPatty= new FoodItem('beefPatty', 200, false, true);
var bun      = new FoodItem('bun', 100, true, false);
var tomatoes = new FoodItem('tomatoes', 0, true, true);
var onions   = new FoodItem('onions', 0, true, true);
var crutons  = new FoodItem('crutons', 0, true, false)

	var michaelsDinerMenu = new Menu('Michaels Diner Menu', [MichaelsBurgerPlate.stringify(), MichaelsSalad.stringify(), 'Goat Meat Special'])

		Menu.prototype.stringify = function(){
			return (`${this.name} offers ${this.plates}.`)
		}
console.log(michaelsDinerMenu.stringify())
console.log('--------------------------------')

//IS THERE A WAY TO NOT HAVE TO INCLUDE MY INGREDIENT VARIABLES IN EACH SECTION. 


















