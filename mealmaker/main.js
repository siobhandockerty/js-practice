const menu = {
  _courses: {
    appetizers: [],
    mains:  [],
    desserts: [], 
  },
  //getters
    get appetizers() { 
      return this.appetizers},
    get mains() { 
      return this.mains},
    get desserts() { 
      return this.desserts},
    //get courses
   		get courses() { 
     		 return {
     		   appetizers: this._courses.appetizers,
     		   mains: this._courses.mains,
     		   desserts: this._courses.desserts,
    } 
   },
  //setters
  set appetizers(appetizerIn) { 
      this.appetizers = appetizerIn},
  set mains(mainsIn) { 
      this.mains = mainsIn},
  set desserts(dessertsIn) { 
      this.desserts = dessertsIn},
  
 
  
  // new dish
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  
  //random dish from a course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    //return a dish from 'dishes' by using 'randomIndex'
    return dishes[randomIndex];
  },
  //generate a random meal
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;}
  
};
//appetizers
menu.addDishToCourse('appetizers', 'halloumi salad', 14.25);
menu.addDishToCourse('appetizers', 'tomato soup', 12.25);
menu.addDishToCourse('appetizers', 'prawns', 20.25);
//mains
menu.addDishToCourse('mains', 'best steak', 72.50);
menu.addDishToCourse('mains', 'lobster', 50.25);
menu.addDishToCourse('mains', 'peri peri chicken', 40.25);
//desserts
menu.addDishToCourse('desserts', 'brownie platter', 20.25);
menu.addDishToCourse('desserts', 'sorbet', 14.25);
menu.addDishToCourse('desserts', 'red velvet cake', 24.25);


let meal = menu.generateRandomMeal();
console.log(meal);
